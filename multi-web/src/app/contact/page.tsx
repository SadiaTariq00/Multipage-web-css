import React from 'react'

export default function Contact() {
  return (
    <div>
      <section className='contact-form' style={{backgroundImage: "url(contact.jpg)"}}>
        <h2 className='fade-in'>CONTACT US</h2>
        <form>
        <input type="text"  placeholder="First name" required/>
          <input type="text"  placeholder="Last name" required/>
          <input type="email" placeholder="Enter Your Email" required/>
          <input type="text" placeholder=" Your PhoneNumber" required/>
          <textarea
          placeholder="Address" rows={2} required>
          </textarea>
       
       <textarea
        placeholder="Enter Your Messaage" rows={4} required>
       </textarea>
       <button type='submit'>SEND</button>
       
        </form>
      </section>
    </div>
  )
}
