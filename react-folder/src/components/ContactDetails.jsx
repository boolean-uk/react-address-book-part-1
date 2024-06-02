// src/ContactDetails.js
import React from 'react';

const ContactDetails = ({ contact, onClose }) => {
  return (
    <div>
      <h2>Contact Details</h2>
      <button onClick={onClose}>Close</button>
      <p><strong>Name:</strong> {contact.firstName} {contact.lastName}</p>
      <p><strong>Street:</strong> {contact.street}</p>
      <p><strong>City:</strong> {contact.city}</p>
      {/*  Biodun remember you are fetching from API!!! you have to figure it out */}
    </div>
  )
}

export default ContactDetails;
