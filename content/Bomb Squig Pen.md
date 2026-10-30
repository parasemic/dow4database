---
dg-publish: true
tags:
  - Ork
  - Fortification
  - Structure
Cost_req: 250
Cost_pow: 40
Time:
Up-to-date: true
---
# [[Bomb Squig Pen]]
*Heavy Fortification*
- Deploys Bomb Squigs
- Good versus vehicles
- Long recharge time
- - -
Base Cost: **250** ![[req.png|20]] | **40** ![[pow.png|20]] | Build Time: **??.?** sec.
- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_Ork_structures", "ork")
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