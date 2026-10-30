---
dg-publish: true
tags:
  - SM
  - Unit
  - Vehicle
from:
  - "[[Armoury]]"
Cost_req: 700
Cost_pow: 85
Supply_req: 80
Time: 45
Up-to-date:
---
# [[Repulsor Executioner]]
*Heavy Vehicle*
- Effective at range
- Excels versus infantry
- High durability
- - -
Base Cost: **700** ![[req.png|20]] / **85** ![[pow.png|20]] | Supply Cost: **80** ![[req.png|20]]/min | Build Time: **45.0** sec.
*Requires upgrade: Heavy Armour Attachment*
from [[Armoury]]
- - -

| [[Member Count]]      |  1   | max 1   |
| --------------------- | :--: | ------- |
| [[Armour]]            |  10  | Vehicle |
| Armour Penetration    |  8   |         |
| Invulnerability Saves |  -   |         |
| HP                    | 9500 |         |
grenade launcher can't target ground
- - -
### Wargear

![[Heavy Laser Destroyer#Heavy Laser Destroyer]]

![[Macro Plasma Incinerator (Repulsor)#Macro Plasma Incinerator]]
- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("SM_vehicles", "All_SM_units", link("Repulsor Executioner"), "SM_Armoury_units")
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