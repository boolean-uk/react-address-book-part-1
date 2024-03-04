# States used in various components

## App

Constacts will be its own state, along with its associated setter, which will keep track of all contacts of the current user as a Array of contact objects.
Adding new contacts will first post the new contact to the backend, then refetch the entire contacts state to ensure client-server synchronicity.

## CreateContact

dataObject, along with its associated setter, will gather all form data in a single object so make the adding of new contacts easy. dataObject will also be used as the direct field values, ensuring each field is a controlled object. Each field in the form will have its own associated value in the dataObject, this will mirror the data available in the API to minimize processing on submit of the forms.

To allow for editting of previous contacts within the same component a fetching (by ID) method must gather the id (if it exists) from the url, using useParams.

## ContactList

The contactList component will contain a state that is either undefined or a contact object. This state is passed to the ConfirmDeleteAction, acting as a modal confirmation that the user wishes to delete the contact.

In order to search/filter the contacts a searchQuery state is also needed. This state will both control and be set by a input field, and when rendering the ContactList the provided contacts props will be filtered before mapping into ContactCards.

## ContactDetails

ContactDetails will contain its own state, contact and setContact, that keeps the data related to a specific individual on the contact list. This data will be fetched in the component, based on the :id param in the url, which is extracted and added to the fetch query.

Similar to the [contactList](#contactlist) component, a contact state will also exist in the ContactDetails, which will be defined or undefined which triggers the ConfirmDeleteAction.
