---
tags:
  - Necron
  - Structure
  - Fortification
dg-publish: true
---
# [[Gauss Pylon]]
*Heavy Fortification*
- Good versus all targets
- Expands the Power Matrix
- Must be built on the Power Matrix
- - -
Base Cost: ?? ![[dom.png|20]] | Base Build Time: ?? sec.
*Requires structure: Tomb Citadel III*

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