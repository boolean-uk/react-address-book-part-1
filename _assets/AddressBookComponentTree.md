A component tree (Required)
This should be a simple diagram that details which React components you are going to create and where they exist in the hierarchy. Include any state that each component will be responsible for in this diagram.

COMPONENT TREE GUIDELINES

1. Deciding a rough name for each component that is descriptive

- include if its a page
- maybe include the type of component (sidebar, navbar, footer)

2. Deciding roughly what the user should be able to do with that component

3. Deciding what state you need inside the component + what state must be passed via props

4. Deciding what route you will need for that component

5. Any specific actions or behaviours that cause navigation / reload or error display

ContactsListPage:

    state contactsInfo. uses first and last name of each contact.
    actions: look at contacts in list. click contact to be directed to ContactsDetailsPage for specific contact.
    route: for ContactListPage is ("/").

    all pages have a sidebar with navigation to main page. CreateNewContactForm link available only on ContactListPage.

    ContactsDetailsPage:
        receives contactinfo as props
        actions: look at contact details for a contact.
        route: for ContactsDetailsPage is ("/contacts/:id").
        page background colour is contacts favourite colour.
        contacts firstName, lastName, email, street, city and profilePicture is displayed

CreateNewContactForm:
actions: can createNew contact through a form.
route: for CreateNewContactForm is ("/contacts/createNew").
