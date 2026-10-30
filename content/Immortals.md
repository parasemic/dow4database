---
tags:
  - Necron
  - Light
  - Unit
dg-publish: true
from:
  - "[[Tomb Citadel]]"
Cost_dom: 20
Supply_dom: 2
Time: 14.9
Up-to-date:
---
# [[Immortals]]
*All-Purpose Infantry*
- Effective at range
- Good versus all targets
- High mobility
- - -
Base Cost: **20** ![[dom.png|20]] | Supply Cost: **2** ![[dom.png|20]]/min | Build Time: **15.0** sec.
from [[Tomb Citadel]]
- - -

| [[Member Count]]      |     |     |
| --------------------- | :-: | --- |
| [[Armour]]            |     |     |
| Armour Penetration    |     |     |
| Invulnerability Saves |  -  |     |
| HP                    |     |     |
- - -
### Wargear
![[Gauss Blaster#*Gauss Blaster*]]

![[Tesla Carbines#Tesla Carbines]]

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