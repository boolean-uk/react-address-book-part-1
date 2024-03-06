This is a description of what .jsx files i believe i need.

This: '>' Helps indicate the hierarchy
-------------------------------------------------------------------------------------------
main.jsx
App.jsx

Components folder:
>DeleteContact.jsx
>CreateContact.jsx
>UpdateContact.jsx
>ViewContact.jsx
>ContactList.jsx
>ListComponent folder: 
>>ContactListItem.jsx

Jpg for illustration: ComponentTree.jpg



---------------------------------------
App.jsx is wrapped in a BrowserRouter inside main.jsx

App.jsx contains a sidebar with <Links> to "Contact List" and "Add Contact".
 It also has several <Routes> to <ContactListItem>, <AddContact>, <EditContact> and <ViewContact>.

In the <ViewContact>, the option to <DeleteContact> should be an onClick-event <Button>.

In the Contactlist.jsx, useEffect() is used to fetch data from the API-URL. It then creates a list of <ContactListItem> with a .map function.

