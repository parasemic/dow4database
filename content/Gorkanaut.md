---
dg-publish: true
tags:
  - Ork
  - Unit
  - Vehicle
Cost_req: 1000
Cost_pow: 120
Supply_req:
Time:
Up-to-date:
---
# [[Gorkanaut]]
*Super-Heavy Walker*
- Effective at all ranges»e
- Excels versus all targets
- Very high durability
- - -
Base Cost: **1000** ![[req.png|20]] / **120** ![[pow.png|20]] | Supply Cost: **80?** ![[req.png|20]]/min | Build Time: **??.?** sec.
Built on the field.
- - -

| [[Member Count]]      |   1   | max 1   |
| --------------------- | :---: | ------- |
| [[Armour]]            |  10   | Vehicle |
| Armour Penetration    |   9   |         |
| Invulnerability Saves |   -   |         |
| HP                    | 13000 |         |

Superfuelled Boiler
Charge towards target location, dealing damage to enemies hit and knocking them down.

Try Dat Button!
*Active Ability*
Increases all damage dealt for a duration. Damages this unit when used.

### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("Ork_dmg_dealers", "All_Ork_vehicles", "All_Ork_units")
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