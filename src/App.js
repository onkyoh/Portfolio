import { useState, useEffect } from 'react';
import './styles/styles.css';
import Navbar from './Navbar';
import Techstack from './Techstack';
import Projects from './Projects';
import Arrow from './Arrow';
import ContactStack from './ContactStack';
import Footer from './Footer';

function App() {

  const [open, setOpen] = useState("close")
  const [toggleNav, setToggleNav] = useState("toggleClose")

  const handleDropdown = () => {
    setOpen("close")
    setToggleNav("toggleClose")
  }
  

  return (
    <>
      <>
          <div onClick={handleDropdown}>
            <section className='landing' id="landing">
              <div className='name' >
                Adnan Radwan
              </div>
              <p >Creator | Frontend developer | Perfectionist </p>
              <Arrow />
            </section>

            <section className="about" id="about">
              <h1>About Me</h1>
              <div className='p_img_container'>
                  <p >
                    I'm <span> Adnan Radwan </span>a frontend developer based in Markham, Ontario. Throughout my life I have sampled various modes of creation, all of which felt <span> incomplete</span> and <span>foreign. </span> 
                    Until I discovered <span>web development. </span>Through this discovery I have equipped myself with the ability to turn UI designs into functional frontend code. 
                    This has led to the creation of many <a href="#projects">projects</a>, and will lead to the creation of many more.
                  </p>
                  <div className="img" ></div>
              </div>
              <Techstack/>
            </section>
            
            <section className="projects" id="projects" >
              <h1>Projects</h1>
              <p id="slogan">
                Each project started with a <span> purpose,</span> was conceptualized with a <span>design,</span> and came to fruition with <span>code.</span>
              </p>
              <Projects/>
            </section>

            <section className="contact" id="contact" >
              <div id="contact_container">
                <p id="email">adnanradwan_8@hotmail.com</p>
                <div>
                  <h1>Contact Me  </h1>
                  <p>Feel free to get in contact for whatever!</p>
                </div>
                <ContactStack/>
              </div>
            </section>

            <Footer />
          </div>

          <Navbar open={open} setOpen={setOpen} toggleNav={toggleNav} setToggleNav={setToggleNav}/>
        </> 
  </>
  );
}

export default App;
