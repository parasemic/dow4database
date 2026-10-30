---
tags:
  - AdMech
  - Utility
  - Structure
dg-publish: true
Cost_req: 50
Cost_pow: 0
Up-to-date:
---
# [[Cogitator Relay]]
*Utility Structure*
- Extends Noosphere Network
- Strengthens the Noosphere Network (+1)
- Low durability
- - -
Base Cost: **50** req | Build Time: **??.?** sec.
- - -
Gets +10% HP per NS level, up to +150% at XV.
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny(link("Cogitator Relay"))
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