# Component tree
## App
Contains state for all contacts. passes all contacts to Dashboard. includes header with a link back to dashboard

## Dashboard
Displays all contacts, has links to the ContactProfile under each contact, and a button that opens CreateContact

## ContactProfile
Takes a single contact as prop, displays info from that contact,

## CreateContact
A form that does the following:
create a contact with a first and last name, as well as a street and city
When submitted, the contact data should be sent to an API that saves it
automatically navigated back to the contact list
