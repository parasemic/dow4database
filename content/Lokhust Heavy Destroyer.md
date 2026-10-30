---
dg-publish: true
tags:
  - Necron
  - Unit
  - Heavy
  - "#Destroyer"
from:
  - "[[Destroyer Crypt]]"
Cost_dom:
Supply_dom: 6
Time:
Up-to-date:
---

# [[Lokhust Heavy Destroyer]]
*Heavy Infantry*
- Effective at long range
- Good versus all targets
- Low mobility
---
Base Cost: **??** ![[dom.png|20]] | Supply Cost:  **6** ![[dom.png|20]]/min | Base build time: **??** sec.
*Requires upgrade: [[Tomb Citadel#Tomb Citadel III|Tomb Citadel III]]*
from [[Destroyer Crypt]]

---

| [[Member Count]]      |  1   |       |
| --------------------- | :--: | ----- |
| [[Armour]]            |  7   | Heavy |
| Armour Penetration    |  9   |       |
| Invulnerability Saves |  -   |       |
| HP                    | 2000 |       |

---
![[Enmitic Exterminator#Enmitic Exterminator]]

![[Gauss Destructor#Gauss Destructor]]

| *Armour Effectiveness* |         |
| ---------------------- | ------- |
| Light                  | 40-99   |
| Heavy                  | 97-188  |
| Vehicle                | 288-291 |
| Structure              | 202-206 |

---
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_Necron_units", link("Lokhust Heavy Destroyer"), "Crypt_units")
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