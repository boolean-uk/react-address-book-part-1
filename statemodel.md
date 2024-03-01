# State model for App 
```js
{
  {
  contacts: [], // Information about contacts as fetched from API, will be passed to other components as props
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
# State model for Dashboard
Should contain `ContactList`.
Path "/"

# State model for ContactList
```js
{
  contacts: [], // List of contacts passed in as props
}
```
Should contain a list of `ContactListItem`.

# State model of ContactListItem
```js
  contact: {
    firstName: string,
    lastName: string,
    street: string,
    city: string,
  } // Information on a contact passed as prop from ContactList
```

# State model for ContactDetails
```js
{
  contactId // The ID of the user to display based on url (useParams)
  contact: {
    firstName: '',
    lastName: '',
    street: '',
    city: '',
  }, // Information on a contact based on contactId
}
```
Path "/contact/:id"

# State model for CreateContact
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
Path "/create"
