---
tags:
  - Ork
  - Light
  - Unit
dg-publish: true
from:
  - "[[Mega Bossbunka]]"
  - "[[Boyz Fort]]"
Cost_req: 160
Cost_pow: 0
Supply_req: 28
Time: 15
Up-to-date:
---
# [[Slugga Boyz]]
*Melee Infantry*
- Good versus infantry
- Low durability
- Free at maximum [[Waaagh!]]
- - -
Base Cost: **160** ![[req.png|20]] | **28** ![[req.png|20]]/min | Build Time: **15.0** sec.
from [[Mega Bossbunka]] & [[Boyz Fort]]
- - -

| [[Member Count]]      |  10  | max 20 |
| --------------------- | :--: | ------ |
| [[Armour]]            |  1   |        |
| Armour Penetration    |  1   |        |
| Invulnerability Saves |  -   |        |
| HP                    | 1400 |        |

| *Armour Effectiveness* | 1 AP | per model |
| ---------------------- | ---- | :-------: |
| Light                  |      |   7-10    |
| Heavy                  |      |    4-6    |
| Vehicle                |      |    1-4    |
| Structure              |      |    1-4    |
- - -
- - -
![[Slugga-Choppa#*Slugga-Choppa*]]

![[Burna#Burna]]

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
        - affects.containsAny("Ork_dmg_dealers", "All_Ork_units", "All_Ork_infantry", "All_Ork_melee_units", link("Slugga Boyz"), "Fort_units")
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