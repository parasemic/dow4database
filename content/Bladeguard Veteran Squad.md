---
tags:
  - SM
  - Unit
  - Light
dg-publish: true
Cost_req: 500
Cost_pow: 20
Supply_req: 40
Time: 25
---
# [[Bladeguard Veteran Squad]]
*Heavy Infantry*
- Excels in melee
- Good versus all targets
- High durability
- - -
Base Cost: **500** ![[req.png|20]] / **20** ![[pow.png|20]] | Supply Cost: **40** ![[req.png|20]]/min | Build Time: **25.0** sec.
from [[Sanctum]]
- - -

| [[Member Count]]      |  3   | max 3 |
| --------------------- | :--: | ----- |
| [[Armour]]            |  7   | Light |
| Armour Penetration    |  5   |       |
| Invulnerability Saves | 50%  |       |
| HP                    | 2400 |       |
- - -
### Wargear
![[Master-crafted Power Weapon#*Master-crafted Power Weapon*]]
### Relevant research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_SM_units", link("Bladeguard Veteran Squad"), "Sanctum_units", "SM_infantry")
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
