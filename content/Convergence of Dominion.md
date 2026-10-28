---
tags:
  - Necron
  - Utility
  - Structure
dg-publish: true
---
# [[Convergence of Dominion]]
*Utility Structure*
- Expands the Power Matrix
- Must be built on the Power Matrix
- Low durability
- - -
Base Cost:  7 ![[dom.png|20]]

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