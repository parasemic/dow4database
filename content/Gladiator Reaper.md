---
dg-publish: true
tags:
  - SM
  - Unit
  - Vehicle
from:
  - "[[Armoury]]"
Cost_req: 600
Cost_pow: 65
Supply_req: 48
Time: 25
Up-to-date:
---
# [[Gladiator Reaper]]
*Heavy Vehicle*
- Effective at range
- Excels versus infantry
- High durability
- - -
Base Cost: **??** ![[req.png|20]] | **??** ![[pow.png|20]] | Supply Cost: **??** ![[req.png|20]]/min | Build Time: **25.0** sec.
*Requires upgrade: Heavy Armour Attachment*
from [[Armoury]]
- - -

| [[Member Count]]      |  1   | max 1   |
| --------------------- | :--: | ------- |
| [[Armour]]            |  9   | Vehicle |
| Armour Penetration    |  6   |         |
| Invulnerability Saves |  -   |         |
| HP                    | 6800 |         |
- - -
### Wargear

![[Valiant Pattern#Valiant Pattern]]

![[Reaper Pattern#Reaper Pattern]]
- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("SM_vehicles", "All_SM_units", link("Gladiator Reaper"), "SM_Armoury_units")
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