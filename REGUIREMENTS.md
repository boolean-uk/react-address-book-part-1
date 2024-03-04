Requirements:
    show all contacts
    show one contact
    create new contact

# stateModel

contact object:

    json Object:
    {
    "firstName": "Rick",
    "lastName": "Sanchez",
    "street": "Morty Lane",
    "city": "Jerryville"
    }

# componentTree

*App
    -ContactList (see the concacts, and go to detailsPage)
        for route: /contacts
        state: [contactList, setContactList]
        run fetch on contacts when rendering the page
        -ContactListItem

    -ViewContactsDetails  (view the specific details of a contact)
        for route: contacts/view/id
        contact is passed as prop from contactList from

    -CreateContactPage (create new contact, which will be added to list, 
    then navigate to contactList)
        for route: /create
        state: [newcontact, setNewContact]
        formstate: js object to submit a new contactObject