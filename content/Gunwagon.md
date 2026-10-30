---
tags:
  - Ork
  - Vehicle
  - Unit
dg-publish: true
---
# [[Gunwagon]]
*All-Purpose Vehicles*
- Effective at range
- Good versus all targets
- High durability
- - -
Base Cost: **??** ![[req.png|20]] | **??** ![[pow.png|20]] | Supply Cost: **??** ![[req.png|20]]/min | Build Time: **??.?** sec.
from [[Scrap 'Eap]]
- - -

| [[Member Count]]      |  1   | max 1   |
| --------------------- | :--: | ------- |
| [[Armour]]            |      | Vehicle |
| Armour Penetration    |  8   |         |
| Invulnerability Saves |  -   |         |
| HP                    | 6500 |         |
- - -
### Wargear
![[Kannon#Kannon]]

![[Killkannon#Killkannon]]

![[Zzap Gun#Zzap Gun]]
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("Ork_dmg_dealers", "All_Ork_vehicles", "All_Ork_units", link("Gunwagon"))
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