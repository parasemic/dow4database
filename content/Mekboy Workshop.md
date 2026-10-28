---
tags:
  - Ork
  - Utility
  - Structure
  - Research
dg-publish: true
Up-to-date:
---
# [[Mekboy Workshop]]
*Utility Structure*
- Provides research
- Armed with Big Shootas
- Armed with a Kustom Mega-blasta
---
Base Cost: **150** ![[req.png|20]] | **35** ![[pow.png|20]] | Build Time: **??.?** sec.

---

| HP         | 3000 |           |
| ---------- | ---- | --------- |
| [[Armour]] | <br> | Structure |
### Wargear
Kustom Mega-blasta >\_<
### Research
> [!tip] ![[Dakka Storm#Dakka Storm]]

> [!tip] ![[Bigga Waaagh!#Bigga Waaagh!]]

> [!tip] ![[Ded Choppy!#Ded Choppy!]]

> [!tip] ![[Mob Rule#Mob Rule]]

> [!tip] 5th research
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_Ork_structures", "Ork_dmg_dealers", "for")
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