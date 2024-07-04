# State model for address book

1. A user can view a dashboard that displays a list of contacts.
    Each contact in the list should be displayed as their first and last name

2. A user can click a contact's name to view more details about that contact.
    The view should contain the contact's first and last name, as well as the contact's street and city
3. A user can create a contact via a form, accessed by clicking a "Create a contact" menu link.
    The form should create a contact with a first and last name, as well as a street and city.
    When submitted, the contact data should be sent to an API that saves it.
    The user should then be automatically navigated back to the contact list.


contacts : the state of the contacts list that fetch from the api

contactDetail: the state of the contact detail view 

formData: the state of contact form
    object data that users entered the form (firstName, lastName, street, city)


Component: Dashboard, ContactList, ContactItem ContactDetail, CreateContactForm











    

