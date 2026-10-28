---
tags:
  - Necron
  - Light
  - Unit
  - Commander
dg-publish: true
aliases:
  - Ahmnok
Cost_dom:
Supply_dom:
Time:
---
# [[Destroyer Lord]]
*Commander*
- High-damage Destroyer
- Effective in melee
- Very high durability
- - -
Base cost: **00** ![[dom.png|20]] | Supply Cost: **00** ![[dom.png|20]]/min | Base build time: **00** sec.
from [[Tomb Citadel]]
- - -

| Model Count           |  1  |     |
| --------------------- | :-: | --- |
| [[Armour]]            |     |     |
| Armour Penetration    |     |     |
| Invulnerability Saves |  -  |     |
| HP                    |     |     |

---
### Wargear
![[Flensing Claw-Hyperphase Harverster#Flensing Claw-Hyperphase Harverster]]

![[Twin Hyperphase Harvesters#Twin Hyperphase Harvesters]]

Twin Flensing Claws
- Effective in melee
- Good versus infantry
- Hit biological targets take damage over time
8AP

![[Hyperphase Blade#Hyperphase Blade]]

Insanity's Ire
*Active Ability*
Perform a melee attack that knocks down or stuns target enemy.

Ingrained Superiority
Passive Ability
The Commander regularly emits a burst of energy, dealing area damage and reducing Armour for enemies within range for a duration. (at least-5)
22 15
S1

Protocol of the Eternal Revenant
Passive Ability
Teleports the Commander to the Tomb Citadel when at low HP.
27 30
S1

Eternal Madness
Active Ability
Enter an uncontrollable berserk state, increasing all damage dealt and reducing damage taken for the duration.
14 15
S2

Interdimensional Oubliette
*Active Ability*
Deploy a [[Skorpekh Destroyers|Skorpekh Destroyer]] unit near the Commander.
50 dom 30sec
s2
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