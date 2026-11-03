---
dg-publish: true
tags:
  - Ork
  - Unit
  - Heavy
from:
  - "[[Scrap 'Eap]]"
Cost_req: 300
Cost_pow: 20
Supply_req: 36
Time: 20
Up-to-date: true
---
# [[Deffkoptas]]
*Flying Infantry*
- Effective at range
- Good versus vehicles
- Ignores most obstacles
- - -
Base Cost: **300** ![[req.png|20]] / **20** ![[pow.png|20]] | Supply Cost: **36** ![[req.png|20]]/min | Build Time: **20.0** sec.
from [[Scrap 'Eap]]
- - -

| [[Member Count]]      |  3   | max 4 |
| --------------------- | :--: | ----- |
| [[Armour]]            |  5   | Heavy |
| Armour Penetration    |  4   |       |
| Invulnerability Saves |  -   |       |
| HP                    | 2100 |       |
- - -
### Wargear
![[Kopta Rokkits#*Kopta Rokkits*]]

![[Mobbin' Up I (Koptas)#Mobbin' Up I]]
### Relevant research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_Ork_infantry", "All_Ork_units", "Ork_dmg_dealers", link("Deffkoptas"))
        - file.name != "'Arder Armour"
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