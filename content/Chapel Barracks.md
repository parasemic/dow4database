---
tags:
  - SM
  - Production
  - Structure
  - Research
dg-publish: true
---
# [[Chapel Barracks]]
*Production Structure*
- Produces infantry
- Provides research
- Upgrade to unlock units
- - -
Base Cost: **200** ![[req.png|20]] | Build Time: **??.?** sec.
- - -

| HP         | 1500  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 5<br> | Structure |
2200 w/ up

- - -
produces units:
- [[Infiltrator Squad]]
- [[Intercessor Squad]]
- [[Assault Intercessor Squad]]
- [[Invictor Tactical Warsuit]]
- [[Eliminator Squad]]
- - -
#### Research
> [!tip] ![[Enhanced Physiology#Enhanced Physiology]]

> [!tip] ![[Take And Hold#Take And Hold]]

> [!tip] ![[Vanguard Tactics#Vanguard Tactics]]

> [!tip] ![[Guerilla Tactics#Guerilla Tactics]]

> [!tip] ![[Adaptive Strategy#Adaptive Strategy]]
### Upgrade
![[SM_struct_upgrade.png]]
> [!todo] Vanguard Attachment
> *Upgrade*
> Unlocks Eliminator Squads, Invictor Tactical Warsuits, and additional research.
> HP **+700**
Base Cost: **300** ![[req.png|20]] | **10** ![[pow.png|20]] | Build Time: **100.0** sec.
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("deployed_struct")
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