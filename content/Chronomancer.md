---
tags:
  - Necron
  - Light
  - Unit
  - Commander
dg-publish: true
aliases:
  - Thothmek
Cost_dom: 45
Supply_dom: 4
Time: 29.8
---
# [[Chronomancer]]
*Commander*
- Temporal manipulator
- Effective at range
- Disrupts enemy units
- - -
Base cost: **45** ![[dom.png|20]] | Supply Cost: **4** ![[dom.png|20]]/min | Base build time: **30.0** sec.
from [[Tomb Citadel]]
- - -

| Model Count           |  1   |       |
| --------------------- | :--: | ----- |
| [[Armour]]            |  6   | Light |
| Armour Penetration    |  7   |       |
| Invulnerability Saves | 40%  |       |
| HP                    | 2000 |       |
- - -
![[Attach.png|25]] Attach passive: *Timesplitter Mantle*
Increases [[Invulnerable Save]] for Thothmek and attached unit.
- - -
> [!danger] Abilities
> - Channel Aeonstave:
>	*Active Ability*
>	Deal damage to target enemy and reduce its movement speed.

---
> [!example] Wargear
> Aeonstave
> *Equipment*
> - Default weapon
> - Effective at range
> - Negates Invulnerable Save
>   
| *Armour Effectiveness* | 7 AP |
| ---------------------- | --- |
| Light                  | 83-117 |
| Heavy                  | 109-117 |
| Vehicle                | 85-109 |
| Structure              | 60-82 |
### Wargear
Chronometron
*Active Ability*
Freeze time around Thothmek, negating projectiles and reducing movement speed for all units in range except Thothmek and attached unit.
20 ![[dom.png|20]] 20sec.
=> Slot 1

Dimensional Sanctum
*Active Ability*
Teleport to target location in range.
15 ![[dom.png|20]] 20sec.
=> Slot 1

Photonic Transubjector
*Passive Ability*
Instead of becoming incapacitated, Thothmek creates a holographic decoy, becomes invulnerable and gains increased HP regain rate for a duration.
10 ![[dom.png|20]] 30sec.
=> Slot 2

Metalodermal Tesla Weave
*Active Ability*
Release a burst of lightning, dealing damage to enemies in range.
15 ![[dom.png|20]] 20sec.
=> Slot 2

Reanimation Crypts
*Passive Ability*
Reduces resurrection time for all [[Resurrection Gallery|Resurrection Galleries]].
10 ![[dom.png|20]] 15sec.
=> Slot 3

Canoptek Vault Protocols
*Active Ability*
Deploy a #Canoptek unit at target location. (Vet Level) determines the unit deployed.
30 ![[dom.png|20]] 25sec.
=> Slot 3
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_Necron_units")
    groupBy:
      property: from
      direction: ASC
    order:
      - file.name
      - Time
    sort:
      - property: Slot
        direction: ASC
    cardSize: 175
    image: note.pic
    imageAspectRatio: 0.3
    imageFit: contain
    columnWidth: 250

```