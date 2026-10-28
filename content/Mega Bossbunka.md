---
tags:
  - Ork
  - HQ
  - Structure
  - Production
dg-publish: true
Up-to-date:
---
# [[Mega Bossbunka]]
*Headquarters*
- Produces basic infantry
- Produces Commanders
- Has mounted weapons
---
Base Cost: **300** ![[req.png|20]] | **20** ![[pow.png|20]] | Build Time: **??.?** sec.
**WAA**
- - -

| HP         | 8000  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 8<br> | Structure |


Produces Units:
- Commander ([[Beastboss on Squigosaur]] or Beastboss or [[Warboss]])
- [[Gretchin]]
- [[Slugga Boyz]]
- [[Shoota Boyz]]

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