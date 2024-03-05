# State model
```
Contact {
  id: int;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  gender: string;
  email: string;
  jobTitle: string;
  latitude: number;
  longitude: number;
  favouriteColour: string;
  profileImage: string;
}
```

### Component diagram things (so i dont loose it)
```
/g App
	contacts (state)

Desktop
ContactList
ContactListItem

App -contacts-> Desktop
Desktop -contacts-> ContactList
ContactList -contact-> ContactListItem


CreateContact
UpdateContact
Contact

App -contacts-> CreateContact
App -contacts, id (param)-> UpdateContact
App -contacts, id (param)-> Contact
```
