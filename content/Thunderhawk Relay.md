---
tags:
  - SM
  - Utility
  - Structure
dg-publish: true
Up-to-date:
Cost_req: 150
Cost_pow: 50
Time:
---
# [[Thunderhawk Relay]]
*Utility Structure*
- Entered units can be redeployed
- Deployment requires visibility
- Has a maximum capacity
- - -
Base Cost: **150** ![[req.png|20]] | **50** ![[pow.png|20]] | Build Time: **??.?** sec.
- - -

| HP         | 3000 |           |
| ---------- | ---- | --------- |
| [[Armour]] | <br> | Structure |
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