---
dg-publish: true
tags:
  - Ork
  - Heavy
  - Unit
from:
  - "[[Beast Snagga Hut]]"
Cost_req: 250
Cost_pow: 20
Supply_req: 30
Time: 20
Up-to-date:
---
# [[Squighog Boyz]]
*Melee Infantry*
- Effective in melee
- High mobility
- Can throw Explosives
- - -
Base Cost: **250** ![[req.png|20]] | **20** ![[pow.png|20]] | Supply Cost: **30** ![[req.png|20]]/min | Build Time: **20.0** sec.
from [[Beast Snagga Hut]]
- - -

| [[Member Count]]      |  3   | max 6 |
| --------------------- | :--: | ----- |
| [[Armour]]            |  2   | Heavy |
| Armour Penetration    |  2   |       |
| Invulnerability Saves |  -   |       |
| HP                    | 1500 |       |
- - -

| *Armour Effectiveness* |         | per model |
| ---------------------- | ------- | :-------: |
| Light                  | 120-141 |   40-47   |
| Heavy                  | 60-99   |   20-33   |
| Vehicle                | 18-60   |   6-20    |
| Structure              | 15-72   |   5-24    |
- - -
> [!danger] Abilities
> - **Stikka Throw**
> *Active Ability*
> Throw explosives at target enemy, dealing area damage.

- - -
### Wargear
Squad +
Squad ++
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny(link("Squighog Boyz"), "Hut_units", "Ork_dmg_dealers", "All_Ork_units", "All_Ork_infantry", "All_Ork_melee_units")
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