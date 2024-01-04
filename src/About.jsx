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
                    <img src='./chintan.jpg' alt='chintu'></img>
                </div>
                <div className='aboutme'>
                    <h1>About Me</h1>
                    <p>I am committed to tailoring websites that not only mirror the visions of clients but also address the varied requirements of users. With a meticulous approach, I handle intricate elements to ensure flawless functionality and swift loading times. My passion lies in sculpting websites that seamlessly adapt and effortlessly scale, setting high benchmarks in performance while aligning with the client's aspirations and user expectations."</p>
                </div>
            </div>
        </div>

    )
}

export default About
