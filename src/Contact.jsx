import React from 'react'
import Header from './Header'

const Contact = () => {
  return (
    <div>
      <Header></Header>
      <div className='maincontact'>
        <div className="contactsocial">
          <div className='card'>
            <h2 style={{ color: '#01548b', fontSize: '25px' }}>Get in Touch</h2>
            <h3 style={{ color: 'brown', fontSize: '19px' }}>patelchintan1851@gmail.com </h3>
            <h3> 160, Canon Jackson Dr,</h3>
            <h3>M6M 0B6,</h3>
            <h3>Toronto, ON, Canada.</h3>
            <a href="https://www.linkedin.com/in/pchintan71/"><img src='./link.png' alt=""></img></a>
            <a href="https://www.instagram.com/chintanpatel71/"><img src='./insta.jpeg' alt=""></img></a>
            <a href="https://www.behance.net/patelchintan3"><img src='./behance.png' alt=""></img></a>
            <a href="https://github.com/chintu1851"><img src='./git.png' alt=""></img></a>
          </div>
        </div>
        <div className='verticleline'></div>
        <div className='formcard'>
          <h2 style={{ fontSize: '25px',color:'white' }}>Contact Form</h2>
          <form>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Enter name'
              required
            /><br></br>
            <input
              type='email'
              id='Email'
              name='Email'
              placeholder='Enter Email'
              required
            /><br></br>
            <textarea
              id='subject'
              name='subject'
              placeholder='Enter your subject'
              required
            ></textarea><br></br>
            <button type='submit' className='hbutton'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
