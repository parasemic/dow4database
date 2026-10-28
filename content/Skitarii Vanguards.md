---
tags:
  - AdMech
  - Skitarii
  - Light
  - Unit
dg-publish: true
Cost_req: 100
Cost_pow:
Supply_req: 15
Time: 10
Up-to-date: true
---
 # [[Skitarii Vanguards]]
*Light Infantry*
- Effective a short range
- High Mobility
- Attacks reduce [[Armour]]
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
![[Radium Carbine#*Radium Carbine*]]

![[Plasma Caliver (Vanguards)#Plasma Caliver]]

![[Force Augmentation I (Vanguards)#Force Augmentation I]]

![[Force Augmentation II (Vanguards)#Force Augmentation II]]

----
#### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("WCAltar_units", "AM_cover", link("Skitarii Vanguards"), "All_AM_units")
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