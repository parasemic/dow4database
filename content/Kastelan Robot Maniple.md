---
dg-publish: true
tags:
  - AdMech
  - Construct
  - Vehicle
  - Unit
from:
  - "[[Omnissian Cult]]"
Cost_req:
Cost_pow:
Supply_req:
Time:
Up-to-date:
---
# [[Kastelan Robot Maniple]]
*Elite Constructs*
- Excels versus infantry
- Very high durability
- Cannot engage in melee
---
Base Cost: **??** ![[req.png|20]] | **??** ![[pow.png|20]] | Supply Cost: **23** ![[req.png|20]]/min | Build Time: **40.0** sec.
*Requires Network Strength V*
from [[Omnissian Cult]]

---

| [[Member Count]]      |  2   | 4       |
| --------------------- | :--: | ------- |
| [[Armour]]            |  7   | Vehicle |
| Armour Penetration    |  7   |         |
| Invulnerability Saves | 15%  |         |
| HP                    | 2200 |         |

---
### Wargear
![[Incendine Combustor#*Incendine Combustor*]]

![[Heavy Phosphor Blaster#Heavy Phosphor Blaster]]

![[Aegis Protocol#Aegis Protocol]]

![[Protector Protocol#Protector Protocol]]

![[Force Augmentation I (Kastellan)#Force Augmentation I]]

![[Force Augmentation II (Kastellan)#Force Augmentation II]]
#### Relevant Research
- Canticles Of Battle
- Maniple Expansion
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_AM_units", "Cult_units", link("Kastellan Robot Maniple"))
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