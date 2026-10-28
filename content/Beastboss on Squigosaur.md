---
tags:
  - "#Ork"
  - Commander
  - Unit
  - Heavy
dg-publish: true
aliases:
  - Guzzcutta
---
# [[Beastboss on Squigosaur]]
*Commander*
- Mobile skirmisher
- Effective at all ranges
- Empowers friendly units
- - -
Base Cost: **550** ![[req.png|20]] | **40** ![[pow.png|20]] | Supply Cost: **50** ![[req.png|20]]/min | Build Time: **30.0** sec.
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
- - -
### Wargear
Beastchoppa/Big Slugga
*Equipment*
- Default loadout
- Effective at all ranges
- Good versus infantry
100 ![[req.png|20]] 15sec
=> Slot 1

Beastchoppa/Thump Gun
*Equipment*
- Effective at all ranges
- Good versus infantry in melee
- Good versus vehicles at range
120 ![[req.png|20]] 10![[pow.png|20]] 15sec
=> Slot 1

Beast Hammer/Bigga Thump Gun
*Equipment*
- Effective at all ranges
- Excels versus vehicles
- Melee attacks can knock down
180 ![[req.png|20]] 30![[pow.png|20]] 15sec
=> Slot 1

Beast Hammer/Kustom Shoota
*Equipment*
- Good versus infantry at range
- Good versus vehicles in melee
- Melee attacks can knock down
220 ![[req.png|20]] 40![[pow.png|20]] 15sec
=> Slot 1

Bosspole
*Passive Ability*
Increases damage dealt and XP gain for Guzcutta and attached unit. Increases HP regain rate for Guzcutta.
100 ![[req.png|20]] 10 ![[pow.png|20]] 15sec
=> Slot 2

Ferocious Roar
*Active Ability*
Reduce damage dealt by enemies and increase Waaagh! gain for units in range.
Killing enemies in range reduces this ability's cooldown.
150 ![[req.png|20]] 20 ![[pow.png|20]] 15sec
=> Slot 2

Single-Minded Predator
*Active Ability*
The Squigosaur attempts to devour target unit, dealing damage and restoring HP if target was biological.
100 ![[req.png|20]] 30 ![[pow.png|20]] 15sec
=> Slot 2

Beastgob
*Active Ability*
Deploy a Bomb Squig Horde near Guzcutta. (Actually deploys 2, but who's counting?)
80 ![[req.png|20]] 40![[pow.png|20]] 15sec
=> Slot 3
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