---
tags:
  - Ork
  - Fortification
  - Structure
dg-publish: true
Cost_req: 50
Time:
---
# [[Cuvva]]
*Fortification*
- Reduces ranged damage to occupants
- Vulnerable to melee
- Vulnerable to flanking
- - -
Base Cost: **50** ![[req.png|20]] | Build Time: **??.?** sec.
- - -

---
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_Ork_structures")
        - file.name != "Dakka Storm"
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