import React from 'react'

const ContactList = ({ contacts, viewContactDetails }) => {
  return (
    <div>
      <h2>Contact</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index} onClick={() => viewContactDetails(contact)}>
            {contact.firstName} {contact.lastName}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactList;
