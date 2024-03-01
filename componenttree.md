# Diagram

![image](https://github.com/spectraldesign/react-address-book-part-1/assets/59234024/4c51330d-5769-45db-9bac-b74ccb909702)

# Structure
```js
<Router>
  <App>
    <Route path="/">
      <Dashboard contacts={contacts} setContacts={setContacts}>
        - <ContactList contacts={contacts}>
          - <ContactListItem contact={contact}>
    <Route path="/contact/:id">
      <ContactDetails />
    </Route>
    <Route path="/create">
      <CreateContactForm form={form} setForm={setForm}>
    </Route>
  </App>
</Router>
```
