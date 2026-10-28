---
tags:
  - Ork
  - Vehicle
  - Unit
dg-publish: true
---
# [[Deff Dread]]
*All-Purpose Walker*
- Effective at all ranges
- Good versus infantry
- Moderate durability
- - -
Base Cost: **430** ![[req.png|20]] | **45** ![[pow.png|20]] | Supply Cost: **52** ![[req.png|20]]/min | Build Time: **20.0** sec.
from [[Scrap 'Eap]]
- - -

| [[Member Count]]      |  1  | max     |
| --------------------- | :-: | ------- |
| [[Armour]]            |     | Vehicle |
| Armour Penetration    |     |         |
| Invulnerability Saves |  -  |         |
| HP                    |     |         |
- - -
![[Big Shoota (Deff Dread)#*Big Shoota*]]

![[Killsaws#Killsaws]]

![[Skorchas#Skorchas]]

![[Rokkit Launcha#Rokkit Launcha]]

![[Kustom Mega-Blastas#Kustom Mega-Blastas]]

- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny(link("Deff Dread"), "All_Ork_units", "All_Ork_vehicles", "Ork_dmg_dealers", "All_Ork_melee_units")
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