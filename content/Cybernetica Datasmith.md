---
tags:
  - AdMech
  - Light
  - Utility
  - Unit
dg-publish: true
from:
  - "[[Dominus Forgeshrine]]"
  - "[[Omnissian Cult]]"
Cost_req: 90
Cost_pow: 0
Supply_req: 7
Time: 10
Up-to-date: true
---
# [[Cybernetica Datasmith]]
*Utility Infantry*
- Builds Structures
- Can perform repairs
- Can attach to Kastelan Robots
- - -
Base Cost: **90** ![[req.png|20]] | Supply Cost: **7** ![[req.png|20]]/min | Build Time: **10.0** sec.
from [[Dominus Forgeshrine]] & [[Omnissian Cult]]
- - -

| [[Member Count]]      |  1  | max 1 |
| --------------------- | :-: | ----- |
| [[Armour]]            |  3  | Light |
| Armour Penetration    |  6  |       |
| Invulnerability Saves | 15% |       |
| HP                    | 500 |       |
Can Attach to:
- [[Kastelan Robot Maniple]]
![[Attach.png|20]] Enables **Doctrina Wafer Exchange** ability.

> [!danger] Repair
> *Active Ability*
> Restore HP to target structure or vehicle over time.
> *Unavailable while retreating*
> *Unavailable in melee*

> [!danger] Doctrina Wafer Exchange
> *Active Ability*
> Switch an attached Kastelan Robot Maniple's combat protocol.
### Wargear
![[Mechanicus Pistol#*Mechanicus Pistol*]]

![[Doctrina Wafer Exchange#Doctrina Wafer Exchange]]

### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny(link("Cybernetica Datasmith"), "All_AM_units", "Cult_units")
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