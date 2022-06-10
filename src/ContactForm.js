import React, {useState} from 'react'

const ContactForm = ({AOS}) => {

    const [senderName, setSenderName] = useState("")
    const [senderBody, setSenderBody] = useState("")

    const handleName = (e) => {
        setSenderName(e.target.value)
    }
    const handleText = (e) => {
        setSenderBody(e.target.value)
    }

  return (

    <form data-aos="slide-up" data-aos-duration="1500">
        <input type="text" id="name" placeholder='Name' onChange={(e) => handleName(e)}/>
        <textarea placeholder='Your message' onChange={(e) => handleText(e)}/>
        <button>Submit</button>
    </form>
  )
}

export default ContactForm