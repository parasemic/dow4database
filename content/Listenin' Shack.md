---
dg-publish: true
tags:
  - Ork
  - Fortification
  - Structure
  - "#Resource"
Cost_req: 100
Cost_pow: 10
Time:
Up-to-date:
---
# Listenin' Shack
*Resource Point*
- Provides Requisition
- Prevents enemy capture
- Armed with a Big Shoota
---
Base Cost: **100** ![[req.png|20]] | **10** ![[pow.png|20]] | Build Time: **??.?** sec.

---
**+65** ![[req.png|20]]/min income (130)

| HP         | 1500 |           |
| ---------- | ---- | --------- |
| [[Armour]] | <br> | Structure |

---
> [!tip] Listenin' Shack II
> *Upgrade*
> Adds a Rokkit Launcha and increases Requisition gain.
> **200** ![[req.png|20]] | **10** ![[pow.png|20]] | Build Time: **45.0** sec.
> **WA**

## Listenin' Shack II
*Resource Point*
- Provides Requisition
- Prevents enemy capture
- Armed with a Rokkit Launcha
=> **+65** ![[req.png|20]]/min (195)

5000hp

> [!tip]  Listenin' Shack III
> *Upgrade*
> Adds a Kustom Mega-Kannon and increases Requisition gain.
> **300** ![[req.png|20]] | **30** ![[pow.png|20]] | Build Time: **45.0** sec.

## Listenin' Shack III
*Resource Point*

=> **+65** ![[req.png|20]]/min (260)

---
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("Ork_dmg_dealers", "All_Ork_structures", "ork")
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