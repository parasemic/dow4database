---
tags:
  - Necron
  - Light
  - Unit
dg-publish: true
aliases:
  - Lunch Guards
Cost_dom: 50
Supply_dom: 6
Time: 24.6
---
# [[Lychguards|Lunch Guards]]
*Elite Infantry*
- Excels in melee
- Good versus all targets
- High durability
- - -
Base Cost: **50** ![[dom.png|20]] | Supply Cost: **6** ![[dom.png|20]]/min | Build Time: **25** sec.
*Requires upgrade: [[Tomb Citadel#Tomb Citadel III|Tomb Citadel III]]*
from [[Tomb Citadel]]
- - -

| [[Member Count]]      |  5  |     |
| --------------------- | :-: | --- |
| [[Armour]]            |     |     |
| Armour Penetration    |     |     |
| Invulnerability Saves |  -  |     |
| HP                    |     |     |
- - -
### Wargear
![[Hyperphase Sword#*Hyperphase Sword*]]
Undying Legions I
Undying Legions II
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_Necron_units")
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