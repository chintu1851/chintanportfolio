import React from 'react'
import Header from './Header'

const Skills = () => {
  return (
    <div>
      <Header></Header>
      <h1 className='skillsh1'>Skills</h1>
      <div className='skillsmain'>
        <div className='skillsdiv'>
          <h2>UI/UX</h2>
          <img src='uiux.png' alt=''></img>
          <div>
            <div class="grey"></div>
          </div>
        </div>
        <div className='skillsdiv'>
          <h2>HTML</h2>
          <img src='html.png' alt=''></img>
        </div>
        <div className='skillsdiv'>
          <h2>CSS</h2>
          <img src='css.png' alt=''></img>
        </div>
        <div className='skillsdiv'>
          <h2>JavaScript</h2>
          <img src='js.png' alt=''></img>
        </div>
        <div className='skillsdiv'>
          <h2>Bootstrap</h2>
          <img src='boot.jpeg' alt=''></img>
        </div>
        <div className='skillsdiv'>
          <h2>iOS Development</h2>
          <img src='swift.jpeg' alt=''></img>
        </div>

        <div className='skillsdiv'>
          <h2>ReactJS</h2>
          <img src='reactjs.png' alt=''></img>
        </div>
        <div className='skillsdiv'>
          <h2>React Native</h2>
          <img src='native.png' alt=''></img>
        </div>
        <div className='skillsdiv'>
          <h2>MongoDB</h2>
          <img src='mongo.png' alt=''></img>
        </div>
      </div>
    </div>
  )
}

export default Skills
