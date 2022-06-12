import React, {useState} from 'react'

const Navbar = ({AOS, open, setOpen, toggleNav, setToggleNav}) => {


  const handleDropdown = () => {
    if (open === 'open') {
      setOpen('close')
      setToggleNav("toggleClose") 
    } else {
      setOpen('open')
      setToggleNav("toggleOpen") 
    }
  }

  return (
    <div className='navbar'  data-aos="slide-down" data-aos-duration="1000">
      <ul className={open}>
          <a href='#landing'>Landing</a>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
      </ul>
      <div className='drop_sign' >
        <div onClick={handleDropdown} className={toggleNav}></div>
      </div>
    </div>
  )
}

export default Navbar