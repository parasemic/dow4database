---
tags:
  - "#Heavy"
  - Canoptek
  - Construct
  - Unit
  - Necron
dg-publish: true
---
# [[Canoptek Wraiths]]
*Heavy Constructs*
- Effective in melee
- Good versus all targets
- Can phase through obstacles
- - -
Base cost:  ![[dom.png|20]] | Supply Cost:  dom/min | ![[dom.png|20]] build time: **??** sec.
from [[Canoptek Foundry]]
- - -

| [[Member Count]]      |  3   | max 6 |
| --------------------- | :--: | ----- |
| [[Armour]]            |  6   | Heavy |
| Armour Penetration    |  7   |       |
| Invulnerability Saves | 40%  |       |
| HP                    | 2400 |       |
- - -
> [!danger] Abilities:
> - Hyperphasing:
>	*Active Ability*
>	Become invulnerable and move to target location in range, ignoring obstacles.

- - -
### Wargear
![[Vicious Claws#*Vicious Claws*]]

![[Particle Caster#Particle Caster]]

![[Transdimensional Beamer#Transdimensional Beamer]]

slot 4 Undying Legions I +1
	slot 4 Undying Legions II +2 ??
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("Foundry_units", "All_Necron_units")
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