---
dg-publish: true
tags:
  - SM
  - Unit
  - Vehicle
from:
  - "[[Armoury]]"
  - "[[Sanctum]]"
Cost_req: 550
Cost_pow: 55
Supply_req: 50
Time: 30
Up-to-date:
---
# [[Redemptor Dreadnought]]
*All-Purpose Walker*
- Effective at all ranges
- Good versus infantry
- Can launch grenades
- - -
Base Cost: **550** ![[req.png|20]] / **55** ![[pow.png|20]] | Supply Cost: **50** ![[req.png|20]]/min | Build Time: **30.0** sec.
*Requires upgrade: Heavy Elites Attachment*
from [[Sanctum]] & [[Armoury]]
- - -

| [[Member Count]]      |  1   | max 1   |
| --------------------- | :--: | ------- |
| [[Armour]]            |  8   | Vehicle |
| Armour Penetration    |  9   |         |
| Invulnerability Saves |  -   |         |
| HP                    | 5500 |         |
- - -
### Wargear

![[Anti-Armour Pattern#Anti-Armour Pattern]]

![[Anti-Infantry Pattern#Anti-Infantry Pattern]]
- - -
### Relevant research

```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_SM_units", "Sanctum_units", link("Redemptor Dreadnought"), "SM_vehicles", "SM_Armoury_units")
        - file.name != "Battle Drill Recall"
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