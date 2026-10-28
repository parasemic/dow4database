---
tags:
  - AdMech
  - Commander
  - Light
  - Unit
  - Skitarii
dg-publish: true
aliases:
  - Sek-Ix-23
  - Sexy
Cost_req: 370
Cost_pow: 30
Supply_req: 30
Time: 30
Up-to-date: true
---
# [[Skitarii Marshal]]
*Commander*
- Frontline leader
- Effective at range
- Empowers friendly units
- - -
Base Cost: **370** ![[req.png|20]] | **30** ![[pow.png|20]] | Supply Cost: **30** ![[req.png|20]]/min | Build Time: **30.0** sec.
from [[Dominus Forgeshrine]]
- - -

| [[Member Count]]      |  3   | max 5 |
| --------------------- | :--: | ----- |
| [[Armour]]            |  4   |       |
| Armour Penetration    |  5   |       |
| Invulnerability Saves | 20%  |       |
| HP                    | 1970 |       |
> [!danger] Control Edict
> *Active Ability*
> Increase target unit's [[Armour]], fire rate, and [[Armour Penetration]] for a duration.
> 3 charges

+3AP, +3Armour
- - -
### Wargear

![[Radium Serpenta-Control Stave#Radium Serpenta/Control Stave]]

![[Taser Goad-Phosphor Blast Pistol#Taser Goad/Phosphor Blast Pistol]]

![[Arc Rifle#Arc Rifle]]

![[Plasma Caliver (Marshall)#Plasma Caliver]]

![[Multi-Tasking Cortex#Multi-Tasking Cortex]]

![[Directed Binharic Entanglement#Directed Binharic Entanglement]]

![[Battlefield Processing Cortex#Battlefield Processing Cortex]]

![[Cantic Thrallnet#Cantic Thrallnet]]

![[Hardened Commander#Hardened Commander]]

- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("AM_cover", "All_AM_units", "am")
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