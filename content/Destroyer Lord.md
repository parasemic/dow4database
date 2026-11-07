---
dg-publish: true
tags:
  - Necron
  - Unit
  - Commander
  - Heavy
aliases:
  - Ahmnok
from:
  - "[[Tomb Citadel]]"
Cost_dom: 60
Supply_dom: 5
Time: 30
Up-to-date: true
---
# [[Destroyer Lord]]
*Commander*
- High-damage Destroyer
- Effective in melee
- Very high durability
- - -
Base cost: **60** ![[dom.png|20]] | Supply Cost: **5** ![[dom.png|20]]/min | Base build time: **30** sec.
from [[Tomb Citadel]]
- - -

| Model Count           |  1   |       |
| --------------------- | :--: | ----- |
| [[Armour]]            |  7   | Heavy |
| Armour Penetration    |      |       |
| Invulnerability Saves |  -   |       |
| HP                    | 2200 |       |

---
### Wargear
![[Flensing Claw-Hyperphase Harverster#Flensing Claw-Hyperphase Harverster]]

![[Twin Hyperphase Harvesters#Twin Hyperphase Harvesters]]

![[Twin Flensing Claws#Twin Flensing Claws]]

![[Hyperphase Blade#Hyperphase Blade]]

![[Ingrained Superiority#Ingrained Superiority]]

![[Protocol of the Eternal Revenant#Protocol of the Eternal Revenant]]

![[Eternal Madness#Eternal Madness]]

![[Interdimensional Oubliette#Interdimensional Oubliette]]
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