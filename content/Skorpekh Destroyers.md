---
dg-publish: true
tags:
  - Necron
  - Heavy
  - Unit
  - Destroyer
from:
  - "[[Destroyer Crypt]]"
Cost_dom: 40
Supply_dom: 4
Time: 40
Attach_to:
  - "[[Destroyer Lord]]"
pop: "4"
Up-to-date: true
---
# [[Skorpekh Destroyers]]
*Melee Infantry*
- Excels in melee
- Good versus all targets
- High mobility
- - -
Base cost: **40** ![[dom.png|20]] | Supply Cost:  **4** ![[dom.png|20]]/min | Base build time: **39.8** sec.
from [[Destroyer Crypt]]
- - -

| [[Member Count]]      |  3   | max 6 |
| --------------------- | :--: | ----- |
| [[Armour]]            |  5   | Heavy |
| Armour Penetration    |  6   |       |
| Invulnerability Saves |  -   |       |
| HP                    | 2550 |       |
- - -
### Wargear
default

![[Hyperphase Reap-Blade#Hyperphase Reap-Blade]]

![[Undying Legions I (Skorpekh)#Undying Legions I]]

![[Undying Legions II (Skorpekh)#Undying Legions II]]
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