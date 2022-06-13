import React from 'react'
import Email from '../src/icons/email.png'
import Github from '../src/icons/github.png'
import Linkedin from '../src/icons/linkedin.png'

const ContactStack = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

  return (
    <ul>
        <a href="mailto:adnanradwan_8@hotmail.com"><img src={Email} alt="Email"/></a>
        <li><img src={Github} alt="Github" onClick={()=> openInNewTab("https://github.com/onkyoh")}/></li>
        <li><img src={Linkedin} alt="LinkedIn" onClick={()=> openInNewTab("https://www.linkedin.com/in/adnan-radwan-0505aa241")}/></li>
    </ul>
  )
}

export default ContactStack