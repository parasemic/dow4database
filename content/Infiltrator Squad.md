---
dg-publish: true
tags:
  - SM
  - Unit
  - Light
from:
  - "[[Chapter Keep]]"
  - "[[Chapel Barracks]]"
Cost_req: 350
Cost_pow: 0
Supply_req: 24
Time: 10
Up-to-date:
---
# [[Infiltrator Squad]]
*Light Infantry*
- Effective at range
- High mobility
- Invisible at a distance
- - -
Base Cost: **350** ![[req.png|20]] | Supply Cost: **24** ![[req.png|20]]/min | Build Time: **10.0** sec.
from [[Chapter Keep]] & [[Chapel Barracks]]
- - -

| [[Member Count]]      |  5   |       |
| --------------------- | :--: | ----- |
| [[Armour]]            |  3   | Light |
| Armour Penetration    |  1   |       |
| Invulnerability Saves |  -   |       |
| HP                    | 1100 |       |

| *Armour Effectiveness* | 1      |
| ---------------------- | ------ |
| Light                  | 95-130 |
| Heavy                  | 40-75  |
| Vehicle                | 0-40   |
| Structure              | 5-55   |
- - -
> [!danger] ![[Stealth#Stealth]]

- - -
### Wargear
![[Marksman Bolt Carbine#*Marksman Bolt Carbine*]]

![[Infiltrator Comms Arrays#Infiltrator Comms Arrays]]

![[Helix Gauntlet#Helix Gauntlet]]
- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny(link("Infiltrator Squad"), "Chapel_units", "Stealth_units", "All_SM_units", "SM_infantry")
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