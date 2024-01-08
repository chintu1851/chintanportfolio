import React from 'react'
import Header from './Header'
import { useEffect } from 'react';
const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header></Header>
      <h1 className='skillsh1'>Project</h1>
      <div className='mainproject'>
        <div className='projectsection'>
          <img src='reactjs.png' alt=''></img>
          <h3>Canadian Kaleidoscope</h3>
          <a href='https://github.com/chintu1851/Canadian_Kaleidoscope_ReactJS' target="_blank" rel="noreferrer"><button>View On Github</button></a>
        </div>
        <div className='projectsection'>
          <img src='reactjs.png' alt=''></img>
          <h3>To-Do List</h3>
          <a href='https://github.com/chintu1851/To-Do-List' target="_blank" rel="noreferrer"><button>View On Github</button></a>
        </div>
        <div className='projectsection'>
          <img src='swift.jpeg' alt=''></img>
          <h3>Tourist Activities</h3>
          <a href='https://github.com/chintu1851/Tourist_Activity_IOS' target="_blank" rel="noreferrer"><button>View On Github</button></a>
        </div>
        <div className='projectsection'>
          <img src='swift.jpeg' alt=''></img>
          <h3>Repairmate - Garage Booking</h3>
          <a href='https://github.com/chintu1851/Repairmate' target="_blank" rel="noreferrer"><button>View On Github</button></a>
        </div>
        <div className='projectsection'>
          <img src='swift.jpeg' alt=''></img>
          <h3>Parking Booking App</h3>
          <a href='https://github.com/chintu1851/Parking_IOS' target="_blank" rel="noreferrer"><button>View On Github</button></a>
        </div>
        <div className='projectsection'>
          <img src='html.png' alt=''></img>
          <h3>The New Yorker(Responsive)</h3>
          <a href='https://github.com/chintu1851/responsive-design_newyorker' target="_blank" rel="noreferrer"> <button>View On Github</button></a>
        </div>
        <div className='projectsection'>
          <img src='reactjs.png' alt=''></img>
          <h3>Movie Ticket Booking (React Native)</h3>
          <a href='https://github.com/chintu1851/Ticket_Booking-_ReactNative' target="_blank" rel="noreferrer"><button>View On Github</button></a>
        </div>
        <div className='projectsection'>
          <img src='reactjs.png' alt=''></img>
          <h3>Utility Calculator (React Native)</h3>
          <a href='https://github.com/chintu1851/Utility-Calculator' target="_blank" rel="noreferrer"><button>View On Github</button></a>
        </div>
        <div className='projectsection'>
          <img src='uiux.png' alt=''></img>
          <h3>Climate App Mobile Design</h3>
          <a href='https://www.figma.com/file/StybL5iy4sdNr6osmaG00k/climate-design?type=design&mode=design&t=ipKWBrZSLQPeBBQf-1' target="_blank" rel="noreferrer"> <button>View On Figma</button> </a>
        </div>
        <div className='projectsection'>
          <img src='uiux.png' alt=''></img>
          <h3>Redesign Tim Hortons Website</h3>
          <a href='https://www.figma.com/file/Hg5yKcXQrKNrpGn0YObWOw/timhi?type=design&mode=design&t=ipKWBrZSLQPeBBQf-1' target="_blank" rel="noreferrer"><button>View On Figma</button></a>
        </div>
        <div className='projectsection'>
          <img src='uiux.png' alt=''></img>
          <h3>Canadian Kaleidoscope Design</h3>
          <a href='https://www.figma.com/file/ctaogNhnNHw1LBHT5HiZpp/Hifi-Studio?type=design&mode=design&t=ipKWBrZSLQPeBBQf-1' target="_blank" rel="noreferrer"> <button>View On Figma</button></a>
        </div>
        <div className='projectsection'>
          <img src='uiux.png' alt=''></img>
          <h3>Food Delivery App</h3>
          <a href='https://www.figma.com/file/ZOofyMoupIneCf8n0fK1dy/Repairmate?type=design&mode=design&t=ipKWBrZSLQPeBBQf-1' target="_blank" rel="noreferrer"> <button>View On Figma</button></a>
        </div>
      </div>
    </div>
  )
}

export default Projects
