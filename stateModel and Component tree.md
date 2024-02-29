# StateModel

### Received Data

```json
{
  "firstName": "Filiberto",
  "lastName": "Goyette",
  "gender": "Cisgender",
  "email": "Ryan.Haley41@gmail.com",
  "jobTitle": "National Research Architect",
  "street": "Lake Avenue",
  "city": "Macejkovictown",
  "latitude": 65.225,
  "longitude": -88.731,
  "favouriteColour": "#c20c47",
  "profileImage": "https://www.gravatar.com/avatar/Ryan.Haley41@gmail.com?s=120&d=identicon",
  "id": 1
}
```

### Data at top of app

_List of contacts_

```json
"contacts": []
```

_which conctains_

**contact**

```json
    "id": 1
    "firstName": "Filiberto",
    "lastName": "Goyette",
    "street": "Lake Avenue",
    "city": "Macejkovictown",

```

## Component tree

- \<App>

_appState [contacts, setContacts]_

- \<NavigationMenu />

- \<Routes>

  - \<route path="/Contacts" element=\<contactsList> >

  - \<route path="/Contacts/:id" element=\<SingleContact id=id conctacts=contacts >>

  - \<route path="/AddContact" element=\<AddContacts setUser=setUser>>

---

_Element_ **contactsList**

`<contactsList>` => displays all users

---

_Element_ **SingleContact**

`<SingleContact id=id conctacts=contacts >` => takes all contacts and an id of the person that is going to be displayed

---

_Element_ **AddContact**

`<AddContact setUser=setUser>` => allows the user to input info for adding a contact

    - states[form, setForm]
    form =
     {
        firstName
        LastName
        Street
        City
    }
