---
tags:
  - Necron
  - Unit
dg-publish: true
Cost_dom: 150
Time: 39.8
Up-to-date:
---
# [[C'Tan Shard of the Void Dragon]]
*Flying Monster*
- Effective at all ranges
- Excels versus all targets
- Ignores obstacles
- - -
Base Cost: **150** ![[dom.png|20]] | Supply Cost: **15** ![[dom.png|20]]/min | Base Build Time: **40.0** sec.
*Requires upgrade: [[Tomb Citadel#Tomb Citadel IV|Tomb Citadel IV]]*
Build limit: **1**
from [[Tomb Citadel]]
- - -
### Wargear
![[Spear of the Void Dragon#Spear of the Void Dragon]]
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_Necron_units")
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