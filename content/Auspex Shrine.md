---
tags:
  - SM
  - Resource
  - Structure
dg-publish: true
Up-to-date:
---
 # [[Auspex Shrine]]

## Auspex Shrine
*Upgrade*
Prevents enemy capture and increases Requisition gain.
- - -
Base Cost: **50** ![[req.png|20]] | **15** ![[pow.png|20]] | Build Time: **20.?** sec.
- - -
I => 2000 4A
II => 3700 7A
III > 6000 9A

> [!tip] Auspex Shrine II
> *Upgrade*
> - Provides Requisition (+65)
> - Prevents enemy capture
> - Armed with a Twin Heavy Onslaught Gatling Cannon
> Base Cost: **70** ![[req.png|20]] | **30** ![[pow.png|20]] | Build Time: **40.0** sec.

## Auspex Shrine II
*Resource Point*
* Provides Requisition
- Prevents enemy capture
- Armed with a Twin Heavy Onslaught Gatling Cannon

| HP         | 3700  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 7<br> | Structure |
> [!tip] Auspex Shrine III
> *Upgrade*
> Upgrades weaponry for the structure and increases Requisition gain. (+65)
> Requisition gain.
> Base Cost: **100** ![[req.png|20]] | **40** ![[pow.png|20]] | Build Time: **50.0** sec.

## Auspex Shrine III
*Resource Point*
- Provides Requisition
- Prevents enemy capture
- Armed with a Twin Las-Talon

| HP         | 6000  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 9<br> | Structure |
|            |       |           |
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny(link("Auspex Shrine"))
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