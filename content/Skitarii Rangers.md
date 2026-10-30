---
tags:
  - AdMech
  - Light
  - Unit
  - Skitarii
dg-publish: true
from:
  - "[[War Cohort Altar]]"
Cost_req: 100
Cost_pow: 0
Supply_req: 15
Time: 10
Up-to-date:
---
# [[Skitarii Rangers]]
*All-Purpose Infantry*
- Effective at long range
- Good versus infantry
- Low mobility
- - -
Base Cost: **100** ![[req.png|20]] | Supply Cost: **15** ![[req.png|20]]/min | Build Time: **10.0** sec.
from [[War Cohort Altar]]
- - -

| [[Member Count]]      |  10  | max 20 |
| --------------------- | :--: | ------ |
| [[Armour]]            |  2   |        |
| Armour Penetration    |  1   |        |
| Invulnerability Saves | 15%  |        |
| HP                    | 1100 | 2200   |
- - -
### Wargear
![[Galvanic Rifle#*Galvanic Rifle*]]

![[Transuranic Arquebus#Transuranic Arquebus]]

Squad +
Squad ++
### Relevant Research

```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("WCAltar_units", link("Skitarii Rangers"), "AM_cover", "All_AM_units")
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