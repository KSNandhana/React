import React, { useState } from 'react';
import './contactus.css';

const ContactUs = () => {
  const [data, setData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", data);
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <h1>Contact <span>Here</span></h1>
      <input type="text" name="name" onChange={handleChange} value={data.name} placeholder="Enter Name" required/>
      <input type="email" name="email" onChange={handleChange} value={data.email} placeholder="Enter the Email ID" required/>
      <input type="tel" name="phone" onChange={handleChange} value={data.phone} placeholder="+91" required/>
      <textarea name="message" onChange={handleChange} value={data.message} rows="10" placeholder="Type here..." required></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactUs;
