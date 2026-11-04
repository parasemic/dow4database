---
dg-publish: true
tags:
  - Ork
  - Commander
  - Unit
  - Heavy
aliases:
  - Gorgutz
from:
  - "[[Mega Bossbunka]]"
Cost_req: 400
Cost_pow: 30
Supply_req: 30
Time: 30
Up-to-date: true
---
# Warboss
*Commander*
- High-durability brawler
- Effective at all ranges
- Can teleport to safety
- - -
Base Cost: **400** ![[req.png|20]] / **30** ![[pow.png|20]] | Supply Cost: **30** ![[req.png|20]]/min | Build Time: **30.0** sec.
from [[Mega Bossbunka]]
- - -

| [[Member Count]]      |  1   | max 1 |
| --------------------- | :--: | ----- |
| [[Armour]]            |  6   | Heavy |
| Armour Penetration    |  6   |       |
| Invulnerability Saves |  -   |       |
| HP                    | 3500 |       |

![[Attach.png|20]] Attach passive:
*Youz Fight For Me Now!*
Increases maximum HP, Waaagh! gain, XP gain, and damage dealt by attached unit.

> [!danger] I'm Outta 'Ere
> *Active Ability*
> Deploy explosives around Gorgutz, then teleport to a random Ork production structure.
> Detaches unit first.
### Wargear
Power claw, Kustom Shoota and Big shoota (shoulder)
![[Big Shoota.png]]
*Equipment*
- Default loadout
- Effective at range
- Good versus infantry

Base Cost: **150** ![[req.png|20]] | Build Time: **15.0** sec.
=> Slot 1

![[Kustom Mega-Blasta (Warboss)#Kustom Mega-Blasta]]

![[Twin Big Shoota#Twin Big Shoota]]

![[Kustom Shokk Rifle#Kustom Shokk Rifle]]
- - -
![[Flashy Stikkbombz#Flashy Stikkbombz]]

![[Ded 'Ard Armour#Ded 'Ard Armour]]
- - -
![['Ard as Nails#'Ard as Nails]]

![[Might Is Right#Might Is Right]]

![[Kunnin' But Brutal#Kunnin' But Brutal]]
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("Ork_dmg_dealers", "All_Ork_infantry", "All_Ork_units", "All_Ork_melee_units")
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
