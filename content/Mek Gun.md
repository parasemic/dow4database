---
tags:
  - Ork
  - Fortification
  - Structure
dg-publish: true
Cost_req: 400
Cost_pow: 35
Time:
Up-to-date: true
---
# [[Mek Gun]]
*Fortification*
- Good versus all targets
- Deals area damage
- High durability
---
Base Cost: **400** ![[req.png|20]] | **35** ![[pow.png|20]] | Build Time: **??.?** sec.
**WA**
- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_Ork_structures")
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