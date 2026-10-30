---
dg-publish: true
tags:
  - Canoptek
  - Vehicle
  - Necron
  - "#Unit"
  - "#Utility"
from:
  - "[[Canoptek Foundry]]"
Cost_dom:
Supply_dom:
Time:
Up-to-date:
---
# [[Canoptek Spyder]]
*Utility Construct*
- Can build a Tomb Pylon
- Effective in melee
- Low Durability
- - -
Base Cost: **??** ![[dom.png|20]] | Supply Cost: **3** ![[dom.png|20]]/min | Build Time: **??.?** sec.
from [[Canoptek Foundry]]
- - -

| [[Member Count]]      |  1  | max 1   |
| --------------------- | :-: | ------- |
| [[Armour]]            |     | Vehicle |
| Armour Penetration    |     |         |
| Invulnerability Saves |  -  |         |
| HP                    |     |         |
- - -
> [!danger] Swarm Fabrication
> *Active Ability*
> Deploy a [[Canoptek Scarabs|Canoptek Scarab]] unit near this unit.
> Base Cost: **15** ![[dom.png|20]] | Build Time: **25.0** sec.

> [!danger] Build Tomb Pylon
### Wargear
![[Automaton Claws#*Automaton Claws*]]

![[Combat Protocols#Combat Protocols]]

- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("Foundry_units", "All_Necron_units", link("Canoptek Spyder"), "ne")
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