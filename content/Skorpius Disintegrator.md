---
dg-publish: true
tags:
  - AdMech
  - Unit
  - Vehicle
from:
  - "[[War Cohort Armoury]]"
Cost_req:
Cost_pow:
Supply_req: 53
Time: 40
Up-to-date:
---
# [[Skorpius Disintegrator]]
*Heavy Vehicle*
- Effective at long range
- Can launch missiles
- High durability
- - -
Base Cost: **??** ![[req.png|20]] | **??** ![[pow.png|20]] | Supply Cost: **??** ![[req.png|20]]/min | Build Time: **??.?** sec.
from [[War Cohort Armoury]]
*Requires Network Strength VII*
- - -

| [[Member Count]]      |  1   | max 1   |
| --------------------- | :--: | ------- |
| [[Armour]]            |  9   | Vehicle |
| Armour Penetration    |  8   |         |
| Invulnerability Saves |  -   |         |
| HP                    | 4200 |         |
- - -
### Wargear

![[Ferrumite Cannon#Ferrumite Cannon]]

![[Belleros Energy Cannon#Belleros Energy Cannon]]

- - -
### Relevant Research

```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny(link("Skorpius Disintegrator"), "AM_vehicles", "WCArmoury_units")
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