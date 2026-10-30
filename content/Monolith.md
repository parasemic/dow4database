---
tags:
  - Necron
  - Vehicle
  - Construct
  - Unit
dg-publish: true
from:
  - "[[Tomb Citadel]]"
Cost_dom: 120
Supply_dom: 15
Time: 44.7
Up-to-date:
---
# [[Monolith]]
*Super Heavy Construct*
- Excels at range
- Very high durability
- Reserve deployment point
- - -
Base Cost: **150** ![[dom.png|20]] | Supply Cost: **15** ![[dom.png|20]]/min | Build Time: **45.0** sec.
*Requires upgrade: [[Tomb Citadel#Tomb Citadel IV|Tomb Citadel IV]]*
from [[Tomb Citadel]]
- - -
  
| [[Member Count]]      |  1   |         |
| --------------------- | :--: | ------- |
| [[Armour]]            |  10  | Vehicle |
| Armour Penetration    |  10  |         |
| Invulnerability Saves |  -   |         |
| HP                    | 7000 |         |
- - -
![[Translocation.png]]
> [!danger] Abilities
> - Translocation:
>	~~*Active Ability*~~
>	Teleport to target location in range.

---
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_Necron_units", link("Monolith"))
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