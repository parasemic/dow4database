---
dg-publish: false
Up-to-date: true
---
![[Light.png]]
## Ork
```base
views:
  - type: table
    name: Orkz
    filters:
      and:
        - file.tags.containsAll("unit", "light", "ork")
    groupBy:
      property: from
      direction: ASC
    order:
      - file.name
      - Cost_req
      - Cost_pow
      - Supply_req
      - Time
    sort:
      - property: Slot
        direction: ASC
    cardSize: 175
    image: note.pic
    imageAspectRatio: 0.3
    imageFit: contain
    columnWidth: 250
    columnSize:
      note.Time: 93

```
## Necron
```base
views:
  - type: table
    name: Necron
    filters:
      and:
        - file.tags.containsAll("unit", "light", "necron")
    groupBy:
      property: from
      direction: ASC
    order:
      - file.name
      - Cost_dom
      - Supply_dom
      - Time
    sort:
      - property: Cost_req
        direction: ASC
      - property: Slot
        direction: ASC
    cardSize: 175
    image: note.pic
    imageAspectRatio: 0.3
    imageFit: contain
    columnWidth: 250
    columnSize:
      note.Time: 93

```
## Adeptus Mechanicus
```base
views:
  - type: table
    name: Adeptus Mechanicus
    filters:
      and:
        - file.tags.containsAll("unit", "light", "AdMech")
    groupBy:
      property: from
      direction: ASC
    order:
      - file.name
      - Cost_req
      - Cost_pow
      - Supply_req
      - Time
    sort:
      - property: Slot
        direction: ASC
    cardSize: 175
    image: note.pic
    imageAspectRatio: 0.3
    imageFit: contain
    columnWidth: 250
    columnSize:
      note.Time: 93

```
## Spess 'muhreens
```base
views:
  - type: table
    name: Space Marines
    filters:
      and:
        - file.tags.containsAll("unit", "light", "SM")
    groupBy:
      property: from
      direction: ASC
    order:
      - file.name
      - Cost_req
      - Cost_pow
      - Supply_req
      - Time
    sort:
      - property: Slot
        direction: ASC
    cardSize: 175
    image: note.pic
    imageAspectRatio: 0.3
    imageFit: contain
    columnWidth: 250
    columnSize:
      note.Time: 93

```
- - -

![[Heavy.png]]
## Ork
```base
views:
  - type: table
    name: Orkz
    filters:
      and:
        - file.tags.containsAll("unit", "ork", "heavy")
    groupBy:
      property: from
      direction: ASC
    order:
      - file.name
      - Cost_req
      - Cost_pow
      - Supply_req
      - Time
    sort:
      - property: Slot
        direction: ASC
    cardSize: 175
    image: note.pic
    imageAspectRatio: 0.3
    imageFit: contain
    columnWidth: 250
    columnSize:
      note.Time: 93

```
## Necron
```base
views:
  - type: table
    name: Necron
    filters:
      and:
        - file.tags.containsAll("unit", "heavy", "necron")
    groupBy:
      property: from
      direction: ASC
    order:
      - file.name
      - Cost_dom
      - Supply_dom
      - Time
    sort:
      - property: Slot
        direction: ASC
    cardSize: 175
    image: note.pic
    imageAspectRatio: 0.3
    imageFit: contain
    columnWidth: 250
    columnSize:
      note.Time: 93

```
## Adeptus Mechanicus
```base
views:
  - type: table
    name: Adeptus Mechanicus
    filters:
      and:
        - file.tags.containsAll("unit", "AdMech", "heavy")
    groupBy:
      property: from
      direction: ASC
    order:
      - file.name
      - Cost_req
      - Cost_pow
      - Supply_req
      - Time
    sort:
      - property: Slot
        direction: ASC
    cardSize: 175
    image: note.pic
    imageAspectRatio: 0.3
    imageFit: contain
    columnWidth: 250
    columnSize:
      note.Time: 93

```
## Spess 'muhreens
```base
views:
  - type: table
    name: Space Marines
    filters:
      and:
        - file.tags.containsAll("unit", "SM", "heavy")
    groupBy:
      property: from
      direction: ASC
    order:
      - file.name
      - Cost_req
      - Cost_pow
      - Supply_req
      - Time
    sort:
      - property: Slot
        direction: ASC
    cardSize: 175
    image: note.pic
    imageAspectRatio: 0.3
    imageFit: contain
    columnWidth: 250
    columnSize:
      note.Time: 93

```

- - -
![[Vehicle.png]]
## Ork
```base
views:
  - type: table
    name: Orkz
    filters:
      and:
        - file.tags.containsAll("unit", "ork", "vehicle")
    groupBy:
      property: from
      direction: ASC
    order:
      - file.name
      - Cost_req
      - Cost_pow
      - Supply_req
      - Time
    sort:
      - property: Slot
        direction: ASC
    cardSize: 175
    image: note.pic
    imageAspectRatio: 0.3
    imageFit: contain
    columnWidth: 250
    columnSize:
      note.Time: 93

```
## Necron
```base
views:
  - type: table
    name: Necron
    filters:
      and:
        - file.tags.containsAll("unit", "necron", "vehicle")
    groupBy:
      property: from
      direction: ASC
    order:
      - file.name
      - Cost_dom
      - Supply_dom
      - Time
    sort:
      - property: Slot
        direction: ASC
    cardSize: 175
    image: note.pic
    imageAspectRatio: 0.3
    imageFit: contain
    columnWidth: 250
    columnSize:
      note.Time: 93

```
## Adeptus Mechanicus
```base
views:
  - type: table
    name: Adeptus Mechanicus
    filters:
      and:
        - file.tags.containsAll("unit", "AdMech", "vehicle")
    groupBy:
      property: from
      direction: ASC
    order:
      - file.name
      - Cost_req
      - Cost_pow
      - Supply_req
      - Time
    sort:
      - property: Slot
        direction: ASC
    cardSize: 175
    image: note.pic
    imageAspectRatio: 0.3
    imageFit: contain
    columnWidth: 250
    columnSize:
      file.name: 169
      note.Time: 93

```
## Spess 'muhreens
```base
views:
  - type: table
    name: Space Marines
    filters:
      and:
        - file.tags.containsAll("unit", "SM", "vehicle")
    groupBy:
      property: from
      direction: ASC
    order:
      - file.name
      - Cost_req
      - Cost_pow
      - Supply_req
      - Time
    sort:
      - property: Slot
        direction: ASC
    cardSize: 175
    image: note.pic
    imageAspectRatio: 0.3
    imageFit: contain
    columnWidth: 250
    columnSize:
      note.Time: 93

```

- - -

![[Structure.png]]
## Ork
```base
views:
  - type: table
    name: Orkz
    filters:
      and:
        - file.tags.containsAll("ork", "structure")
    order:
      - file.name
      - Cost_req
      - Cost_pow
      - Time
    sort:
      - property: Slot
        direction: ASC
    cardSize: 175
    image: note.pic
    imageAspectRatio: 0.3
    imageFit: contain
    columnWidth: 250
    columnSize:
      note.Time: 71

```
## Necron
```base
views:
  - type: table
    name: Necron
    filters:
      and:
        - file.tags.containsAll("necron", "structure")
    order:
      - file.name
      - Cost_dom
      - Time
    sort:
      - property: Slot
        direction: ASC
    cardSize: 175
    image: note.pic
    imageAspectRatio: 0.3
    imageFit: contain
    columnWidth: 250
    columnSize:
      note.Time: 93

```
## Adeptus Mechanicus
```base
views:
  - type: table
    name: Adeptus Mechanicus
    filters:
      and:
        - file.tags.containsAll("AdMech", "structure")
        - file.name != "Noosphere Network Strength"
    order:
      - file.name
      - Cost_req
      - Cost_pow
      - Time
    sort:
      - property: file.name
        direction: ASC
      - property: Time
        direction: DESC
      - property: Slot
        direction: ASC
    cardSize: 175
    image: note.pic
    imageAspectRatio: 0.3
    imageFit: contain
    columnWidth: 250
    columnSize:
      file.name: 169
      note.Time: 93

```
## Spess 'muhreens
```base
views:
  - type: table
    name: Space Marines
    filters:
      and:
        - file.tags.containsAll("SM", "structure")
    order:
      - file.name
      - Cost_req
      - Cost_pow
      - Time
    sort:
      - property: Slot
        direction: ASC
    cardSize: 175
    image: note.pic
    imageAspectRatio: 0.3
    imageFit: contain
    columnWidth: 250
    columnSize:
      note.Time: 93

```