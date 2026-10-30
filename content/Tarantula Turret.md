---
tags:
  - SM
  - Fortification
  - Structure
dg-publish: true
aliases:
  - Terry
Cost_req: 250
Cost_pow: 20
Time:
Up-to-date:
---
# [[Tarantula Turret]]
*Fortification*
- Good versus infantry
- High fire rate
- Low durability
- - -
Base Cost: **250** ![[req.png|20]] | **20** ![[pow.png|20]] | Build Time: **??.?** sec.
- - -

| HP         | 2000  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 4<br> | Structure |
### Wargear

Twin Lascannon
*Upgrade*
- Upgrades weaponry for the structure
- Good versus all targets
- Reduces fire rate
  50 25 15
  +500 hp
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("deployed_struct")
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