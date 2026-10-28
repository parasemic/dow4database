---
tags:
  - Ork
  - Production
  - Structure
  - Research
dg-publish: true
Cost_req: 200
Cost_pow: 35
Up-to-date:
---
# [[Scrap 'Eap]]
*Production Structure*
- Produces vehicles
- Provides research
- Armed with Big Shootas
- - -
Base Cost: **200** ![[req.png|20]] | **35** ![[pow.png|20]] | Build Time: **??.?** sec.
**WA**
- - -

| HP         | 5000  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 7<br> | Structure |

Produces Units:
- [[Mekboy]]
- [[Deffkoptas]]
- [[Deff Dread]]
- [[Gunwagon]]
### Wargear
Big Shootas
### Research
> [!tip] ![[Loadsa Scrap!#Loadsa Scrap!]]

> [!tip] ![[Extra Gubbinz#Extra Gubbinz]]

> [!tip] ![['Ard Case#'Ard Case]]

> [!tip] ![[Grot Oilers#Grot Oilers]]
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