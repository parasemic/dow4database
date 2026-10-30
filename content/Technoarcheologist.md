---
tags:
  - AdMech
  - Unit
  - Commander
  - Light
dg-publish: true
from:
  - "[[Dominus Forgeshrine]]"
Cost_req:
Supply_req:
Time:
aliases:
  - Potentia-Delta-9
Up-to-date:
---
# [[Technoarcheologist]]
*Commander*
- Adaptable explorator
- Effective at all ranges
- Can reveal Fog of War
- - -
Base Cost: **240**? ![[req.png|20]] / **25**?![[pow.png|20]]| Supply Cost: **?** ![[req.png|20]]/min | Build Time: **00.0** sec.
from [[Dominus Forgeshrine]]
- - -

| [[Member Count]]      |  1   | max 1 |
| --------------------- | :--: | ----- |
| [[Armour]]            |  4   | Light |
| Armour Penetration    |  5   |       |
| Invulnerability Saves | 20%  |       |
| HP                    | 2200 |       |

Can Attach to:
- not [[Kastelan Robot Maniple]]
- not stalkers

![[Attach.png|20]] Attach passive: **Omniscanner**
Increases weapon range for attached unit.
- - -

> [!danger] Infoslave Skull
> *Active Ability*
> Send a servo-skull to target location or enemy, revealing the Fog of War and any invisible units in the area.

### Wargear  
![[Eradication Pistol#Eradication Pistol]]

![[Mechadendrites#Mechadendrites]]

![[Plasma Caliver (Technoarcheologist)#Plasma Caliver]]

![[Phosphor Blaster (Technoarcheologist)#Phosphor Blaster]]
  
![[Servo-Arc Claw#Servo-Arc Claw]]
  
![[Cognis Flamer#Cognis Flamer]]

![[Master of Machines#Master of Machines]]

![[Self-Repair Mechanisms#Self-Repair Mechanisms]]

![[Overloaded Safeguards#Overloaded Safeguards]]

![[Voltagheist Shock#Voltagheist Shock]]
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_AM_units")
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