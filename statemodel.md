# State model for App 
```js
{
  [contacts, setContacts] = useState([]) // Information about contacts as fetched from API, will be passed to other components as props
  // Each contact in contacts should contain the following information:
  {
    firstName: string,
    lastName: string,
    street: string,
    city: string,
  }
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
