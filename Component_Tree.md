App
├── Header
│ └── Navigation
│ ├── Home
│ ├── About(optional)
│ └── Contact
├── ContactList
│ ├── ContactItem (displays first and last names)
│ └── ContactDetails (displays first name, last name, street, and city)
├── CreateContactForm
└── Footer

User Interaction:
Users can view a list of contacts in the ContactList.
Clicking a contact’s name will display more details in the ContactDetails.
Users can create a new contact using the CreateContactForm.
API Integration:
When the user submits the CreateContactForm, the contact data should be sent to the API endpoint /username/contact via a POST request for saving.
To retrieve all contacts, make a GET request to /username/contact.
To delete all contact data, use a DELETE request to /username/contact.
To find a contact by ID, make a GET request to /username/contact/{contactId}.
To update an existing contact, use a PUT request to /username/contact/{contactId}.
To delete a specific contact, make a DELETE request to /username/contact/{contactId}
