---
tags:
  - AdMech
  - Fortification
  - Structure
dg-publish: true
Cost_req: 425
Cost_pow: 75
Up-to-date: false
---
# [[Void Shield Generator]]
*Heavy Fortification*
- Reduces damage to units in range
- Damage reduces Shield Strength
- Strengthens the Noosphere Network
- - -
Base Cost: **425** ![[req.png|20]] | **75** ![[pow.png|20]] | Build Time: **??.?** sec.
*Requires Network Strength IX*
- - -
Blocks shots from the outside, works on your own  shots, so be careful where you place them. 60m radius.
-- Artist

| HP         | 2200  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 8<br> | Structure |

NS levels reduce damage of units within:

| NS  | I   | II  | III  | IV  | V   | VI  | VII | VIII | IX  | X   |
| --- | --- | --- | ---- | --- | --- | --- | --- | ---- | --- | --- |
| -%  | 3   | 6   | 10   | 13  | 16  | 2   | 23  | 26   | 30  | 33  |
| NS  | XI  | XII | XIII | XIV | XV  |     |     |      |     |     |
| -%  | 36  | 40  | 43   | 46  | 50  |     |     |      |     |     |

The shield itself has 8000 HP with 10 armour. It recovers 100 hp per second, and shuts down for 10 seconds when depleted.
Starts back up at half health.
--Artist

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