---
tags:
  - Ork
  - Production
  - Structure
  - Research
dg-publish: true
Cost_req: 150
Up-to-date: true
---
# [[Boyz Fort]]
*Production Structure*
- Produces infantry
- Provides research
- Armour with a Big Shoota
- - -
Base Cost: **150** ![[req.png|20]] | Build Time: **??.?** sec.
- - -

| HP         | 2700 |           |
| ---------- | ---- | --------- |
| [[Armour]] | <br> | Structure |

---
Produces units:
- [[Slugga Boyz]]
- [[Shoota Boyz]]
- [[Stormboyz]]
- [[Flash Gitz]]
- [[Meganobz]]
---
### Research:
> [!tip] ![[Ded 'Ard#Ded 'Ard]]

> [!tip] ![[More Dakka!#More Dakka!]]

> [!tip] ![[Skarboyz#Skarboyz]]

> [!tip] ![[Extra Teef#Extra Teef]]

> [!tip] ![[Get Stuck In!#Get Stuck In!]]
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