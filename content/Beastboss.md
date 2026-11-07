---
dg-publish: true
tags:
  - Ork
  - Commander
  - Unit
  - Heavy
aliases:
  - Guzzcutta
from: "[[Mega Bossbunka]]"
Cost_req: 375
Cost_pow: 20
Supply_req: 40
Time: 30
Up-to-date: true
---
# [[Beastboss]]
*Commander*
- Brutal all-rounder
- Effective in melee
- Empowers friendly units
- - -
Base Cost: **375** ![[req.png|20]] / **20** ![[pow.png|20]] | Supply Cost: **40** ![[req.png|20]]/min | Build Time: **30.0** sec.
from: [[Mega Bossbunka]]
- - -

| [[Member Count]]      |  1   | max 1 |
| --------------------- | :--: | ----- |
| [[Armour]]            |  4   | Heavy |
| Armour Penetration    |  4   |       |
| Invulnerability Saves |  -   |       |
| HP                    | 2800 |       |

![[Attach.png|20]] Attach passive: **Da Old Ways**
Increases damage dealt to vehicles and monsters by the Commander and attached unit.

![[Pasted image 20261028152708.png]]
> [!danger] Beastly Rage
> *Active Ability*
> Increase damage dealt and Waaagh! gain for units in range for a duration.

+40% damage
40m range
### Wargear
![[Beastchoppa-Kustom Shoota#Beastchoppa/Kustom Shoota]]

![['Uge Beastchoppa-Big Slugga#'Uge Beastchoppa/Big Slugga]]

![[Beast Hammer-Thump Gun (Beastboss)#Beast Hammer/Thump Gun]]

![[Cybork Strength#Cybork Strength]]

![[Bosspole (Beastboos)#Bosspole]]

![[Bigkilla Boss (Beastboss)#Bigkilla Boss]]

![[Beastgob#Beastgob]]

### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("Ork_dmg_dealers", "All_Ork_units", "All_Ork_melee_units", "All_Ork_infantry")
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