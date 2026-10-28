---
tags:
  - AdMech
  - Fortification
  - Structure
dg-publish: true
Cost_req: 425
Cost_pow: 75
Up-to-date: false
---
# [[Void Shield Generator]]
*Heavy Fortification*
- Reduces damage to units in range
- Damage reduces Shield Strength
- Strengthens the Noosphere Network
- - -
Base Cost: **425** ![[req.png|20]] | **75** ![[pow.png|20]] | Build Time: **??.?** sec.
*Requires Network Strength 9*
- - -
Blocks shots from the outside, works on your own  shots, so be careful where you place them.
-- Artist

| HP         | 2200  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 8<br> | Structure |
NS levels reduce damage of units within by 3.3..% per level, up to 50% at lvl XV.
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("AM_fortifications")
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