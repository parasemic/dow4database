---
dg-publish: true
tags:
  - Necron
  - Unit
  - Vehicle
Cost_dom: 45
Supply_dom: 7
Time: 34.8
Up-to-date: true
from:
  - "[[Tomb Citadel]]"
---
# [[Triarch Stalker]]
*All-Purpose Walker*
- Effective at all ranges
- Good versus all targets
- High mobility
- - -
Base cost:  **45** ![[dom.png|20]] | Supply Cost:  **7** ![[dom.png|20]]/min | Base build time: **35** sec.
*Requires upgrade: [[Tomb Citadel#Tomb Citadel II|Tomb Citadel II]]*
from [[Tomb Citadel]]
- - -

| [[Member Count]]      |  1   |         |
| --------------------- | :--: | ------- |
| [[Armour]]            |  6   | Vehicle |
| Armour Penetration    |  8   |         |
| Invulnerability Saves |  -   |         |
| HP                    | 3000 |         |

---
> [!danger] Abilities:
> => Switch Weapon Profile
> *Active Ability*
> Toggle the weapon between different profiles.
> - **Dispersed**: Excels versus infantry, short range
> - **Focused**: Good versus armour, medium range

![[Twin Heavy Gauss Cannon#Twin Heavy Gauss Cannon]]

![[Heat Ray#Heat Ray]]

- - -
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_Necron_units", link("Triarch Stalker"))
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