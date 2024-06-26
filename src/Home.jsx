import { useState } from "react"

export default function Home() {   
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        steet: '',
        city: ''
    })

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
        console.log(formData)
    }

    return (
        <form className="flex flex-col">
            <label htmlFor="firstName">First Name </label>
            <input onChange={handleChange} className="border" name="firstName" type="text" value={formData.firstName}></input>
            <label htmlFor="lastName">Last Name </label>
            <input onChange={handleChange} className="border" name="lastName" type="text"></input>
            <label htmlFor="street">Street </label>
            <input onChange={handleChange} className="border" name="street" type="text"></input>
            <label htmlFor="city">City </label>
            <input onChange={handleChange} className="border" name="city" type="text"></input>
            <button type="submit">Submit</button>
        </form>
    )
}