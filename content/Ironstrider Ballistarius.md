---
dg-publish: true
tags:
  - AdMech
  - Unit
  - Vehicle
from:
  - "[[War Cohort Altar]]"
Cost_req:
Cost_pow:
Supply_req:
Time:
Up-to-date:
---
# [[Ironstrider Ballistarius]]
*Anti-Infantry Walker*
- Effective at long range
- High mobility
- Good versus infantry
- - -
Base Cost: **??** ![[req.png|20]] | **??** ![[pow.png|20]] | Supply Cost: **??** ![[req.png|20]]/min | Build Time: **??.?** sec.
from [[War Cohort Altar]]
- - -

| [[Member Count]]      |  1   | max 1   |
| --------------------- | :--: | ------- |
| [[Armour]]            |  7   | Vehicle |
| Armour Penetration    |  7   |         |
| Invulnerability Saves | 15%  |         |
| HP                    | 2000 |         |
![[Twin Cognis Autocannon#Twin Cognis Autocannon]]

![[Twin Cognis Lascannon#Twin Cognis Lascannon]]
- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_AM_units", "AM_vehicles", "WCAltar_units", link("Ironstrider Ballistarius"))
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