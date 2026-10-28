---
tags:
  - SM
  - Production
  - Structure
dg-publish: true
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
4200 7A w/ upgrade

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
> Base Cost: **300** ![[req.png|20]] | **50** ![[pow.png|20]] | Build Time: **10.0** sec.
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