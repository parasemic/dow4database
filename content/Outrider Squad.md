---
tags:
  - SM
  - Heavy
  - Unit
dg-publish: true
Cost_req: 450
Cost_pow: 15
Supply_req: 36
Time: 20
---
# [[Outrider Squad]]
*Melee Infantry*
- Good versus infantry
- Very high mobility
- Moderate durability
- - -
Base Cost: **450** ![[req.png|20]] | **15** ![[pow.png|20]] | Supply Cost: **36** ![[req.png|20]]/min | Build Time: **20.0** sec.
from [[Armoury]]
- - -

| [[Member Count]]      |  3   |       |
| --------------------- | :--: | ----- |
| [[Armour]]            |  5   | Heavy |
| Armour Penetration    |      |       |
| Invulnerability Saves |  -   |       |
| HP                    | 1950 |       |
- - -
### Wargear
![[Astartes Chainsword (Outrider)#*Astartes Chainsword*]]
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_SM_units", link("Outrider Squad"), "SM_Armoury_units")
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