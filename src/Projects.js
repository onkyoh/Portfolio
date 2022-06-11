import React from 'react'
import CalendarFS from '../src/projects/CalendarFS.png'
import TodoFS from '../src/projects/TodoFS.png'
import WeatherFS from '../src/projects/WeatherFS.png'


const Projects = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

  return (

    <div className='projects_container'>

        <div className='each_project'>
            <div className='description_container'>
                <h2>CalendarHub</h2>
                <p>A website where users can sign up, create updatable calendars, and share those calendars with their contacts. 
                    The utilization of Google Firebase allows for backend user data storage and website analytics.</p>
                <div className='button_group'>
                    <button onClick={()=> openInNewTab("https://calendarhub.netlify.app/")}><div className='fill_button'></div><p>Live Demo</p></button>
                    <button onClick={()=> openInNewTab("https://github.com/onkyoh/Group-Calendar")}><div className='fill_button'></div><p>View Code</p></button>
                </div>
            </div>

            <div className='img_container'>
                <img className='website_img' src={CalendarFS} alt="calendar_website"/>   
            </div>
        </div>

        
        
        <div className='each_project' id='weather_flex'>
           
            <div className='img_container'>
                <img className='website_img' src={WeatherFS} alt="weather_website"/>
            </div>

            <div className='description_container'>
                <h2>Messagesforweather</h2>
                <p className='description_p'>
                    Messagesforweather uses a weatherAPI and a geolocationAPI to allow users to search the current weather of any city, 
                    and recieve a message depending on the conditions and temperature.
                </p>
                <div className='button_group'>
                    <button onClick={()=> openInNewTab("https://www.messagesforweather.com/")}><div className='fill_button'></div><p>Live Demo</p></button>
                    <button onClick={()=> openInNewTab("https://github.com/onkyoh/Weather-Message")}><div className='fill_button'></div><p>View Code</p></button>
                </div>
            </div>
            
        </div>

        <div className='each_project'>   
            <div className='description_container'>
                <h2>Todolist</h2>
                <p className='description_p'>
                    This website is a simple react todolist which utilizes react bootstrap for styling. Users can add, complete, and delete todos.
                </p>
                <div className='button_group'>
                    <button onClick={()=> openInNewTab("https://react-bootstrap-todolist.netlify.app/")}><div className='fill_button'></div><p>Live Demo</p></button>
                    <button onClick={()=> openInNewTab("https://github.com/onkyoh/Todolist-Bootstrap")}><div className='fill_button'></div><p>View Code</p></button>
                </div>
            </div>
            <div className='img_container'>
                <img className='website_img' src={TodoFS} alt="todolist_website"/>
            </div>
       
        </div>
    </div>
  )
}

export default Projects