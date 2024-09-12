# Model - Address Book

This file contains simple models of the address book program

# State Model

```json
[
  {
    "firstName": "Judson",
    "lastName": "Feest",
    "email": "Peter51@hotmail.com",
    "street": "Lavada Circle",
    "city": "Sadieview",
    "latitude": -70.3601,
    "longitude": 83.4719,
    "favouriteColour": "#b32e64",
    "profileImage": "https://www.gravatar.com/avatar/Peter51@hotmail.com?s=120&d=identicon",
    "id": 1
  },
```

# Component Tree

- App /
  - State: contacts, setContacts
- ContactList components/contacts
  - props(contacts)
- ViewContact components/contacts
  - props(contact)
- CreateContactForm components/contacts
  - State(formData)
- APIHandler /helpers
  - Functions for Get, Create, Delete
