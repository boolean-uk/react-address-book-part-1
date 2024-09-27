# Component Tree

## App

The root component managing overall state.

## Dashboard

Displays the main dashboard with contact list and details.

## ContactList

Renders the list of contacts.

## ContactItem

Renders each individual contact in the list.

## ContactDetails

Displays details of the selected contact.

## CreateContactForm

Form for creating a new contact.

```html
<App>
  <Dashboard contacts="{contacts}" />
  <ContactList contacts="{contacts}" />
  <ContactItem contact="{contact}" />
  <ContactDetails contact="{selectedContact}" />
  <CreateContactForm onSubmit="{handleSubmit}" />
</App>
```
