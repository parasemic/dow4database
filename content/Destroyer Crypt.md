---
tags:
  - Production
  - Necron
  - Structure
  - Destroyer
  - Research
dg-publish: true
Cost_dom: 15
---
# [[Destroyer Crypt]]
*Production Structure*
- Produces Destroyer units
- Expands the Power Matrix
- Must be built on the Power Matrix
- - -
Base Cost: **??** ![[dom.png|20]] | Build Time: **??.?** sec.
*Requires structure: [[Tomb Citadel#Tomb Citadel II|Tomb Citadel II]]*
- - -

| HP     |      |           |
| ------ | ---- | --------- |
| Armour | <br> | Structure |
- - -
Produces Units:
- [[Skorpekh Destroyers]]
- [[Lokhust Heavy Destroyer]]
- - -
### Research
> [!tip] ![[Relentless Onslaught#Relentless Onslaught]]

> [!tip] ![[Oblivion's Call#Oblivion's Call]]
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("Power_Matrix")
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