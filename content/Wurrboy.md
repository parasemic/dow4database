---
tags:
  - Ork
  - Light
  - Unit
dg-publish: true
Cost_req: 200
Cost_pow: 30
Supply_req: 30
Time: 25
Up-to-date: true
---
# [[Wurrboy]]
*Psyker Infantry*
- Effective at range
- Good versus all targets
- Powerful psychic attacks
- - -
**200** ![[req.png|20]] | **30** ![[pow.png|20]] | **30** ![[req.png|20]]/min | **25.0** sec.
from [[Beast Snagga Hut]]
- - -
> [!danger] Bitin' Jawz
> *Active Ability*
> Launch a psychic attack at target enemy, dealing damage to any enemies in its path.

- - -
### Wargear
![[Eyez of Mork#*Eyez of Mork*]]
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("Ork_dmg_dealers", "All_Ork_units", "All_Ork_infantry", "All_Ork_melee_units", "Hut_units")
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