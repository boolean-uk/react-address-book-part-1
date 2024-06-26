import { Link } from "react-router-dom"

export default function ContactItem({ contact }) {
    return (
        <li className="flex flex-row justify-between">
            <p>{contact.firstName} {contact.lastName}</p>
            <Link to={`${contact.id}`}><button>View</button></Link>
        </li>
    )
}