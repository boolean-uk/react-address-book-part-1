# State Model:

# Contact List:

do: fetch contact list from api and put into state.
then: display stored contact list.

when: user clicks contact,
then: navigate to contact page.


# Contact Detail Page:

do: fetch contact detail from api and put into state.
then: display contact information.

 
# New Contact Page:

do: show form for new contact.

when: user fills in form and submits.
then: gather form values and send to api.
then: navigate to contact list page.

example of form data:

```
{
  firstName:"Kyle" , 
  lastName:"Vann" ,
  street:"Compton" ,
  city:"Ice Cube" ,
}
```