import { useEffect } from 'react';
import './styles/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';
import Techstack from './Techstack';
import Projects from './Projects';
import ContactForm from './ContactForm';

function App() {

  useEffect(() => {
    AOS.init({});
  }, [])

  return (
  <>
    <section className='landing' id="landing" >
      <div className='name'>
        Adnan Radwan
      </div>
      <p>Creator | Frontend developer | Perfectionist </p>
    </section>

    <section className="about" id="about">
      <h1 data-aos="fade-in" data-aos-duration="2000">About Me</h1>
      <div className='p_img_container'>
        <div className='p_container'>
          <p data-aos="slide-right" data-aos-duration="1000">
            I'm <span> Adnan Radwan </span>a frontend developer based in Markham, Ontario. Throughout my life I have sampled various modes of creation, all of which felt <span> incomplete</span> and <span>foreign. </span> 
            Until I discovered <span>web development. </span>Through this discovery I have equipped myself with the ability to turn UI designs into functional frontend code. 
            This has led to the creation of many <a href="#projects">projects</a>, and will lead to the creation of many more.
          </p>
        </div>
          <div className='img' data-aos="slide-left" data-aos-duration="1000"></div>
      </div>
      <Techstack AOS={AOS}/>
    </section>

    <section className="projects" id="projects">
      <h1 data-aos="fade-in" data-aos-duration="2000">Projects</h1>
      <p className='projects_container_p' data-aos="fade-in" data-aos-duration="2000">
        Each project started with a <span> purpose,</span> was conceptualized with a <span>design,</span> and came to fruition with <span>code.</span>
      </p>
      <Projects AOS={AOS}/>
    </section>

    <section className="contact" id="contact" >
      <h1 data-aos="fade-in" data-aos-duration="2000">Contact Me</h1>
      <ContactForm AOS={AOS}/>
    </section>

    <Navbar AOS={AOS}/>
    </> 
  );
}

export default App;
