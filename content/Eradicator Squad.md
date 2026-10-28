---
tags:
  - SM
  - Heavy
  - Unit
dg-publish: true
Cost_req: 450
Cost_pow: 20
Supply_req: 36
Time: 25
---
# [[Eradicator Squad]]
*Anti-Armour Infantry*
- Effective at range
- Excels versus heavy armour
- Good versus vehicles
- - -
Base Cost: **450** ![[req.png|20]] / **20** ![[pow.png|20]] | Supply Cost: **36** ![[req.png|20]]/min | Build Time: **25.0** sec.
from [[Sanctum]]
- - -

| [[Member Count]]      |  3   | max 3 |
| --------------------- | :--: | ----- |
| [[Armour]]            |  5   | Heavy |
| Armour Penetration    |  6   |       |
| Invulnerability Saves |  -   |       |
| HP                    | 1800 |       |

- - -
### Wargear
![[Melta Rifles#*Melta Rifles*]]

![[Heavy Melta Rifles#Heavy Melta Rifles]]
- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("SM_infantry", "All_SM_units", "Sanctum_units")
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