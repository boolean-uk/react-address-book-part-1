A state model (Required)
This could be a plain text description of an object with specific properties, a sample JSON object, a class diagram, a badly drawn illustration on the back of a napkin, etc.

1. A user can view a dashboard that displays a list of contacts
   - Each contact in the list should be displayed as their first and last names
2. A user can click a contact's name to view more details about that contact
   - The view should contain the contact's first and last name, as well as the contact's street and city
3. A user can create a contact via a form, accessed by clicking a "Create a contact" menu link
   - The form should create a contact with a first and last name, as well as a street and city
   - When submitted, the contact data should be sent to an API that saves it
   - The user should then be automatically navigated back to the contact list

```Json
{
    "firstName": "firstName",
    "lastName": "lastName",
    "email": "email.test@email.test",
    "street": "test street",
    "city": "testcity",
    "favouriteColour": "#caddea",
    "profileImage": "image url",

  }

```

Create a contact info list that displays the first and last name of each contact in the list. Each contact has a link that will take the user to a page full of details about the contact. A user can also navigate to a page containing a Form for creating a new contact. When the information if filled in and the user submits the form. A new contact is created and added to the contact list.
