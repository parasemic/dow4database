---
tags:
  - Ork
  - Light
  - Unit
  - Utility
dg-publish: true
from: "[[Mega Bossbunka]]"
Cost_req: 50
Cost_pow: 0
Supply_req: 2
Time: 10
Up-to-date:
---
# [[Gretchin]]
*Utility Infantry*
- Can perform repairs
- Ineffective in combat
-  Very low durability
- - -
Base Cost: **50** ![[req.png|20]] | Supply Cost: **2** ![[req.png|20]]/min | Build Time: **10.0** sec.
from [[Mega Bossbunka]]
- - -
![[Gretchin.png]]

| [[Member Count]]      | 10  |       |
| --------------------- | :-: | ----- |
| [[Armour]]            |  1  | Light |
| Armour Penetration    |  1  |       |
| Invulnerability Saves |  -  |       |
| HP                    | 600 |       |
- - -
![[Repair.png]]
> [!danger] Repair
> *Active Ability*
> desc.

- - -
### Wargear
![[Grot Blasta#*Grot Blasta*]]
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("Ork_dmg_dealers", "All_Ork_units", "All_Ork_infantry", "All_Ork_melee_units")
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