---
tags:
  - SM
  - Light
  - Unit
dg-publish: true
Up-to-date:
---
# [[Assault Intercessor Squad]]
*Melee Infantry*
- Effective in melee
- Good versus infantry
- Can equip Jump Packs
- - -
Base Cost: **??** ![[req.png|20]] | **??** ![[pow.png|20]] | Supply Cost: **??** ![[req.png|20]]/min | Build Time: **??.?** sec.
from [[Chapel Barracks]]
- - -

| [[Member Count]]      |  5   | max 5 |
| --------------------- | :--: | ----- |
| [[Armour]]            |  4   | Light |
| Armour Penetration    |  2   |       |
| Invulnerability Saves |  -   |       |
| HP                    | 1700 |       |
- - -
### Wargear
![[Astartes Chainsword#*Astartes chainsword*]]

![[Jump Packs#Jump Packs]]
- - -
![[Thunder Hammer-Plasma Pistol (Ass Int)#Thunder Hammer/Plasma Pistol]]

![[Power Sword-Hand Flamer (Ass Int)#Power Sword/Hand Flamer]]
- - -
### Relevant research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny(link("Assault Intercessor Squad"), "All_SM_units", "SM_infantry", "Chapel_units")
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