---
tags:
  - SM
  - Utility
  - Structure
  - Research
dg-publish: true
Cost_req: 100
Cost_pow: 5
Time: 30
Up-to-date:
---
# [[Strategium]]
*Utility Structure*
- Provides research
- Build structures to unlock research
- Upgrade structures to unlock research
- - -
Base Cost: **100** ![[req.png|20]] / **5** ![[pow.png|20]] | Build Time: **30.0** sec.
- - -

| HP         | 2000  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 4<br> | Structure |
- - -
### Research
> [!tip] ![[Not One Backwards Step#Not One Backwards Step]]

> [!tip] ![[Battle Drill Recall#Battle Drill Recall]]

> [!tip] ![[Lightning Deployment#Lightning Deployment]]

> [!tip] ![[Orbital Onslaught#Orbital Onslaught]]

> [!tip] ![[Rapid Embarkation#Rapid Embarkation]]
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