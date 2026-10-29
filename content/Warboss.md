---
tags:
  - Ork
  - Commander
  - Unit
  - Heavy
dg-publish: true
aliases:
  - Gorgutz
Up-to-date:
---
# Warboss
*Commander*
- High-durability brawler
- Effective at all ranges
- Can teleport to safety
- - -
Base Cost: **??** ![[req.png|20]] | **??** ![[pow.png|20]] | Supply Cost: **??** ![[req.png|20]]/min | Build Time: **??.?** sec.
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
Big Shoota
![[Big Shoota.png]]
*Equipment*
- Default loadout
- Effective at range
- Good versus infantry

Base Cost: **//** ![[req.png|20]] / **//** ![[pow.png|20]] | Build Time: **15.0** sec.
=> Slot 1

![[Kustom Mega-Blasta (Warboss)#Kustom Mega-Blasta]]

![[Twin Big Shoota#Twin Big Shoota]]

![[Kustom Shokk Rifle#Kustom Shokk Rifle]]

' Flashy Stikkbombz
*Active Ability*
Throw explosives at target enemy, dealing area damage. Negates cover.
Base Cost: **230** ![[req.png|20]] / **20** ![[pow.png|20]] | Build Time: **15.0** sec.
=> Slot 2

![[Ded 'Ard Armour.png]]
Ded 'Ard Armour
*Equipment*
Increases maximum HP for the Commander. (A +4, HP +700)
Base Cost: **200** ![[req.png|20]] | Build Time: **15.0** sec.
=> Slot 2
+4A, +700hp

'Ard as Nails
*Passive Ability*
Increases maximum HP for attached unit. Damage taken by the Commander is partially transferred to attached unit instead.
Base Cost: **100** ![[req.png|20]] / **10** ![[pow.png|20]] | Build Time: **15.0** sec.
=> Slot 3

Might Is Right
*Active Ability*
Perform a powerful melee attack on target enemy, dealing area damage.
Base Cost: **150** ![[req.png|20]] / **30** ![[pow.png|20]] | Build Time: **15.0** sec.
=> Slot 3

![[Kunnin' But Brutal.png]]
Kunnin' But Brutal
*Passive Ability*
Increases damage dealt to retreating enemies by the Commander and attached unit.
Base Cost: **200** ![[req.png|20]] / **10** ![[pow.png|20]] | Build Time: **15.0** sec.
=> Slot 3
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
