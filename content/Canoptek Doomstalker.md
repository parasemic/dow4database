---
dg-publish: true
tags:
  - "#Vehicle"
  - Necron
  - Canoptek
  - Unit
  - "#Construct"
from:
  - "[[Canoptek Foundry]]"
Cost_dom:
Supply_dom: 8
Time:
Up-to-date:
---
# [[Canoptek Doomstalker]]
*Anti-Armour Construct*
- Effective at long range
- Excels versus vehicles
- Low mobility
- - -
Base cost:  ![[dom.png|20]] | Supply Cost: **8**  ![[dom.png|20]]/min | Base build time: sec.
from [[Canoptek Foundry]]
- - -

| [[Member Count]]      |  1   |         |
| --------------------- | :--: | ------- |
| [[Armour]]            |  10  | Vehicle |
| Armour Penetration    |  9   |         |
| Invulnerability Saves |  -   |         |
| HP                    | 4000 |         |
- - -
### Wargear
![[Doomsday Blaster#*Doomsday Blaster*]]
- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_Necron_units", link("Canoptek Doomstalker"), "Foundry_units")
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