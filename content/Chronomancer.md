---
tags:
  - Necron
  - Light
  - Unit
  - Commander
dg-publish: true
aliases:
  - Thothmek
Cost_dom: 45
Supply_dom: 4
Time: 29.8
Up-to-date:
---
# [[Chronomancer]]
*Commander*
- Temporal manipulator
- Effective at range
- Disrupts enemy units
- - -
Base cost: **45** ![[dom.png|20]] | Supply Cost: **4** ![[dom.png|20]]/min | Base build time: **30.0** sec.
from [[Tomb Citadel]]
- - -

| Model Count           |  1   |       |
| --------------------- | :--: | ----- |
| [[Armour]]            |  6   | Light |
| Armour Penetration    |  7   |       |
| Invulnerability Saves | 40%  |       |
| HP                    | 2000 |       |
- - -
![[Attach.png|25]] Attach passive: *Timesplitter Mantle*
Increases [[Invulnerable Save]] for the Commander and attached unit.
- - -
![[Channel Aeonstave.png]]
> [!danger] Abilities
> - Channel Aeonstave:
>	*Active Ability*
>	Deal damage to target enemy and reduce its movement speed.

- - -
![[Aeonstave.png]]
> [!example] Aeonstave
> *Equipment*
> - Default weapon
> - Effective at range
> - Negates Invulnerable Save
>   
| *Armour Effectiveness* | 7 AP |
| ---------------------- | --- |
| Light                  | 131-177 |
| Heavy                  | 133-153 |
| Vehicle                | 91-133 |
| Structure              | 66-112 |
### Wargear

![[Chronometron#Chronometron]]

![[Photonic Transubjector#Photonic Transubjector]]

Metalodermal Tesla Weave
*Active Ability*
Release a burst of lightning around the Commander, dealing area damage.
15 ![[dom.png|20]] 20sec.
=> Slot 1

Autodivinator
*Passive Ability*
Increases Command Point gain and Invulnerable Save for the Commander and attached unit.
15 20 slot2

![[Dimensional Sanctum#Dimensional Sanctum]]

![[Reanimation Crypts#Reanimation Crypts]]

![[Cynosure of Eradication#Cynosure of Eradication]]

![[Canoptek Vault Protocols#Canoptek Vault Protocols]]
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