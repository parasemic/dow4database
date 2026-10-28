---
tags:
  - SM
  - Unit
  - Light
dg-publish: true
Cost_req: 450
Cost_pow: 0
Supply_req: 36
Time: 20
---
# [[Eliminator Squad]]
*Sniper Infantry*
- Effective at long range
- Invisible at a distance
- Cannot fire while moving
- - -
Base Cost: **450** ![[req.png|20]] | Supply Cost: **36** ![[req.png|20]]/min | Build Time: **20.0** sec.
*Requires upgrade: Vanguard Attachment*
from [[Chapel Barracks]]
- - -

| [[Member Count]]      |  3  | max 3 |
| --------------------- | :-: | ----- |
| [[Armour]]            |  3  | Light |
| Armour Penetration    |  3  |       |
| Invulnerability Saves |  -  |       |
| HP                    | 900 |       |

| *Armour Effectiveness* | AP 3 |
| ---------------------- | ---- |
| Light                  |      |
| Heavy                  |      |
| Vehicle                |      |
| Structure              |      |
- - -
> [!danger] ![[Stealth#Stealth]]
### Wargear
![[Bolt Sniper Rifles (Eliminator)#*Bolt Sniper Rifles*]]

![[Las Fusils#Las Fusils]]

![[Instigator Bolt Carbine (Eliminator Sergeant)#Instigator Bolt Carbine]]
- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("SM_infantry", "All_SM_units", "Chapel_units")
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