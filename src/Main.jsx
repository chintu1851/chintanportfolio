import { useNavigate } from 'react-router-dom';

const Main = () => {

    const navigate = useNavigate()
    return (
        <div>
            <div className="maindiv">
                <div className='maincss'>
                    <div className='headempty'> </div>
                    <div className='headempty1'> </div>
                    <div className='description'>
                        <h1 className='maintext'>Hi</h1>
                        <h1 className='maintext'>I am Chintan</h1>
                        <h1 className='maintexth1'>
                            Web Developer
                        </h1>
                    </div>
                    <div className='cdimage'>
                   
                        <img src='https://res.cloudinary.com/dac8tennr/image/upload/v1704669152/wktrftzm1fre5fdvb8rb.jpg' alt='cimage' className='cimage'></img>
                    </div>
                </div>
                <div className='aboutdiv'>
                    <p className='aboutcd'>
                        I aim to create websites that match what clients want and meet users' needs. I pay close attention to the small details, making sure everything works smoothly and loads fast. My focus is on making websites that can grow easily and perform well.
                    </p>
                    <button onClick={() => navigate('projects')}>View Projects</button>
                </div>
                <div className="social">
                    <a href="https://www.linkedin.com/in/pchintan71/"><img src='https://res-console.cloudinary.com/dac8tennr/media_explorer_thumbnails/85a37c6ec3b39344db28b6301305b5f5/detailed' alt=""></img></a>
                    <a href="https://www.instagram.com/chintanpatel71/"><img src='insta.jpeg' alt=""></img></a>
                    <a href="https://www.behance.net/patelchintan3"><img src='https://res-console.cloudinary.com/dac8tennr/media_explorer_thumbnails/be9ae37249d00a09dcbf25b5003c55cd/detailed' alt=""></img></a>
                    <a href="https://github.com/chintu1851"><img src='https://res-console.cloudinary.com/dac8tennr/media_explorer_thumbnails/4ef1d3635becce0a42dd85bc7c5ad4be/detailed' alt=""></img></a>
                </div>

            </div>
        </div>
    )
}

export default Main
