### STATE MODEL

```json
{
  "firstName": "Wendell",
  "lastName": "Hayes",
  "street": "Dave Manor",
  "city": "North Waldo",
  "latitude": 85.0232,
  "longitude": 148.3083,
  "id": 1
}
```

### COMPONENT TREE

- APP:
  - ContactList, route: /
  - state: contactsList + setContactsList
- ViewProfile, route: /contact/:id
  - state: contact, setContact
  - fetch for the relevant id, params
- CreateContactPage, route: /create
  - formState: object to create new contact (exclude coordinates)
  - submitted: boolean flag for ui control:
    - success: reset form, direct back to route /
    - error: show error message
