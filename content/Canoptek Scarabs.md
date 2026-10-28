---
dg-publish: true
tags:
  - "#Light"
  - Canoptek
  - Unit
  - Construct
  - Necron
Cost_dom: 6
Supply_dom: 1
Time: 9.9
---
# [[Canoptek Scarabs]]
*Light Construct*
- Effective in melee
- Very high mobility
- Low durability
- - -
Base cost: **6** ![[dom.png|20]] | Supply Cost: **1** ![[dom.png|20]]/min | Base build time: **10.0** sec.
from [[Tomb Citadel]] & [[Canoptek Foundry]]
- - -

| [[Member Count]]      |  3  | max 6 |
| --------------------- | :-: | ----- |
| [[Armour]]            |  1  | Light |
| Armour Penetration    |  1  |       |
| Invulnerability Saves |  -  |       |
| HP                    | 900 |       |
- - -
### Wargear
![[Feeder Mandibles#*Feeder mandibles*]]
==TO-DO==
Upgrade 1

Upgrade 2
- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_Necron_units", "Foundry_units")
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