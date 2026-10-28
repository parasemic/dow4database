---
tags:
  - Ork
  - Heavy
  - Unit
dg-publish: true
from: "[[Boyz Fort]]"
Cost_req:
Cost_pow:
Supply_req:
Time:
Up-to-date:
---
# [[Meganobz]]
*Elite Infantry*
- Effective at all ranges
- Good versus all targets
- High durability
---
**350** ![[req.png|20]] | **40** ![[pow.png|20]] | **46** ![[req.png|20]]/min | **25.0** sec.
from [[Boyz Fort]]

---

| [[Member Count]]      |  3   |       |
| --------------------- | :--: | ----- |
| [[Armour]]            |  6   | Heavy |
| Armour Penetration    |  7   |       |
| Invulnerability Saves |  -   |       |
| HP                    | 4800 |       |
![[Kombi-Shoota#*Kombi-Shoota*]]

![[Kombi-Skorcha#Kombi-Skorcha]]

![[Kombi-Rokkit Launcha#Kombi-Rokkit Launcha]]

2 upgrades

---
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny(link("Meganobz"), "Ork_dmg_dealers", "All_Ork_units", "All_Ork_infantry", "All_Ork_melee_units")
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