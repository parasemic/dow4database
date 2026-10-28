---
tags:
  - AdMech
  - Unit
  - Commander
  - Light
dg-publish: true
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
Base Cost: **00** ![[req.png|20]] | Supply Cost: **00** ![[req.png|20]]/min | Build Time: **00.0** sec.
from [[Dominus Forgeshrine]]
- - -

| [[Member Count]]      |  1   | max 1 |
| --------------------- | :--: | ----- |
| [[Armour]]            |  4   | Light |
| Armour Penetration    |  5   |       |
| Invulnerability Saves | 20%  |       |
| HP                    | 2200 |       |
Can Attach to:
- [[Kastelan Robot Maniple]]
- not stalkers
![[Attach.png|20]] Attach passive: **Omniscanner**
Increases weapon range for attached unit.

- - -
Infoslave Skull
*Active Ability*
Send a servo-skull to target location or enemy, revealing the Fog of War and any invisible units in the area.  

Self-Repair Mechanisms
*Passive Ability*
Significantly increases HP regain rate while out of combat when at low HP.
Trigger: Has 30% HP or lower
  
Eradication Pistol
*Equipment*
- Default loadout
- Effective at range
- Good versus infantry
86-86 67-86 42-67 30-61

Mechadendrites
*Equipment*
- Effective in melee
- Good versus all targets
+ Less effective at range
  150 15sec
110-110 84-110 52-84 37-77

Plasma Caliver
Equipment
- Effective at long range
- Goad versus heavy armour
- Low fire rate
  150 10 15sec
339-547 181-308 76-124 57-110

Phosphor Blaster
Equipment
- Good versus infantry
- Deals area damage
- Ineffective versus vehicles
  160 20 15
  335-549 155-296 52-98 38-101
  
  Servo-Arc Claw
Equipment
Increases melee damage dealt by the Commander.
100 15sec
slot 2
  
Cognis Flamer
Equipment
Increases damage dealt at short range by the Commander. Negates cover and garrisons.
70 20 15
slot 2

Master of Machines
Active Ability
Restore HP to target vehicle or structure over time.
50 20 15
slot 2

Self-Repair Mechanisms
Passive Ability
Significantly increases HP regain rate for the Commander while at low HP.
slot3
100 30 15

Overloaded Safeguards
Active Ability
Toggle to increase all damage dealt and taken by the Commander.
slot 3
120 15sec

Voltagheist Shock
Active Ability
Damage all enemies in range and stun vehicles for a duration.
slot3
100 25 15
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