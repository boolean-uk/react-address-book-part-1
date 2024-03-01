### STATE MODEL

```json
{
  "firstName": "Erick",
  "lastName": "Cummerata",
  "gender": "F2M",
  "email": "Waylon.Hand22@gmail.com",
  "jobTitle": "Principal Group Liaison",
  "street": "Skiles Station",
  "city": "Dylanville",
  "latitude": 40.4667,
  "longitude": -161.7692,
  "favouriteColour": "#c8eaaa",
  "profileImage": "https://www.gravatar.com/avatar/Waylon.Hand22@gmail.com?s=120&d=identicon",
  "id": 1
}
```

### COMPONENT TREE

- APP:
  - fetches the API data
  - ContactList, route: /
  - state:
    - contacts + setContacts
    - filteredContacts + setFilteredContacts
    - filter, setFilter
- Header
- ContactView, route: /contact/:id
  - state: contact, setContact
  - fetch for the relevant id, params
  - button delete:
    - success: delete contact
    - error: throw error message
  - link update: links to the ContactForm /update/:id route
- ContactForm, route: /create
  - formState: object to create new contact
  - button submit:
    - success: reset form, direct back to route /
    - error: show error message
- ContactForm, route: /update/:id
  - formState: object to update new contact
  - button submit:
    - success: reset form, direct back to route /
    - error: show error message
- Dashboard:
  - ContactList -> ContactListItem
  - props: contacts
