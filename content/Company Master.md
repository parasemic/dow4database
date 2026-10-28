---
tags:
  - SM
  - Commander
  - Unit
  - Heavy
dg-publish: true
aliases:
  - Astoran
Cost_req: 450
Cost_pow: 50
Supply_req: 40
Time: 40
Up-to-date:
---
# [[Company Master]]
*Commander*
- Versatile all-rounder
- High durability
- Low mobility
- - -
Base Cost: **450** ![[req.png|20]] / **50** ![[pow.png|20]] | Supply Cost: **40** ![[req.png|20]]/min | Build Time: **40.0** sec.
from [[Chapter Keep]]
- - -

| [[Member Count]]      |  1   |       |
| --------------------- | :--: | ----- |
| [[Armour]]            |  7   | Heavy |
| Armour Penetration    |  5   |       |
| Invulnerability Saves | 15%  |       |
| HP                    | 3000 |       |
- - -
![[Attach.png|25]] Attach Passive:
***Rites Of Battle***
=> Increases damage dealt and reduces damage taken for attached unit.

Battle Cry
*Active Ability*
Increase melee damage dealt by units in range for a duration.
### Wargear

![[Storm Bolter-Power Sword#Storm Bolter/Power Sword]]

![[Assault Cannon-Power Fist#Assault Cannon/Power Fist]]

![[Thunder Hammer-Storm Shield#Thunder Hammer/Storm Shield]]

![[Adamantine Cuirass#Adamantine Cuirass]]

![[Weapons Of The First Legion#Weapons Of The First Legion]]

![[Teleport Beacon#Teleport Beacon]]

![[Iron Resolve#Iron Resolve]]

![[Calibanite Knight#Calibanite Knight]]

![[Fear Made Manifest#Fear Made Manifest]]
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_SM_units", "SM_infantry")
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