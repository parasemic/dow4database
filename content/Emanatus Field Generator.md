---
dg-publish: true
tags:
  - AdMech
  - Fortification
  - Structure
Cost_req: 45
Cost_pow: 10
Up-to-date: true
---
# [[Emanatus Field Generator]]
*Fortification*
- Reduces ranged damage to occupants
- Absorbs melee damage to occupants
- Strengthens the Noosphere Network
- - -
Base Cost: **45** ![[req.png|20]] | **10** ![[pow.png|20]] | Build Time: **??.?** sec.
- - -
NS points +2

| HP         | 4500  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 6<br> | Structure |

Reduces ranged damage taken by occupants.

Damage Received: -5% per NS level until IV, then -3.3..% per level.

| NS  | I   | II  | III  | IV  | V   | VI  | VII | VIII | IX  | X   |
| --- | --- | --- | ---- | --- | --- | --- | --- | ---- | --- | --- |
| -%  | 5   | 10  | 15   | 20  | 23  | 26  | 30  | 33   | 36  | 40  |
| NS  | XI  | XII | XIII | XIV | XV  |     |     |      |     |     |
| -%  | 43  | 46  | 50   | 53  | 56  |     |     |      |     |     


> [!info] NS points
> Depending on how much you value power, EFGs can be the cheapest source of Noosphere once [[Optimised Fabrication]] is researced. Giving 2 points for 34 ![[req.png|20]] / 8![[pow.png|20]], versus 1 point for 25 ![[req.png|20]] with [[Cogitator Relay]].
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("AM_fortifications")
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