---
dg-publish: true
tags:
  - SM
  - Resource
  - Structure
Up-to-date:
Cost_req: 50
Cost_pow: 15
---
 # [[Auspex Shrine]]

## Auspex Shrine
*Upgrade*
Prevents enemy capture and increases Requisition gain.
- - -
Base Cost: **50** ![[req.png|20]] | **15** ![[pow.png|20]] | Build Time: **20.?** sec.
- - -

+65 ![[req.png|20]]/min

| HP         | 2000  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 4<br> | Structure |

> [!tip] Auspex Shrine II
> *Upgrade*
> - Provides Requisition
> - Prevents enemy capture
> - Armed with a Twin Heavy Onslaught Gatling Cannon
> Base Cost: **70** ![[req.png|20]] | **30** ![[pow.png|20]] | Build Time: **40.0** sec.

## Auspex Shrine II
*Resource Point*
* Provides Requisition
- Prevents enemy capture
- Armed with a Twin Heavy Onslaught Gatling Cannon

+65 ![[req.png|20]]/min

| HP         | 3700  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 7<br> | Structure |
> [!tip] Auspex Shrine III
> *Upgrade*
> Upgrades weaponry for the structure and increases Requisition gain.
> Requisition gain.
> Base Cost: **100** ![[req.png|20]] | **40** ![[pow.png|20]] | Build Time: **50.0** sec.

## Auspex Shrine III
*Resource Point*
- Provides Requisition
- Prevents enemy capture
- Armed with a Twin Las-Talon

+65 ![[req.png|20]]/min

| HP         | 6000  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 9<br> | Structure |
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