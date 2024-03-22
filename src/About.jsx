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
                    <h1 style={{textAlign:'center'}}>About Me</h1>
                    <p>Hey, I'm Chintan, a Full Stack Developer specializing in Web and Mobile App Development. I'm all about turning user needs into visually appealing and easy-to-use applications. With a focus on intuitive UI/UX design, I stay up-to-date with the latest trends to exceed client expectations. Let's create solutions that not only meet goals but also captivate users.</p>
                </div>
            </div>
        </div>

    )
}

export default About
