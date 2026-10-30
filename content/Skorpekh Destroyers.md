---
dg-publish: true
tags:
  - Necron
  - Heavy
  - Unit
  - Destroyer
from:
  - "[[Destroyer Crypt]]"
Cost_dom:
Supply_dom: 4
Time:
Up-to-date:
---
# [[Skorpekh Destroyers]]
*Melee Infantry*
- Excels in melee
- Good versus all targets
- High mobility
- - -
Base cost:  ![[dom.png|20]] | Supply Cost:  **4** ![[dom.png|20]]/min | Base build time: sec.
from [[Destroyer Crypt]]
- - -

| [[Member Count]]      |  3   | max 6 |
| --------------------- | :--: | ----- |
| [[Armour]]            |  5   | Heavy |
| Armour Penetration    |  66  |       |
| Invulnerability Saves |  -   |       |
| HP                    | 2550 |       |
- - -
### Wargear
Hyperphase blades
Plasmacyte
Squad +
Squad ++ 
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_Necron_units", link("Skorpekh Destroyers"), "Crypt_units")
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