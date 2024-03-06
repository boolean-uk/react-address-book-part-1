- A state model **(Required)**
    - This could be a plain text description of an object with specific properties, a sample JSON object, a class diagram, a badly drawn illustration on the back of a napkin, etc.


# state model
- useState
  - 'contacts' stores a list of contacts

- classes
  - PersonProfile(props)
    - Displays information about a contact with json
    - Include: first name, last name, street, city
    - Example contact:
        {
            "firstName": "Rick",
            "lastName": "Sanchez",
            "street": "Morty Lane",
            "city": "Jerryville",
        }
 
- Dashboard
  - buttons
    - Contacts List
      - View all created contacts
      - In Contacts List a button to View More details about a contact
    - Add New Contact
      - Form
      - Add a new contact to the contacts list via a contact form
      - Sends data to API
      - Navigate back to Contact List
