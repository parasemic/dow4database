---
dg-publish: true
tags:
  - "#Ork"
  - Commander
  - Unit
  - Heavy
aliases:
  - Guzzcutta
from:
  - "[[Mega Bossbunka]]"
Cost_req: 550
Cost_pow: 40
Supply_req: 50
Time: 30
Up-to-date: true
---
# [[Beastboss on Squigosaur]]
*Commander*
- Mobile skirmisher
- Effective at all ranges
- Empowers friendly units
- - -
Base Cost: **550** ![[req.png|20]] / **40** ![[pow.png|20]] | Supply Cost: **50** ![[req.png|20]]/min | Build Time: **30.0** sec.
**WAA**
from [[Mega Bossbunka]]
- - -

| [[Member Count]]      |  1   | max 1 |
| --------------------- | :--: | ----- |
| [[Armour]]            |  5   | Heavy |
| Armour Penetration    |  4   |       |
| Invulnerability Saves |  -   |       |
| HP                    | 2800 |       |
- - -
![[Attach.png|25]] Attach passive: **Da Old Ways**
Increases damage dealt to vehicles and monsters by the Commander and attached unit.

![[Pasted image 20261028152708.png]]
> [!danger] Beastly Rage
> *Active Ability*
> Increase damage dealt and Waaagh! gain for units in range for a duration.

=> +50% damage for 10 sec.
- - -
### Wargear
![[Beastchoppa-Big Slugga#Beastchoppa/Big Slugga]]

![[Beastchoppa-Thump Gun#Beastchoppa/Thump Gun]]

![[Beast Hammer-Bigga Thump Gun#Beast Hammer/Bigga Thump Gun]]

![[Beast Hammer-Kustom Shoota#Beast Hammer/Kustom Shoota]]

![[Bosspole (Squigosaur)#Bosspole]]

![[Ferocious Roar#Ferocious Roar]]

![[Single-Minded Predator#Single-Minded Predator]]

![[Bigkilla Boss (Squigosaur)#Bigkilla Boss]]

![['Ere We Go!#'Ere We Go!]]

![[Beastgob (Squigosaur)#Beastgob]]

- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("Ork_dmg_dealers", "All_Ork_units", "All_Ork_melee_units")
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