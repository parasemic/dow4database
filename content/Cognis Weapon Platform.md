---
tags:
  - AdMech
  - Fortification
  - Structure
dg-publish: true
Cost_req: 200
Cost_pow: 20
Up-to-date:
---
# [[Cognis Weapon Platform]]
*Fortification*
- Good versus light armour
- High fire rate
- Strengthens the Noosphere Network
- - -
Base Cost: **200** ![[req.png|20]] | **20** ![[pow.png|20]] | Build Time: **??.?** sec.
- - -
+1 Network point
Gets + 8% dmg per NS level, up to +120% at XV.

| HP         | 1800  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 5<br> | Structure |
- - -
![[Cognis Heavy Stubbers#Cognis Heavy Stubbers]]

![[Plasma Culverins (CWP)#Plasma Culverins]]

![[Cognis Flamers (CWP)#Cognis Flamers]]

![[Cognis Lascannon#Cognis Lascannon]]
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("AM_fortifications")
        - file.name != "Optimised Fabrication"
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