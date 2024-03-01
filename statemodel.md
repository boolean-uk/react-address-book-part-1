# State model for App
Should render `ContactList`, `ContactDetails`, `CreateContact` based on route.

# State model for Dashboard 
Path "/"
Should render `ContactList`.
```js
{
  {
  contacts: [], // Information about contacts as fetched from API
  setContacts: Function, // Function to update the contacts state
  }
  // Each contact in contacts should contain the following information:
  {
    firstName: string,
    lastName: string,
    street: string,
    city: string,
  }
}
```
# State model for ContactList
Should render a list of `ContactListItem`.
```js
{
  contacts: [], // List of contacts passed in as props
}
```

# State model of ContactListItem
Should render information about a contact.
```js
  contact: {
    firstName: string,
    lastName: string,
    street: string,
    city: string,
  } // Information on a contact passed as prop from ContactList
```

# State model for ContactDetails
Path "/contact/:id"
Should render information on a specific contact.
```js
{
  contactId // The ID of the user to display based on url (useParams)
  contact: {
    firstName: '',
    lastName: '',
    street: '',
    city: '',
  }, // Information on a contact fetched from API based on contactId
}
```

# State model for CreateContact
Path "/create"
Should render a form for creating a contact.
```js
{
  formStructure = {
    firstName: '',
    lastName: '',
    street: '',
    city: '',
  } // The structure of the form, initialized as empty.

  form: formStructure, // Keep track of updates made to the form, initialized as formStructure
  setForm: Function, // Function to update the form state
}
```

