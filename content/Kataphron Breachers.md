---
tags:
  - AdMech
  - Heavy
  - Unit
dg-publish: true
---
# [[Kataphron Breachers]]
*Anti-Armour Infantry*
- Excels at short range
- Good versus all targets
- High durability
---
Base Cost: **??** ![[req.png|20]] | **??** ![[pow.png|20]] | Supply Cost: **21** ![[req.png|20]]/min | Build Time: **25.0** sec.
from [[Omnissian Cult]]

---

| [[Member Count]]      |      |       |
| --------------------- | :--: | ----- |
| [[Armour]]            |  4   | Heavy |
| Armour Penetration    |  3   |       |
| Invulnerability Saves | 10%  |       |
| HP                    | 1800 |       |
### Wargear
![[Heavy Arc rifle#*Heavy Arc rifle*]]

![[Torsion Cannon-Hydraulic Claw#Torsion Cannon/Hydraulic Claw]]

![[Force Augmentation I (Breachers)#Force Augmentation I]]

![[Force Augmentation II (Breachers)#Force Augmentation II]]

- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_AM_units", "Cult_units", link("Kataphron Breachers"))
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