---
dg-publish: true
tags:
  - Ork
  - Heavy
  - Unit
from:
  - "[[Boyz Fort]]"
Cost_req: 250
Cost_pow: 25
Supply_req: 36
Time: 20
Up-to-date:
---
# [[Flash Gitz]]
*Anti-Armour Infantry*
- Effective at range
- Excels versus vehicles
- Ineffective in melee
- - -
**250** ![[req.png|20]] | **25** ![[pow.png|20]] | **36** req/min | **20.0** sec.
from [[Boyz Fort]]
- - -

| [[Member Count]]      |  5   |       |
| --------------------- | :--: | ----- |
| [[Armour]]            |  4   | Heavy |
| Armour Penetration    |  7   |       |
| Invulnerability Saves |  -   |       |
| HP                    | 2500 |       |

2 upgrades
- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("Ork_dmg_dealers", "All_Ork_units", "All_Ork_infantry", "All_Ork_melee_units", link("Flash Gitz"), "Fort_units")
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