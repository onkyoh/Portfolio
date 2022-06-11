import { useEffect } from 'react';
import './styles/styles.css';
import Navbar from './Navbar';
import Techstack from './Techstack';
import Projects from './Projects';
import ContactForm from './ContactForm';

function App() {


  return (
  <>
    <section className='landing' id="landing" >
      <div className='name'>
        Adnan Radwan
      </div>
      <p >Creator | Frontend developer | Perfectionist </p>
    </section>

    <section className="about" id="about">
      <h1>About Me</h1>
      <div className='p_img_container'>
          <p>
            I'm <span> Adnan Radwan </span>a frontend developer based in Markham, Ontario. Throughout my life I have sampled various modes of creation, all of which felt <span> incomplete</span> and <span>foreign. </span> 
            Until I discovered <span>web development. </span>Through this discovery I have equipped myself with the ability to turn UI designs into functional frontend code. 
            This has led to the creation of many <a href="#projects">projects</a>, and will lead to the creation of many more.
          </p>
          <div className="img"></div>
      </div>
      <Techstack/>
    </section>
    
    <section className="projects" id="projects">
      <h1>Projects</h1>
      <p id="slogan">
        Each project started with a <span> purpose,</span> was conceptualized with a <span>design,</span> and came to fruition with <span>code.</span>
      </p>
      <Projects/>
    </section>

    <section className="contact" id="contact" >
      <h1>Contact Me</h1>
      <ContactForm/>
    </section>

    <Navbar/>
    </> 
  );
}

export default App;
