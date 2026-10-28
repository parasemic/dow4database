---
tags:
  - Necron
  - Light
  - Unit
dg-publish: true
Cost_dom: 30
Supply_dom: 3
Time: 29.8
---
# [[Deathmarks]]
*Sniper Infantry*
- Effective at long range
- Excels versus infantry
- Can teleport
- - -
Base Cost: **30** ![[dom.png|20]] | Supply Cost: **3** ![[dom.png|20]]/min | Build Time: **30.0** sec.
*Requires upgrade: [[Tomb Citadel#Tomb Citadel II]]*
from [[Tomb Citadel]]
- - -

| [[Member Count]]      |  5  | max 5 |
| --------------------- | :-: | ----- |
| [[Armour]]            |     | Light |
| Armour Penetration    |     |       |
| Invulnerability Saves |  -  |       |
| HP                    |     |       |
- - -
> [!danger] Abilities
> *Active Ability*
> Teleports behind you...
### Wargear
![[Synaptic Disintegrator#*Synaptic Disintegrator*]]
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