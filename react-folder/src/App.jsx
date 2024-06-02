
import React, { useState } from 'react'
import ContactList from './components/ContactList'
import ContactDetails from './components/ContactDetails'
import AddContactForm from './components/AddContactForm'
import './App.css'

const App = () => {
  const [contacts, setContacts] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [selectedContact, setSelectedContact] = useState(null); // New state

  const addContact = (contact) => {
    setContacts([...contacts, contact])
    setShowForm(false)
  }

  const viewContactDetails = (contact) => {
    setSelectedContact(contact)
  }

  const closeContactDetails = () => {
    setSelectedContact(null)
  }

  return (
    <div className="App">
      <h1> Menu </h1>
      <button onClick={() => setShowForm(true)}>Add New Contact</button>
      {showForm && <AddContactForm addContact={addContact} />}
      <ContactList contacts={contacts} viewContactDetails={viewContactDetails} />
      {selectedContact && <ContactDetails contact={selectedContact} onClose={closeContactDetails} />}
    </div>
  )
}

export default App
