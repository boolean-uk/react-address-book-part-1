
# State Model

-contacts
Using a state array called contacts that keeps track of all contacts in the table.

-person
Using a state object called person that keeps track of the inputs in the addContact form. Adding this to the contacts list when a user hits submit.
values:
- firstName
- lastName
- street
- city

## An example of a JSON object that gets created 
## after a post request to the contact api

```JSON
{
    "firstName": "Thomas",
    "lastName": "Kvam",
    "street": "Heimdalsgate 23",
    "city": "Oslo"
}
```
