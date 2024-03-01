# Diagram

![image](https://github.com/spectraldesign/react-address-book-part-1/assets/59234024/4c51330d-5769-45db-9bac-b74ccb909702)

# Structure
```js
<Router>
  <App contacts={contacts} setContacts={setContacts}>
    <Route path="/">
      <Dashboard contacts={contacts}>
        - <ContactList contacts={contacts}>
          - <ContactListItem contact={contact}>
    <Route path="/contact/:id">
      <ContactDetails contacts={contacts}/>
    </Route>
    <Route path="/create">
      <CreateContactForm setContacts={setContacts} form={form} setForm={setForm}>
    </Route>
  </App>
</Router>
```
