---
dg-publish: true
tags:
  - AdMech
  - Vehicle
  - Unit
Cost_req:
Cost_pow:
Supply_req: 38
Time: 40
---
# [[Onager Dunecrawler]]
*Heavy Walker*
- Effective at range
- Good versus infantry
- Low mobility
- - -
Base Cost: **??** ![[req.png|20]] / **??** ![[pow.png|20]] | Supply Cost: **38** ![[req.png|20]]/min | Build Time: **40.0** sec.
from: [[War Cohort Armoury]]
- - -

| [[Member Count]]      |     |         |
| --------------------- | :-: | ------- |
| [[Armour]]            |     | Vehicle |
| Armour Penetration    |     |         |
| Invulnerability Saves | 20% |         |
| HP                    |     |         |
- - -
### Wargear

![[Eradication Beamer#Eradication Beamer]]

![[Daedalus Missile Launcher#Daedalus Missile Launcher]]

![[Neutron Laser#Neutron Laser]]
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny(link("Onager Dunecrawler"), "AM_vehicles", "All_AM_units", "WCArmoury_units")
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