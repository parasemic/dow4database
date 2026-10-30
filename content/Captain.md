---
dg-publish: true
tags:
  - SM
  - Commander
  - Unit
  - Light
from:
  - "[[Chapter Keep]]"
aliases:
  - Cyrus
Cost_req: 350
Cost_pow: 30
Supply_req: 28
Time: 30
---
# [[Captain]]
*Commander*
- High-damage marksman
- Effective at long range
- Invisible at a distance
- - -
Base Cost: **350** ![[req.png|20]] / **50** ![[pow.png|20]] | Supply Cost: **??** ![[req.png|20]]/min | Build Time: **??.?** sec.
from [[Chapter Keep]]
- - -

| [[Member Count]]      |  1  |       |
| --------------------- | :-: | ----- |
| [[Armour]]            |  3  | Light |
| Armour Penetration    |  4  |       |
| Invulnerability Saves |  -  |       |
| HP                    | 800 |       |
- - -
Can Attach to:
- ==

![[Attach.png|25]] Attach Passive:
***Tactical Precision***
=> Increases ranged damage dealt by attached unit.

### Wargear

![[Bolt Sniper Rifle (Captain)#Bolt Sniper Rifle]]

![[Instigator Bolt Carbine (Captain)#Instigator Bolt Carbine]]

![[Combi-Plasma#Combi-Plasma]]

![[Multi-Spectrum Array#Multi-Spectrum Array]]

![[Haywire Mine#Haywire Mine]]

![[Master Of Deceit#Master Of Deceit]]

![[Marksman Honours#Marksman Honours]]

![[Strategic Expertise#Strategic Expertise]]

![[Strike from the Shadows#Strike from the Shadows]]
- - -
  ### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_SM_units", "SM_infantry")
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