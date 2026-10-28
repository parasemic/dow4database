---
tags:
  - Ork
  - Light
  - Unit
dg-publish: true
Up-to-date:
---
 # [[Shoota Boyz]]
*Light Infantry*
- Good versus infantry
- Low durability
- Free at maximum [[Waaagh!]]
- - -
Base Cost: **160** ![[req.png|20]] | **28** ![[req.png|20]]/min | Build Time: **15.0** sec.
from [[Mega Bossbunka]] & [[Boyz Fort]]
- - -

| [[Member Count]]      |  10  | max 20 |
| --------------------- | :--: | ------ |
| [[Armour]]            |  1   | Light  |
| Armour Penetration    |  1   |        |
| Invulnerability Saves |  -   |        |
| HP                    | 1200 |        |
- - -

| *Armour Effectiveness* | 10/10 | per model |
| ---------------------- | ----- | :-------: |
| Light                  | 60-70 |    6-7    |
| Heavy                  | 30-50 |    3-5    |
| Vehicle                | 10-30 |    1-3    |
| Structure              | 10-30 |    1-3    |
- - -
![[Shoota#*Shoota*]]

![[Big Shoota (Shootas)#Big Shoota]]

![[Boss Nob#Boss Nob]]

![[Mobbin' Up I (Boyz)#Mobbin' Up I]]

![[Mobbin' Up II (Boyz)#Mobbin' Up II]]

- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("Ork_dmg_dealers", "All_Ork_units", "All_Ork_infantry", "All_Ork_melee_units", link("Shoota Boyz"), "Fort_units")
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

![[Pasted image 20260916202846.png]]

![[Pasted image 20260914180822.png]]