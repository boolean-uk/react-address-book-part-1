# State model for App 
```js
{
  // Information about contacts as fetched from API, will be passed to other components as props
  [contacts, setContacts] = useState([]) 
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
Should keep track of `contacts` to pass down to `ContactList`.
Should contain `ContactList`.
Path "/"

# State model for ContactList
Should contain a list of `ContactListItem` based on `contacts` passed in as props.

# State model of ContactListItem
Should contain information on a `contact` passed as prop from `ContactList`.
Information should be of form:
```js
  {
    firstName: string,
    lastName: string,
    street: string,
    city: string,
  }
```

# State model for ContactDetails
```js
{
  { contactId } = useParams(); // Get the ID of the user to display based on url
  // Should contain information on a contact based on contactId
  contact = {
    firstName: '',
    lastName: '',
    street: '',
    city: '',
  }
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

  [form, setForm] = useState(formStructure) // Keep track of updates made to the form
}
```
Path "/create"
