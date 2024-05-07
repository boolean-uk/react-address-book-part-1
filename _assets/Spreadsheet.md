///
This is just a brainstorm, but i chose to leave it in here.
///


h2 - Menu, Contacts, Create Contact, person.firstname, person.lastname

Contacts list array GET
Add new contact form POST

Link on each contact to their personal profile. GET

Contact attributes:
First name
Last name
Street
City

ContactList.jsx
const [contactsList, setContactsList] = state([]);

CreateContact.jsx
const [firstname, setFirstName] = state('')
const [lastname, setlastname] = state('')
const [street, setstreet] = state('')
const [city, setcity] = street('')

App.jsx
Menu.jsx (is a <section>)
ContactList(is a <section>. The section changes depending on the menu click(props))
ContactListItem(Profile(props))

ContactList & contactlistitem in ContactComponent.jsx
Create New Contact separate component.

AddContact
