---
dg-publish: true
tags:
  - AdMech
  - Vehicle
  - Unit
Cost_req: 550
Cost_pow: 60
Supply_req: 38
Time: 40
from:
  - "[[War Cohort Armoury]]"
Up-to-date:
---
# [[Onager Dunecrawler]]
*Heavy Walker*
- Effective at range
- Good versus infantry
- Low mobility
- - -
Base Cost: **550** ![[req.png|20]] / **60** ![[pow.png|20]] | Supply Cost: **38** ![[req.png|20]]/min | Build Time: **40.0** sec.
from: [[War Cohort Armoury]]
- - -

| [[Member Count]]      |  1   | max 1   |
| --------------------- | :--: | ------- |
| [[Armour]]            |  8   | Vehicle |
| Armour Penetration    |  8   |         |
| Invulnerability Saves | 20%  |         |
| HP                    | 3200 |         |
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