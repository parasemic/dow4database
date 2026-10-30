---
tags:
  - AdMech
  - Light
  - Unit
dg-publish: true
from:
  - "[[Omnissian Cult]]"
Cost_req:
Cost_pow:
Supply_req: 19
Time: 25
Up-to-date:
---
# [[Corpuscarii Electro-Priests]]
*All-Purpose infantry*
- Effective at short range
- Deals area damage
- Attacks reduce [[Armour]]
- - -
Base Cost: **??** ![[req.png|20]] | **??** ![[pow.png|20]] | Supply Cost: **19** ![[req.png|20]]/min | Build Time: **25.0** sec.
*Requires Network Strength IV*
from [[Omnissian Cult]]
- - -

| [[Member Count]]      |  6   | max ? |
| --------------------- | :--: | ----- |
| [[Armour]]            |  5   | Light |
| Armour Penetration    |  7   |       |
| Invulnerability Saves | 15%  |       |
| HP                    | 1875 |       |
### Wargear
![[Electrostatic Gauntlets#*Electrostatic Gauntlets*]]

Force Augmentation I
Force Augmentation II
- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny(link("Corpuscarii Electro-Priests"), "Cult_units", "All_AM_units")
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