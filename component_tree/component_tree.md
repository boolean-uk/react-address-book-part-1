"/": means that the righthand and lefthand components are conditionally rendered and replace eachother


# App.jsx
state: contactList
state: selectedContact
state: highestId

SideBar.jsx     |     (ContactList.jsx     /     ViewContact.jsx     /     CreateContactForm.jsx     /     UpdateContactForm.jsx)


  ## SideBar.jsx
  The sidebar should feature the ability to select different options 

  Option.jsx

  ## ContactList.jsx
  This component should map each contact in the contactList to a ContactItem component
  
  ContactItem.jsx

  ### ContactItem.jsx

  ## ViewContact.jsx
  displays contact information without allowing editing

  ## CreateContactForm.jsx
  A form that submits a new contact

  ## UpdateContactForm.jsx
  A form that updates an existing contact