# States used in various components

## App

The root component of the address book, rendering both the menuList and another component dependant on the url routing. This component is also the primary data handler, dealing with GET, PUT, and POST requests to the API.

Constacts will be its own state, along with its associated setter, which will keep track of all contacts of the current user as a Array of contact objects.
Adding new contacts or editing existing ones will first post the new/modified contact to the backend, then refetch the entire contacts state to ensure client-server synchronicity.

## CreateContact

A form component, allowing for user input to generate a new contact in the database.

dataObject, along with its associated setter, will gather all form data in a single object so make the adding of new contacts easy. dataObject will also be used as the direct field values, ensuring each field is a controlled object. Each field in the form will have its own associated value in the dataObject, this will mirror the data available in the API to minimize processing on submit of the forms.

To allow for editting of previous contacts within the same component a fetching (by ID) method must gather the id (if it exists) from the url, using useParams.

## ContactList

A list of the contacts that the App.jsx retrieved from the API. These contacts are filtered and mapped into ContactCards.

The contactList component will contain a state that is either undefined or a contact object. This state is passed to the ConfirmDeleteAction, acting as a modal confirmation that the user wishes to delete the contact.

In order to search/filter the contacts a searchQuery state is also needed. This state will both control and be set by a input field, and when rendering the ContactList the provided contacts props will be filtered before mapping into ContactCards.

## ContactCard

Small component that display the most relevant information about the provided contact, used to populate the ContactList. Each contactCard will route to a specific url based on its contact id when clicked.

## ContactDetails

Detailed display of all contact informating recorded for the provided contact. Displaying both personal information and location information, location provided both as text and with an embedded map. The component also contain buttons to edit or delete the contact information.

ContactDetails will contain its own state, contact and setContact, that keeps the data related to a specific individual on the contact list. This data will be fetched in the component, based on the :id param in the url, which is extracted and added to the fetch query.

Similar to the [contactList](#contactlist) component, a contact state will also exist in the ContactDetails, which will be defined or undefined which triggers the ConfirmDeleteAction.
