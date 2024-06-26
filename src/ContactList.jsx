import { useEffect, useState } from "react";
import ContactItem from "./ContactItem";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetch(
        "https://boolean-uk-api-server.fly.dev/MrStashy/contact/"
      );
      const json = await data.json();
      setContacts(json);
    }

    getData();
  }, []);


  if (contacts.length === 0) {
    return <p>Loading...</p>
  }

  return (
    <ul>
      {contacts.map((contact) => {
          return <ContactItem key={contact.id} contact={contact}/>
        })}
    </ul>
  );
}
