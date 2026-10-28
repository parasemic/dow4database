---
dg-publish: true
tags:
  - Necron
  - Structure
  - Utility
  - Resource
---
# [[Protocol Relays]]
*Utility Structure*
* Reduces unit production time
- Provides Dominion
- Prevents enemy capture
- Upgrade to equip with weaponry
- - -
> [!info] Eco boost
> A basic Req node increases Dominion gain 5%, each level of Protocol relay on top of it add another 2.5%.
> Owning a single LVL3 Protocol Relay will increase your ![[dom.png|20]] gain by +12.5%.
-- Artist

| HP         | 2000  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 4<br> | Structure |

> [!tip] Protocol Relay II
> *Upgrade*
> Adds a mounted weapon, reduces unit production time, and increases Dominion gain.
> *Requires structure: Tomb Citadel Il*
> Cost: **15** ![[dom.png|20]] | Build Time: **40.0** sec.

- - - 
## Protocol Relay II
*Utility Structure*
- Reduces unit production time
- Provides Dominion
- Prevents enemy capture
- Armed with a Tesla Cannon

| HP         | 3700  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 7<br> | Structure |> [!tip] Protocol Relay II
> [!yip] Protocol Relay III
> *Upgrade*
> Upgrades the structure's weaponry, reduces unit production time, and increases Dominion gain.
> *Requires structure: Tomb Citadel IlI*
> Cost: **15** ![[dom.png|20]] | Build Time: **50.0** sec.

- - -
## Protocol Relay III
*Utility Structure*
- Reduces unit production time
- Provides Dominion
- Prevents enemy capture
- Armed with a Gauss Cannon

| HP         | 6000  |           |
| ---------- | ----- | --------- |
| [[Armour]] | 9<br> | Structure |

### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny(link("Protocol Relays"), "am")
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