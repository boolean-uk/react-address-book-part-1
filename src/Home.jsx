import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    const post = await fetch(
      "https://boolean-uk-api-server.fly.dev/MrStashy/contact/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const responseBody = await post.json()
    console.log(responseBody)

    setFormData({
      firstName: "",
      lastName: "",
      street: "",
      city: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="firstName">First Name </label>
      <input
        onChange={handleChange}
        className="border"
        name="firstName"
        type="text"
        value={formData.firstName}
      ></input>
      <label htmlFor="lastName">Last Name </label>
      <input
        onChange={handleChange}
        className="border"
        name="lastName"
        type="text"
        value={formData.lastName}
      ></input>
      <label htmlFor="street">Street </label>
      <input
        onChange={handleChange}
        className="border"
        name="street"
        type="text"
        value={formData.street}
      ></input>
      <label htmlFor="city">City </label>
      <input
        onChange={handleChange}
        className="border"
        name="city"
        type="text"
        value={formData.city}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}
