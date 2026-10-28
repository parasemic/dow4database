---
tags:
  - SM
  - Light
  - Unit
dg-publish: true
Cost_req: 400
Cost_pow: 0
Supply_req: 32
Time: 15
---
# [[Intercessor Squad]]
*All-Purpose Infantry*
- Effective at range
- Good versus infantry
- Can throw grenades
- - -
Base Cost: **400** ![[req.png|20]] | Supply Cost: **32** ![[req.png|20]]/min | Build Time: **15.0** sec.
from [[Chapel Barracks]]
- - -

| [[Member Count]]      |  5   | 5     |
| --------------------- | :--: | ----- |
| [[Armour]]            |  4   | Light |
| Armour Penetration    |  3   |       |
| Invulnerability Saves |  -   |       |
| HP                    | 1400 |       |

- - -

> [!danger] Frag/Krak Grenade
> *Active Ability*
> Throw a grenade at target enemy, dealing area damage. negates cover.
> Cooldown: **20** sec. (est.)
### Wargear

![[Bolt Rifles#Bolt Rifles]]

![[Stalker Bolt Rifles#Stalker Bolt Rifles]]

![[Auto Bolt Rifles#Auto Bolt Rifles]]
- - -
![[Power Sword-Hand Flamer (Int)#Power Sword/Hand Flamer]]

![[Thunder Hammer-Plasma Pistol  (Int)#Thunder Hammer/Plasma Pistol]]

![[Auxiliary Grenade Launcher#Auxiliary Grenade Launcher]]
- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny(link("Intercessor Squad"), "SM_infantry", "All_SM_units", "Chapel_units")
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