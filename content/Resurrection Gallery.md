---
dg-publish: true
tags:
  - Necron
  - Utility
  - Structure
Cost_dom: 25
Time: 50
Up-to-date:
---
# [[Resurrection Gallery]]
*Utility Structure*
- Resurrects chosen unit type when lost
- Can only resurrect one unit at a time
- Must be built on the Power Matrix
- - -
Base Cost: **25** ![[dom.png|20]] | Build Time: **50.0** sec.
- - -

| HP     | 2500  |           |
| ------ | ----- | --------- |
| Armour | 5<br> | Structure |
Can resurrect: 
+ [[Canoptek Scarabs]] - 19.9 sec.
+ [[Necron Warriors]] -24.8 sec.
+ [[Lychguards]] -39.8 sec.
+ [[Immortals]] - 24.8 sec.
+ [[Deathmarks]] -49.7 sec.
+ [[Canoptek Spyder]] -39.8 sec.
+ [[Canoptek Wraiths]] - 49.7 sec.
+ [[Skorpekh Destroyers]] - 59.6 sec.
+ [[Lokhust Heavy Destroyer]] - 59.6 sec.
### Research
> [!tip] ![[Rapid Reanimation#Rapid Reanimation]]

> [!tip] ![[Undying Legions#Undying Legions]]
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