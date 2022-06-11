import React from 'react'
import Html from '../src/icons/html.png'
import Css from '../src/icons/css.png'
import Javascript from '../src/icons/javascript.png'
import Typescript from '../src/icons/typescript.png'
import ReactIcon from '../src/icons/react.png'
import Bootstrap from '../src/icons/bootstrap.png'
import Sass from '../src/icons/sass.png'
import Firebase from '../src/icons/firebase.png'

const Techstack = () => {

  return (
    <div className='techstack_container'>
      <p >Technology I use:</p>
      <div>
        <ul>
          <li>HTML <img src={Html} alt="Html"/></li>
          <li>CSS <img src={Css} alt="Css"/></li>
          <li>JAVASCRIPT <img src={Javascript} alt="Javascript"/></li>
          <li>TYPESCRIPT <img src={Typescript} alt="Typescript"/></li>
        </ul>
        <ul>
          <li>REACT <img src={ReactIcon} alt="React"/></li>
          <li>BOOTSTRAP <img src={Bootstrap} alt="Bootstrap"/></li>
          <li>SASS <img src={Sass} alt="Sass"/></li>
          <li>FIREBASE <img src={Firebase} alt="Firebase"/></li>
        </ul>
      </div>
    </div>
  )
}

export default Techstack