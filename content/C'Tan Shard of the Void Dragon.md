---
tags:
  - Necron
  - Unit
dg-publish: true
Cost_dom: 150
Time: 39.8
Up-to-date:
---
# [[C'Tan Shard of the Void Dragon]]
*Flying Monster*
- Effective at all ranges
- Excels versus all targets
- Ignores most obstacles
- - -
Base Cost: **150** ![[dom.png|20]] | Supply Cost: **15** ![[dom.png|20]]/min | Base Build Time: **40.0** sec.
*Requires upgrade: [[Tomb Citadel#Tomb Citadel IV|Tomb Citadel IV]]*
Build limit: **1**
from [[Tomb Citadel]]
- - -

| [[Member Count]]      |  1   |     |
| --------------------- | :--: | --- |
| [[Armour]]            |  6   |     |
| Armour Penetration    |  10  |     |
| Invulnerability Saves |  -   |     |
| HP                    | 1000 |     |


> [!danger] Spear of the Void Dragon
> *Active Ability*
> Launch a projectile at target enemy, dealing heavy area damage.

> [!danger] Hyperphasic Recall
> *Active Ability*
> Become invulnerable and immobile for a duration, then teleport to the Reserve.

> [!danger] Matter Absorption
> *Active Ability*
> Become immobile and deal damage to all vehicles in range, regaining HP based on damage dealt.

> [!tip] Matter Absorption
> *Passive Ability*
> Deal damage to a random mechanical enemy in range, regaining HP based on the damage dealt.

### Wargear
![[Spear of the Void Dragon#Spear of the Void Dragon]]
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_Necron_units")
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