# a simple Component Tree

App
├── ApiEndpoint (State: contactData)
├── Dashboard (Props: contactData)
│   └── ContactList (Props: formattedContacts)
│       └── Contacts (Props: name, address)
├── LeftMenu
│   └── AddContact (State: newContact)
