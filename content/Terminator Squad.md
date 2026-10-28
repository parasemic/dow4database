---
tags:
  - SM
  - Heavy
  - Unit
dg-publish: true
Cost_req: 550
Cost_pow: 40
Supply_req: 44
Time: 30
Up-to-date: true
---
# [[Terminator Squad]]
*Elite Infantry*
- Good versus all targets
- Very high durability
- Low mobility
- - -
Base Cost: **550** ![[req.png|20]] / **40** ![[pow.png|20]] | Supply Cost: **44** ![[req.png|20]]/min | Build Time: **30.0** sec.
*Requires upgrade: Heavy Elites Attachment*
from [[Sanctum]]
- - -

| [[Member Count]]      |  5   | max 5 |
| --------------------- | :--: | ----- |
| [[Armour]]            |  8   | Heavy |
| Armour Penetration    |  8   |       |
| Invulnerability Saves | 15%  |       |
| HP                    | 3100 |       |
- - -
### Wargear
![[Storm Bolter#*Storm Bolter*]]

![[Heavy Flamer#Heavy Flamer]]

![[Assault Cannon#Assault Cannon]]
- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("SM_infantry", "All_SM_units", "Sanctum_units", link("Terminator Squad"))
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