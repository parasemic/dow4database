---
tags:
  - Production
  - Structure
  - "#Canoptek"
  - Research
  - Necron
dg-publish: true
---
# [[Canoptek Foundry]]
*Production Structure*
- Produces canoptek units
- Expands the Power Matrix
- Must be built on the Power Matrix
- - -
Base Cost: **??** ![[dom.png|20]] | Build Time: **??.?** sec.
- - -

| HP     | 2500  |           |
| ------ | ----- | --------- |
| Armour | 5<br> | Structure |
- - -
Produces units:
- [[Canoptek Scarabs]]
- [[Canoptek Spyder]]
- [[Canoptek Wraiths]]
- [[Canoptek Doomstalker]]
- - -
### Research
> [!tip] ![[Nanoassembly Protocols#Nanoassembly Protocols]]

> [!tip] ![[Unyielding Armament#Unyielding Armament]]

> [!tip] ![[Accelerated Awakening#Accelerated Awakening]]
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