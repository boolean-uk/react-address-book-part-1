Dashboard:

contacts: [],
setContacts: Function,

firstName: string,
lastName: string,
street: string,
city: string,

ContactList:

contacts: []

ContactListItem:

contact: {
firstName: string,
lastName: string,
street: string,
city: string,

}

ContactDetails:

contactId
contact: {
firstName: string,
lastName: string,
street: string,
city: string,

}

CreateContact:

formStructure = {
    firstName: '',
    lastName: '',
    street: '',
    city: '',
}

form: formStructure,
setForm: Function
