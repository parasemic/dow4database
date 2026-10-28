---
tags:
  - SM
  - Commander
  - Unit
  - Light
dg-publish: true
aliases:
  - Jonah
  - Orion
Up-to-date: true
---
# [[Chief Librarian]]
*Commander*
- Powerful psyker
- Effective in melee
- Empowers friendly units
- - -
Base Cost: **350** ![[req.png|20]] | **50** ![[pow.png|20]] | Supply Cost: **36** ![[req.png|20]]/min | Build Time: **30.0** sec.
from [[Chapter Keep]]
- - -
Can attach to
infil
elim
ints
bladeguards
...
not termie
not ass int
not outriders

| [[Member Count]]      |  1   | max 1 |
| --------------------- | :--: | ----- |
| [[Armour]]            |  4   |       |
| Armour Penetration    |  6   |       |
| Invulnerability Saves |  -   |       |
| HP                    | 2000 |       |

 > [!example] ![[Force Stave-Heavy Bolt Pistol#Force Stave/Heavy Bolt Pistol]]

| *Armour Effectiveness* | AP 6    |
| ---------------------- | ------- |
| Light                  | 105-105 |
| Heavy                  | 96-102  |
| Vehicle                | 65-96   |
| Structure              | 46-72   |

- - -
![[Attach.png|25]] Attach passive: **Mental Fortress**
Gain resistance to psychic attacks and immunity to status effects for the Commander and attached unit.
- - -
### Abilities
> [!danger] Smite
> *Active Ability*
> Launch a psychic attack at target enemy, dealing damage.

- - -
### Wargear

![[Improved Mental Fortress#Improved Mental Fortress]]

![[Emperor's Wrath#Emperor's Wrath]]

![[Telekine Dome#Telekine Dome]]

![[Fury of the Ancients#Fury of the Ancients]]

![[Psychic Mastery#Psychic Mastery]]

![[Might of Heroes#Might of Heroes]]
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_SM_units", "SM_infantry")
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