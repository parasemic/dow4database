---
tags:
  - Necron
  - Utility
  - Structure
dg-publish: true
Cost_dom: 25
---
# [[Resurrection Gallery]]
*Utility Structure*
- Resurrects chosen unit type when lost
- Can only resurrect one unit at a time
- Must be built on the Power Matrix
- - -
Base Cost: **??** ![[dom.png|20]] | Build Time: **??.?** sec.
- - -

| HP     | 2500  |           |
| ------ | ----- | --------- |
| Armour | 5<br> | Structure |
Can resurrect: 
+ [[Canoptek Scarabs]]
+ [[Necron Warriors]]
+ [[Lychguards]]
+ [[Immortals]]
+ [[Deathmarks]]
+ [[Canoptek Spyder]]
+ [[Canoptek Wraiths]]
+ [[Skorpekh Destroyers]]
+ [[Lokhust Heavy Destroyer]]
### Research

Rapid Reanimation
*Research*
Increases the resurrection speed bonus for Resurrection Galleries when a unit matching the currently resurrecting unit is lost.
*Requires structure: Tomb Citadel Il*
Resurrection Speed Bonus **+60%**
Research Time 180.0 sec.

Undying Legions
*Research*
All resurrected and produced units start with Veterancy Level 1.
Does not apply to:
- Monolith
- C'tan Shard of the Void Dragon
*Requires structure: Tomb Citadel Il*
Research Time 180.0 sec.

> [!tip] ![[]]

> [!tip] ![[]]
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