---
tags:
  - Ork
  - Light
  - Unit
dg-publish: true
from: "[[Boyz Fort]]"
Cost_req: 210
Cost_pow: 5
Supply_req: 30
Time: 15
Up-to-date:
---
# [[Stormboyz]]
*Jump Infantry*
- Effective in melee
- Good versus infantry
- Can jump over obstacles
- - -
Base Cost: **210** ![[req.png|20]] | **5** ![[pow.png|20]] | Supply Cost: **30** ![[req.png|20]]/min | Build Time: **15.0** sec.
from [[Boyz Fort]]
- - -

| [[Member Count]]      |      | max   |
| --------------------- | :--: | ----- |
| [[Armour]]            |  2   | Light |
| Armour Penetration    |  3   |       |
| Invulnerability Saves |  -   |       |
| HP                    | 2500 |       |
> [!danger] Rokkit Jump
> *Active Ability*
> Leap to target location, ignoring obstacles and dealing damage on landing.

### Wargear
![[Slugga-Choppa#*Slugga-Choppa*]]

Mobbin' Up I
Mobbin' Up II
- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny(link("Stormboyz"), "Ork_dmg_dealers", "All_Ork_units", "All_Ork_infantry", "All_Ork_melee_units", "Fort_units")
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