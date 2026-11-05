---
tags:
  - Necron
  - Structure
  - Utility
dg-publish: true
Cost_dom: 0
Vision_range: "55"
Up-to-date:
---
# [[Tomb Pylon]]
*Utility Structure*
- Reserve deployment point.
- Expands the Power Matrix.
- - -
Base Cost: **0** ![[dom.png|20]] | Base Build Time: ?? sec.
Built by [[Canoptek Spyder]]

| HP         | 2500  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 5<br> | Structure |

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