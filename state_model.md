State Model:

App
|-- contacts: Array
|   |-- contact: Object
|   |   |-- id: unique number
|   |   |-- firstName: string
|   |   |-- lastName: string
|   |   |-- street: string
|   |   |-- city: string
|   |   |-- latitude: number
|   |   |-- longitude: number
|   |   |-- favouriteColour: string
|   |   |-- profileImage: string_url
|
|-- dataFetched: boolean
|-- Routes: Route
    |-- Dashboard /contacts-list
    |   |-- contacts
    |   |-- setContacts
    |   |-- setDataFetched
    |   |-- ContactsList
    |       |-- contacts
    |       |-- setContacts
    |       |-- setDataFetched
    |       |-- ContactsListItem
    |           |-- contact
    |
    |-- PersonProfile /view/:id
    |   |-- contact
    |   |-- setContact
    |   |-- contacts
    |
    |-- CreateContact /create-contact
    |   |-- setDataFetched
    |   |-- navigate
    |   |-- formData: useState


