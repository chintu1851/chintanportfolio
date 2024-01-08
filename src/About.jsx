import React from 'react'
import Header from './Header'

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className='aboutm'>
                <div className='empty1'>
                </div>
                <div className='aboutimage'>
                
                    <img src='https://res.cloudinary.com/dac8tennr/image/upload/v1704669399/u1otw3gqljtxvdydbni7.jpg' alt='chintu'></img>
                </div>
                <div className='aboutme'>
                    <h1>About Me</h1>
                    <p>Hello, I’m Chintan, a Full Stack Developer, specializing in Web Development & Mobile App Development, dedicated to catering specific user’s needs and transforming it into visual & user-friendly applications that can ultimately serve as a better need. I believe in keeping on the cutting edge of technical developments, continuously learning and adapting to new trends and technologies in the ever-changing world of web development. My goal is to not only fulfill but also rise above expectations, providing solutions that not only meet the client's objectives but also attract and engage users."</p>
                </div>
            </div>
        </div>

    )
}

export default About
