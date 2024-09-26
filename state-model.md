
## Requirements

- A user can view a dashboard that displays a list of contacts: Each contact in the list should be displayed as their first and last names
- A user can click a contact's name to view more details about that contact: The view should contain the contact's first and last name, as well as the contact's street and city
- A user can create a contact via a form, accessed by clicking a "Create a contact" menu link: The form should create a contact with a first and last name, as well as a street and city
- When submitted, the contact data should be sent to an API that saves it: The user should then be automatically navigated back to the contact list


## State Model

State: Dashboard
Description: Initial state where the user can view a list of contacts

Transitions:
1. View Contact Details
2. Create Contact

State: View Contact Details
Description: Displaying detailed information about a specific contact

Transitions:
1. Return to Dashboard

State: Create Contact Form
Description: Form to add a new contact

Transitions:
1. Submit Contact Details

State: Submitting Contact Details
Description: Contact details are being sent to the API for saving

Transitions:
1. Contact Details Saved
2. Error in Saving Contact

State: Contact Details Saved
Description: Confirmation that the contact details have been successfully saved

Transitions:
1. Return to Dashboard

State: Error in Saving Contact
Description: Indication that there was an issue while saving the contact details

Transitions:
1. Return to Create Contact Form


<App>
├── <Dashboard>
│   ├── <ContactList>
│   │   ├── <ContactItem>
│   │   │   ├── Displays First and Last Name
│   │   │   ├── onClick -> View Contact Details
│   │   │   └── ...
│   │   └── ...
│   └── ...
├── <ContactDetails>
│   ├── Displays First and Last Name, Street, and City
│   └── onClick -> Return to Dashboard
└── <CreateContactForm>
    ├── Form Inputs: First Name, Last Name, Street, City
    │   ├── onSubmit -> Submit Contact Details
    │   └── ...
    └── ...
