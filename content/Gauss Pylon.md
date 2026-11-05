---
tags:
  - Necron
  - Structure
  - Fortification
dg-publish: true
Cost_dom: 120
Vision_range: "55"
Up-to-date:
---
# [[Gauss Pylon]]
*Heavy Fortification*
- Excels versus all targets
- Expands the Power Matrix
- Must be built on the Power Matrix
- - -
Base Cost: **120** ![[dom.png|20]] | Base Build Time: ?? sec.
*Requires structure: Tomb Citadel III*

| HP         | 10000 |           |
| ---------- | ----- | --------- |
| [[Armour]] | 8<br> | Structure |

### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("Power_Matrix")
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