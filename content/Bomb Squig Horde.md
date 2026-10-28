---
tags:
  - Ork
  - Unit
  - Light
dg-publish: true
---
# [[Bomb Squig Horde]]
*Explosive Beasts*
- Explodes on contact
- Deals area damage
- High mobility
- - -
**50** ![[req.png|20]] | **25** ![[pow.png|20]] | **20** ![[req.png|20]]/min | **15.0** sec.
from [[Beast Snagga Hut]]
- - -

| [[Member Count]]      |     |       |
| --------------------- | :-: | ----- |
| [[Armour]]            |     | Light |
| Armour Penetration    |     |       |
| Invulnerability Saves |  -  |       |
| HP                    |     |       |
- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("Hut_units", "All_Ork_units", "Ork_dmg_dealers")
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