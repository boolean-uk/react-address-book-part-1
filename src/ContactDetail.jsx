import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function ContactDetail() {
    const [contactToDisplay, setContactToDisplay] = useState({})
    const contactToFind = useParams().id

    useEffect(() => {
        async function getContact() {
            const data = await fetch(`https://boolean-uk-api-server.fly.dev/MrStashy/contact/${contactToFind}`)
            const json = await data.json()
            setContactToDisplay(json)
        }
        getContact()
    }, [])

    if (Object.values(contactToDisplay).length === 0) {
        return <p>Loading...</p>
    }

    return (
        <ul>
            <li>{`${contactToDisplay.firstName} `}{`${contactToDisplay.lastName}`}</li>
            <li>{`${contactToDisplay.street} `} {`${contactToDisplay.city} `}</li>
        </ul>
    )
}