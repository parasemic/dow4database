---
tags:
  - Ork
  - Unit
dg-publish: true
---
# [[Deffkoptas]]

- - -
Base Cost: **??** ![[req.png|20]] | **??** ![[pow.png|20]] | Supply Cost: **??** ![[req.png|20]]/min | Build Time: **??.?** sec.
from [[Scrap 'Eap]]
- - -

| [[Member Count]]      |     | max |
| --------------------- | :-: | --- |
| [[Armour]]            |     |     |
| Armour Penetration    |     |     |
| Invulnerability Saves |  -  |     |
| HP                    |     |     |
- - -
### Wargear
![[Kopta Rokkits#*Kopta Rokkits*]]
mob up 1 2
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