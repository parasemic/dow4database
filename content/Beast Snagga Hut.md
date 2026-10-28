---
tags:
  - Ork
  - Production
  - Structure
  - Research
dg-publish: true
Cost_req: 100
Cost_pow: 5
Time: 20
Up-to-date: true
---
# [[Beast Snagga Hut]]
*Production Structure*
- Produces Beast Snagga units
- Provides research
- Armed with a Big Shoota
- - -
Base Cost: **100** ![[req.png|20]] | **5** ![[pow.png|20]] | Build Time: **~20.0** sec.
- - -

| HP         | 3000 |           |
| ---------- | ---- | --------- |
| [[Armour]] | <br> | Structure |

---
 Produces units:
- [[Bomb Squig Horde]]
- [[Beast Snagga Boyz]]
- [[Squighog Boyz]]
- [[Wurrboy]]
---
### Research:
> [!tip] ![[Orky Outriderz#Orky Outriderz]]

> [!tip] ![['Arder Armour#'Arder Armour]]

> [!tip] ![[Beast Snagga Teef#Beast Snagga Teef]]

> [!tip] ![[Monster Hunterz#Monster Hunterz]]

### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_Ork_structures", "Ork_dmg_dealers")
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