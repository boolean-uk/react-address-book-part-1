- state model

```json
{
  "firstName": "",
  "lastName": "",
  "city": "",
  "street": "",
  "gender": "",
  "email": ""
}
```

- component tree

- App():

  - Navbar
    action: Links -> navigate to components

  - Dashboard
    state: contactsList, setContactsList
    action: handleCreateContactSubmit

    - ContactList
    - ContactListItem

    action: fetch contacts on (re)render

  - DetailedContactViewPage
    state: perosn, setPerson

  - CreateNewContactFormPage
    action: post -> Dashboard action prop
