$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$contentDir = Join-Path $repoRoot "content"
$protectedFile = Join-Path $repoRoot ".sync\protected.txt"
$tempDir = Join-Path ([System.IO.Path]::GetTempPath()) "dow4-author-sync"

$remote = "artistrepo"
$branch = "main"
$sourceRoot = "DoW4 august 2026"

Write-Host "Fetching author's repository..."
git -C $repoRoot fetch $remote $branch

if ($LASTEXITCODE -ne 0) {
    throw "git fetch failed."
}

$currentCommit = (git -C $repoRoot rev-parse "$remote/$branch").Trim()

Write-Host "Author commit: $currentCommit"

if (-not (Test-Path $protectedFile)) {
    throw "Protected file list not found: $protectedFile"
}

$protected = @(
    Get-Content $protectedFile |
    ForEach-Object { $_.Trim() } |
    Where-Object { $_ -and -not $_.StartsWith("#") }
)

Write-Host "Protected files: $($protected.Count)"

# Create a clean temporary copy of the author's vault.
Remove-Item $tempDir -Recurse -Force -ErrorAction SilentlyContinue

$zipFile = "$tempDir.zip"
Remove-Item $zipFile -Force -ErrorAction SilentlyContinue

git -C $repoRoot archive `
    --format=zip `
    --output="$zipFile" `
    "$remote/$branch`:$sourceRoot"

if ($LASTEXITCODE -ne 0) {
    throw "git archive failed."
}

New-Item -ItemType Directory -Force $tempDir | Out-Null
Expand-Archive $zipFile -DestinationPath $tempDir
Remove-Item $zipFile -Force

# These are not website content.
Remove-Item (Join-Path $tempDir ".gitignore") -Force -ErrorAction SilentlyContinue
Remove-Item (Join-Path $tempDir "_templates") -Recurse -Force -ErrorAction SilentlyContinue

# Copy/update normal files.
Get-ChildItem $tempDir -Recurse -File | ForEach-Object {

    $relative = $_.FullName.Substring($tempDir.Length).TrimStart('\').Replace('\', '/')

    if ($protected -contains $relative) {
        return
    }

    $destination = Join-Path $contentDir ($relative.Replace('/', '\'))
    $destinationDir = Split-Path -Parent $destination

    if (-not (Test-Path $destinationDir)) {
        New-Item -ItemType Directory -Force $destinationDir | Out-Null
    }

    Copy-Item $_.FullName $destination -Force

    Write-Host "Synced: $relative"
}

# Remove local files that no longer exist upstream.
if (Test-Path $contentDir) {

    Get-ChildItem $contentDir -Recurse -File | ForEach-Object {

        $relative = $_.FullName.Substring($contentDir.Length).TrimStart('\').Replace('\', '/')

        if ($protected -contains $relative) {
            return
        }

        $sourcePath = Join-Path $tempDir ($relative.Replace('/', '\'))

        if (-not (Test-Path $sourcePath)) {
            Write-Host "Removed upstream: $relative"
            Remove-Item $_.FullName -Force
        }
    }
}

# Check protected files against the author's current version.
foreach ($relative in $protected) {

    $upstreamPath = Join-Path $tempDir ($relative.Replace('/', '\'))
    $localPath = Join-Path $contentDir ($relative.Replace('/', '\'))

    if (-not (Test-Path $upstreamPath)) {
        Write-Warning "Protected file was deleted upstream: $relative"
        continue
    }

    if (-not (Test-Path $localPath)) {
        Write-Warning "Protected file is missing locally: $relative"
        continue
    }

    $upstreamHash = (Get-FileHash $upstreamPath -Algorithm SHA256).Hash
    $localHash = (Get-FileHash $localPath -Algorithm SHA256).Hash

    if ($upstreamHash -ne $localHash) {
        Write-Warning "Protected file differs from upstream: $relative"
    }
}

Remove-Item $tempDir -Recurse -Force

Write-Host ""
Write-Host "Sync complete."