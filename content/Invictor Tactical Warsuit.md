---
tags:
  - SM
  - Vehicle
  - Unit
dg-publish: true
Cost_req: 470
Cost_pow: 40
Supply_req: 38
Time: 20
---
# [[Invictor Tactical Warsuit]]
*Anti-Infantry Walker*
- Excels versus infantry
- deals area damage
- High mobility
- - -
Base Cost: **470** ![[req.png|20]] | **40** ![[pow.png|20]] | Supply Cost: **38** ![[req.png|20]]/min | Build Time: **20.0** sec.
from [[Chapel Barracks]]
*Requires upgrade: Vanguard Attachment*
- - -

| [[Member Count]]      |  1   | max 1   |
| --------------------- | :--: | ------- |
| [[Armour]]            |  6   | Vehicle |
| Armour Penetration    |  8   |         |
| Invulnerability Saves |  -   |         |
| HP                    | 3800 |         |
- - -
Power of the Machine Spirit
Rapidly restore HP over time for a duration. Disables weapons and movement.
*Unavailable in combat*
10sec for 20% hp?

Fragstorm Grenade Barrage
*Active Ability* needs a target
Launch grenades at target enemy, dealing area damage.
*Unavailable in melee*
### Wargear

![[Twin Ironhail Autocannon#Twin Ironhail Autocannon]]

![[Incendium Cannon#Incendium Cannon]]

### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_SM_units", link("Invictor Tactical Warsuit"), "SM_vehicles", "Chapel_units")
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