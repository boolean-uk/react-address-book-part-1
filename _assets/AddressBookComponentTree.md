A component tree (Required)
This should be a simple diagram that details which React components you are going to create and where they exist in the hierarchy. Include any state that each component will be responsible for in this diagram.

COMPONENT TREE GUIDELINES

1. Deciding a rough name for each component that is descriptive

- include if its a page
- maybe include the type of component (sidebar, navbar, footer)

2. Deciding roughly what the user should be able to do with that component

3. Deciding what state you need inside the component + what state must be passed via props

4. Deciding what route you will need for that component

5. Any specific actions or behaviours that cause navigation / reload or error display

App.jsx:
state contactInfoList with a setContactInfoList function.
its an array of objects
{
firstName: "",
lastName: "",
email: "",
street: "",
city: "",
favouriteColour: "",
profileImage: "",
id: null,
},

    UseEffect fetches the data once the page is loaded. saves it to state.

ContactsListPage:

    Props: contactsInfoList. uses first and last name of each contact.
    Actions: look at contacts in list. click contact to be directed to ContactsDetailsPage for specific contact.
    Route: for ContactListPage is ("/").

    All pages have a side-section with navigation to main page and create-new-contact page.

ContactsDetailsPage:

    Receives contactInfoList as props
    State: has a state for a singular contact called contactInfo. same structure as contactInfoList
    Actions: look at contact details for a contact.
    Route: for ContactsDetailsPage is ("/contacts/:id").

    Parses id from page url

    Has a useEffect that updates whenever the parsed id or the contactInfoList updates.
    The effect goes through the contactInfoList and finds and setts the contact that matches the parsed id.
    It renders the given information with two exceptions. the element containing the contact info is coloured to the provided favourite colour of the contact. Their profile image url is displayed as an actual image.

    So, the contacts first name, last name, email, street, city and profilePicture is displayed

CreateNewContactForm:

    Actions: can createNew contact through a form.
    Route: for CreateNewContactForm is ("/contacts/createNew").
    Takes in setContactInfoList and contactInfoList as props.
    It has a state for new contact (newContact ) it is a singular object
    {
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    email: "",
    favouriteColour: "",
    profileImage: "",
    }

        handleInputData:
        Receives input from the form and sets the given input to corresponding Key in the newContact object.

        handleSubmit:
        is called when user presses the submit button.
        Calls the MakePostRequestToAPI function.

        MakePostRequestToAPI:
        Constructs a postRequestOptions constant
        fetches the post function of the API. creates a new contact in the API.
        Uses the setContactInfoList function to set the new contact to the contacts list.
        It then calls navigate to redirect the user to the details-page of the newly created contact.
