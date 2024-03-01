# States used in various components

## App

Constacts will be its own state, along with its associated setter, which will keep track of all contacts of the current user as a Array of contact objects.
Adding new contacts will first post the new contact to the backend, then refetch the entire contacts state to ensure client-server synchronicity.

## CreateContact

dataObject, along with its associated setter, will gather all form data in a single object so make the adding of new contacts easy. dataObject will also be used as the direct field values, ensuring each field is a controlled object. Each field in the form will have its own associated value in the dataObject, this will mirror the data available in the API to minimize processing on submit of the forms.

## ContactDetails

ContactDetails will contain its own state, contact and setContact, that keeps the data related to a specific individual on the contact list. This data will be fetched in the component, based on the :id param in the url, which is extracted and added to the fetch query.