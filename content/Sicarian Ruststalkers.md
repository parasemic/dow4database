---
tags:
  - AdMech
  - Light
  - Unit
dg-publish: true
from:
  - "[[War Cohort Altar]]"
Cost_req:
Cost_pow:
Time:
Up-to-date:
---
# [[Sicarian Ruststalkers]]
*Melee Infantry*
- Excels in melee
- Very high mobility
- Invisible at a distance
- - -
Base Cost: **??** ![[req.png|20]] | **??** ![[pow.png|20]] | Supply Cost: **??** ![[req.png|20]]/min | Build Time: **??.?** sec.
from [[War Cohort Altar]]
- - -

| [[Member Count]]      |  5   | max 10 |
| --------------------- | :--: | ------ |
| [[Armour]]            |  4   |        |
| Armour Penetration    |  6   |        |
| Invulnerability Saves |  5%  |        |
| HP                    | 1000 |        |
- - -
> [!danger] ![[Stealth#Stealth]]
### Research
![[Transonic Blades#*Transonic Blades*]]

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
        - affects.containsAny(link("Sicarian Ruststalkers"), "WCAltar_units", "All_AM_units")
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