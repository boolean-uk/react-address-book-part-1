# Plan for React address book

## state model:

-contact = {
"firstName": "str",
"lastName": "str",
"street": "str",
"city": "str",
"id": INT
}

-contactList = [{contact}, {contact}, ...]

## component tree

- App
  - uses state contactList 
  - ContactDashboard ("/contactdashboard")
    - uses contactList state as prop from app to display all contacts
  - ContactDetails ("/contactdetails/{id}")
    - uses a contact object passed from contact dashboard
    - displays first, lastname and street and city
  - CreateContact ("/createcontact")
    - uses state contact object to structure required data to create a new contact. Passed ContactList state as prop from App. On form submission updates contactList with new contact as well as update api. Then navigate user to ContactDashboard
  - NavBar
    - simple navbar with links to ContactDashboard and CreateContact 
