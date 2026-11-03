---
dg-publish: true
tags:
  - SM
  - Utility
  - Structure
Cost_req: 150
Cost_pow: 50
Time:
Up-to-date: true
---
# [[Thunderhawk Relay]]
*Utility Structure*
- Entered units can be redeployed
- Deployment requires visibility
- Has a maximum capacity
- - -
Base Cost: **150** ![[req.png|20]] | **50** ![[pow.png|20]] | Build Time: **??.?** sec.
- - -

| HP         | 3000  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 5<br> | Structure |

Max cap 3. 4 with research. Can only fit one warsuit/dreadnouhgt. Cannot fit tanks.
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("deployed_struct", link("Thunderhawk Relay"))
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