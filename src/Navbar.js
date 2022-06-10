import React, {useState} from 'react'

const Navbar = ({AOS}) => {

  const [open, setOpen] = useState("close")

  const handleDropdown = () => {
    if (open === 'open') {
      setOpen('close') 
    } else {
      setOpen('open')
    }
  }

  return (
    <div className='navbar' data-aos="slide-down" data-aos-duration="1000">
      <ul className={open}>
          <a href='#landing'>Landing</a>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
      </ul>
      <div className='drop_sign' >
        {open !== "open" ? 
        <div onClick={handleDropdown}>=</div>
          :
        <div onClick={handleDropdown}>^</div>
        }
      </div>
    </div>
  )
}

export default Navbar