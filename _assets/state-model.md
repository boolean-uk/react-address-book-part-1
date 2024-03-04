State Model for App
contacts: An array containing contact objects fetched from the API.
setContacts: A function to update the contacts state.

{
  contacts: [], // Array of contact objects fetched from the API
  setContacts: Function // Function to update the contacts state
  handleDeleteContact: Function, // Function to handle contact deletion
  handleUpdateContact: Function // Function to handle contact update
}
State Model for CreateContact
form: An object representing the form fields for creating a contact.
firstName: The first name of the contact.
lastName: The last name of the contact.
street: The street address of the contact.
city: The city of the contact.

{
  form: {
    firstName: '',
    lastName: '',
    street: '',
    city: ''
  },
  setForm: Function // Function to update the form state
}
State Model for ContactList
contacts: An array containing contact objects passed as props.

{
  contacts: [] // List of contact objects passed as props
  onDelete: Function // Function to handle contact deletion

}
State Model for ContactListItem
contact: An object representing a single contact.

{
  contact: {
    firstName: '',
    lastName: '',
    street: '',
    city: ''
  } // Information on a contact passed as prop from ContactList
    onDelete: Function // Function to handle contact deletion

}
State Model for ContactDetails
contact: An object representing the details of a single contact fetched from the API.
id: The ID of the contact fetched from the URL params.

{
  contactId: '', // The ID of the user to display based on URL params
  contact: {
    firstName: '',
    lastName: '',
    street: '',
    city: ''
  } // Information on a contact fetched from API based on contactId
    handleUpdateContact: Function // Function to handle contact update
}