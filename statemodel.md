# State model for App 
```js
{
  [contacts, setContacts] = useState([]) // Information about contacts as fetched from API, will be passed to other components as props
}
```

# State model for ContactDetails
```js
{
  { contactId } = useParams(); // Get the ID of the user to display based on url
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
