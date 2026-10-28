---
dg-publish: true
tags:
  - SM
  - Commander
  - Unit
  - Heavy
aliases:
  - Ezrael
Cost_req: 550
Cost_pow: 40
Supply_req: 40
Time: 40
---
# [[Chaplain on Bike|Chaplain]]
*Commander*
- High-mobility leader
- Effective in melee
- Empowers friendly units
- - -
Base Cost: **??** ![[req.png|20]] / **??** ![[pow.png|20]] | Supply Cost: **??** ![[req.png|20]]/min | Build Time: **??.?** sec.
from [[Chapter Keep]]
- - -

| [[Member Count]]      |  1   |       |
| --------------------- | :--: | ----- |
| [[Armour]]            |  5   | Heavy |
| Armour Penetration    |  6   |       |
| Invulnerability Saves | 20%  |       |
| HP                    | 1600 |       |
- - -
Can Attach to:
- [[Outrider Squad]]

![[Attach.png|25]] Attach Passive:
***Litany Of Hate***
=> Increases melee damage dealt by the Commander and attached unit.

### Wargear
![[Crozius Arcanum#*Crozius Arcanum*]]

![[Mantra Of Strength#Mantra Of Strength]]

![[Catechism Of Fire#Catechism Of Fire]]

![[Recitation Of Focus#Recitation Of Focus]]

![[Litany Of Faith#Litany Of Faith]]

![[Canticle of Hate#Canticle of Hate]]

![[Hammer Of Wrath#Hammer Of Wrath]]

![[Aura Of Dread#Aura Of Dread]]

![[Indomitable Fury#Indomitable Fury]]
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_SM_units")
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