/*
//Testing for other components when the API link is not working

import React, { useState } from 'react'
import ContactList from './components/ContactList'
import ContactDetails from './components/ContactDetails'
import AddContactForm from './components/AddContactForm'
import './App.css'

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', street: '123 Main St', city: 'Anytown' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', street: '456 Oak St', city: 'Sometown' }, 
  ]) //I could create this as a Json file
  const [selectedView, setSelectedView] = useState('list');
  const [selectedContact, setSelectedContact] = useState(null);

  const addContact = (contact) => {
    contact.id = contacts.length + 1; // Add an ID to the new contact
    setContacts([...contacts, contact])
    setSelectedView('list')
  };

  const viewContactDetails = (contactId) => {
    const contact = contacts.find(c => c.id === contactId)
    setSelectedContact(contact)
  }

  const closeContactDetails = () => {
    setSelectedContact(null)
  }

  return (
    <div className="App">
      <h1>Menu</h1>
      <button onClick={() => setSelectedView('list')}>Contacts List</button>
      <button onClick={() => setSelectedView('add')}>Add New Contact</button>

      {selectedView === 'add' && <AddContactForm addContact={addContact} />}
      {selectedView === 'list' && (
        <>
          <ContactList contacts={contacts} viewContactDetails={viewContactDetails} />
          {selectedContact && <ContactDetails contact={selectedContact} onClose={closeContactDetails} />}
        </>
      )}
    </div>
  )
}

export default App
*/


/*
import React, { useState, useEffect } from 'react'
import ContactList from './components/ContactList'
import ContactDetails from './components/ContactDetails'
import AddContactForm from './components/AddContactForm'
import './App.css'

const App = () => {
  const [contacts, setContacts] = useState([])
  const [selectedView, setSelectedView] = useState('list')
  const [selectedContact, setSelectedContact] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      const response = await fetch('https://boolean-uk-api-server.fly.dev/contacts')
      if (!response.ok) {
        throw new Error('Link error?')
      }
      const data = await response.json()
      setContacts(data)
    } catch (error) {
      console.error('Error fetching contacts:', error)
      setError('Error fetching contacts. Please try again later.')
    }
  }

  const addContact = async (contact) => {
    try {
      const response = await fetch('https://boolean-uk-api-server.fly.dev/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const newContact = await response.json()
      setContacts([...contacts, newContact])
      setSelectedView('list')
    } catch (error) {
      console.error('Error adding contact:', error)
      setError('Error adding contact. Please try again later.')
    }
  }

  const viewContactDetails = async (contactId) => {
    try {
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/contacts/${contactId}`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setSelectedContact(data)
    } catch (error) {
      console.error('Error fetching contact details:', error)
      setError('Error fetching contact details. Please try again later.')
    }
  }

  const closeContactDetails = () => {
    setSelectedContact(null)
  }

  return (
    <div className="App">
      <h1>Menu</h1>
      <button onClick={() => setSelectedView('list')}>Contacts List</button>
      <button onClick={() => setSelectedView('add')}>Add New Contact</button>

      {selectedView === 'add' && <AddContactForm addContact={addContact} />}
      {selectedView === 'list' && (
        <>
          <ContactList contacts={contacts} viewContactDetails={viewContactDetails} />
          {selectedContact && <ContactDetails contact={selectedContact} onClose={closeContactDetails} />}
        </>
      )}

      {error && <p className="error-message">{error}</p>}
    </div>
  )
}

export default App

*/
