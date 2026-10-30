---
dg-publish: true
tags:
  - AdMech
  - Heavy
  - Unit
from:
  - "[[Omnissian Cult]]"
Cost_req: 190
Cost_pow: 15
Supply_req: 21
Time: 25
Up-to-date:
---
# [[Kataphron Destroyers]]
*Heavy Infantry*
- Effective at range
- Good versus all targets
- High durability
---
Base Cost: **190** ![[req.png|20]] /**15** ![[pow.png|20]] | Supply Cost: **21** ![[req.png|20]]/min | Build Time: **25.0** sec.
from [[Omnissian Cult]]
- - -

| [[Member Count]]      |      |       |
| --------------------- | :--: | ----- |
| [[Armour]]            |      | Heavy |
| Armour Penetration    |      |       |
| Invulnerability Saves | 10%  |       |
| HP                    | 1800 |       |

---
### Wargear
![[Phosphor Blaster#*Phosphor Blaster*]]

![[Heavy Grav-cannon#*Heavy Grav-cannon*]]

![[Cognis Flamers (Destroyers)#Cognis Flamers]]

![[Plasma Culverins (Destroyers)#Plasma Culverins]]

Force Augmentation I
Force Augmentation II
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny(link("Kataphron Destroyers"), "Cult_units", "All_AM_units")
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