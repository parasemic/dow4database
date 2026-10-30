---
tags:
  - Necron
  - Light
  - Unit
dg-publish: true
from:
  - "[[Tomb Citadel]]"
Cost_dom: 12
Supply_dom: 1
Time: 14.9
Up-to-date:
---

# [[Necron Warriors]]
*All-Purpose Infantry*
- Effective at range
- Good versus all targets
- Very low mobility
- - -
Base Cost: **12** ![[dom.png|20]] | Supply Cost: **1** ![[dom.png|20]]/min | Build Time: **15.0** sec.
from [[Tomb Citadel]]
- - -

| [[Member Count]]      |  10  | max 20 |
| --------------------- | :--: | ------ |
| [[Armour]]            |  4   | Light  |
| Armour Penetration    |  5   |        |
| Invulnerability Saves |  -   |        |
| HP                    | 2100 |        |
- - -
### Wargear
![[Gauss Flayers#*Gauss Flayers*]]

![[Gauss Reapers#Gauss Reapers]]

Undying Legions I
Undying Legions II
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_Necron_units")
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