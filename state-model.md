# Instructions:
1. A user can view a dashboard that displays a list of contacts. Each contact in the list should be displayed as their first and last name

2. A user can click a contact's name to view more details about that contact. The view should contain the contact's first and last name, as well as the contact's street and city

3. A user can create a contact via a form, accessed by clicking a "Create a contact" menu link. The form should create a contact with a first and last name, as well as a street and city. When submitted, the contact data should be sent to an API that saves it. The user should then be automatically navigated back to the contact list.

# State Model:
allContacts : will contain data of all contacts fetched by the API.

newContactData: will contain all new contact information submiited by the new contact form (firstName, lastName, street, city)


Components: App/Dashboard, ContactList, ContactListItem, ContactProfile, AddNewContact


