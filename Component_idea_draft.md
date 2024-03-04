# React - Address book part 1

## App

The top-level parent component. This component will just mount essential top-level components, primarily the MenuList and the Route based components.
  
### MenuList

This component will handle direct page routing allowing the user to go directly to their contacts list or go directly to the create new contact form. The Menu list will persist for each screen.

### CreateContact

This is a component that contains a form, which allows the user to add a new contact to their address book.

### ContactList

This is a component that contains a unordered list of contacts, identified by their full name, each of which has an interactable button that routes to the ContactDetails view.

### ContactDetails

This is a component that displays detailed information about a specific contact.
