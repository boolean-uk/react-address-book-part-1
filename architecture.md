## Example JSON response
```json
[
  {
    "firstName": "Luz",
    "lastName": "Blanda",
    "gender": "Hermaphrodite",
    "email": "Dawson.Anderson@hotmail.com",
    "jobTitle": "Human Brand Executive",
    "street": "Selmer Throughway",
    "city": "Joyceburgh",
    "latitude": -8.0786,
    "longitude": 38.1234,
    "favouriteColour": "#8ba80f",
    "profileImage": "https://www.gravatar.com/avatar/Dawson.Anderson@hotmail.com?s=120&d=identicon",
    "id": 1
  },
  {
    "firstName": "Kade",
    "lastName": "Pacocha",
    "gender": "Cisgender female",
    "email": "Barton49@hotmail.com",
    "jobTitle": "Future Applications Liaison",
    "street": "Sauer Junction",
    "city": "New Cydney",
    "latitude": -21.5039,
    "longitude": -28.2356,
    "favouriteColour": "#d85ec3",
    "profileImage": "https://www.gravatar.com/avatar/Barton49@hotmail.com?s=120&d=identicon",
    "id": 2
  },
]
```

## Component tree
```
graph TD
    A[App] --> B[LeftMenu]

    B --> C[ContactList]
    C --> D[ContactListItem]
    C --> E[ContactDetails]

    B --> F[CreateContact]

    %% State responsibilities
    A -- contacts --> C
    B -- contacts --> E
    A -- selectedContact --> E
```
