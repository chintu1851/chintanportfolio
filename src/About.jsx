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
                    <p>Hey there! I'm Chintan, a frontend developer with a passion for UI/UX design. I specialize in crafting seamless web and mobile applications that prioritize user experience. With a sharp eye for detail and a commitment to staying updated on design trends, I aim to exceed client expectations. Let's work together to create visually appealing and user-friendly solutions that leave a lasting impression.</p>
                </div>
            </div>
        </div>

    )
}

export default About
