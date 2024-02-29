# Component Tree

This should be a simple diagram that details which React components you are going to create and where they exist in the hierarchy. Include any state that each component will be responsible for in this diagram.

# COMPONENT TREE GUIDELINES

1. Deciding a rough name for each component that is descriptive

- include if its a page
- maybe include the type of component (sidebar, navbar, footer)

2. Deciding roughly what the user should be able to do with that component

3. Deciding what state you need inside the component + what state must be passed via props

4. Deciding what route you will need for that component

5. Any specific actions or behaviours that cause navigation / reload or error display

App

MenuSidebar

- Press buttons/links to navigate the page
- Should always show

ContactListPage

- Shows all your current contacts and a button/link to ContactInfoPage
- This info is first and last-name
- Holds the state contacts
- This should be the "/contacts" route

Contact

- Holds the individual contact for displaying in ContactListPage
- Has an object from the contacts state

ContactInfoPage

- Shows more information about this.contact
- Route: "/contacts/:id"

NewContactPage

- Has a form that enables new contacts to be added
- Text fields in form:

1.  First Name
2.  Last Name
3.  City
4.  Street

- Route: "/new_contact"
- When added, back to "/contacts" when pressing submit button
