# Submission

## State Model
```
[
    {
        id: 1,
        firstname: "First Name",
        lastname: "Last Name",
        street: "Street 1",
        city: "City 1"
    }
]
```

## Component tree
```mermaid
flowchart TD
    A[App] --> B(Pages)
    B --> C[Dashboard]
    B --> D[ContactView]
    C --> E(ContactList)
    C --> F(ContactListItem)
    D --> G(Create)
    D --> H(View)
```