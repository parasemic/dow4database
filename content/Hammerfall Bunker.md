---
tags:
  - SM
  - Fortification
  - Structure
dg-publish: true
---
# [[Hammerfall Bunker]]
*Heavy Fortification*
- Good versus all targets
- Fast construction time
- High durability
- - -
Base Cost: **450** ![[req.png|20]] | **80** ![[pow.png|20]] | Build Time: **??.?** sec.
- - -

| HP         | 3000  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 8<br> | Structure |

### Wargear
Heavy Flamer Arrays
Upgrade
- Upgrades weaponry for the structure
- Excels versus infantry
-  Reduces range
  100 req 15 sec
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