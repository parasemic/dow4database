---
dg-publish: true
tags:
  - SM
  - Production
  - Structure
Cost_req: 400
Cost_pow: 25
Up-to-date:
---
# [[Sanctum]]
*Production Structure*
- Produces veteran units
- Provides research
- Upgrade to unlock units
- - -
Base Cost: **400** ![[req.png|20]] | **25** ![[pow.png|20]] | Build Time: **??.?** sec.
- - -

| HP         | 3300  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 7<br> | Structure |

- - -
Produces Units:
- [[Bladeguard Veteran Squad]]
- [[Eradicator Squad]]
- [[Terminator Squad]]
- [[Redemptor Dreadnought]]
#### Research
> [!tip] ![[Heroes Of The Chapter#Heroes Of The Chapter]]

> [!tip] ![[Burning Hatred#Burning Hatred]]

> [!tip] ![[Terrifying Efficiency#Terrifying Efficiency]]

> [!tip] ![[Fury Of The First Company#Fury Of The First Company]]

### Upgrade
> [!todo] Heavy Elites Attachment
> *Upgrade*
> Unlocks Terminator Squads, Redemptor Dreadnoughts, and additional research.
> Base Cost: **250** ![[req.png|20]] | **30** ![[pow.png|20]] | Build Time: **10.0** sec.

| HP         | 4200  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 7<br> | Structure |

### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("deployed_struct")
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