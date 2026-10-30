---
tags:
  - Ork
  - Light
  - Unit
dg-publish: true
from: "[[Beast Snagga Hut]]"
Cost_req: 150
Cost_pow: 15
Supply_req: 28
Time: 15
Up-to-date:
---
# [[Beast Snagga Boyz]]
*Heavy Infantry*
- Effective in melee
- Good versus infantry
- Moderate durability
---
**150** ![[req.png|20]] | **15** ![[pow.png|20]] | **28** ![[req.png|20]]/min | **15** sec.
from [[Beast Snagga Hut]]
- - -

| [[Member Count]]      |     |       |
| --------------------- | :-: | ----- |
| [[Armour]]            |     | Light |
| Armour Penetration    |     |       |
| Invulnerability Saves |  -  |       |
| HP                    |     |       |
- - -
### Wargear
![[Slugga-Choppa#*Slugga-Choppa*]]

![[Thump Gun#*Thump Gun*]]
Mobin' Up I
Mobin' Up II
- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_Ork_units", "All_Ork_infantry", "Hut_units", link("Beast Snagga Boyz"), "Ork_dmg_dealers", "All_Ork_melee_units")
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