const Main = () => {
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
                            Software Developer
                        </h1>
                    </div>
                    <div className='cdimage'>
                        <img src='https://res.cloudinary.com/dac8tennr/image/upload/v1704669152/wktrftzm1fre5fdvb8rb.jpg' alt='cimage' className='cimage'></img>
                    </div>
                </div>
                <div className='aboutdiv'>
                    <p className='aboutcd'>
                       Empowering digital experiences through seamless web and mobile applications is my forte as a Software Developer. With a penchant for crafting responsive designs and refining user interfaces, I'm driven by the ever-evolving landscape of software development. My passion for innovation fuels my desire to explore new boundaries and deliver cutting-edge solutions. Let's join forces to transform your digital vision into reality, blending expertise in development with intuitive UI/UX design.
                    </p>
                    {/* Use anchor tag with download attribute for triggering the download */}
                    <a target="_blank" href='https://drive.google.com/file/d/1pR9AJ8c6BTxlAEl63muEVf_f5z755CRl/view?usp=sharing' download style={{textDecoration:'none',color:'blue'}}>
                        <button>Download Resume</button>
                    </a>
                </div>
                <div className="social">
                    <a href="https://www.linkedin.com/in/pchintan71/" target="_blank" rel="noreferrer"><img src='https://res.cloudinary.com/dac8tennr/image/upload/v1704668700/g1ilh2nutmhjxy2w2sla.png' alt=""></img></a>
                    <a href="https://www.instagram.com/chintanpatel71/" target="_blank" rel="noreferrer"><img src='https://res.cloudinary.com/dac8tennr/image/upload/v1704668783/xv561khyglb3rdbee9yn.jpg' alt=""></img></a>
                    <a href="https://www.behance.net/patelchintan3" target="_blank" rel="noreferrer"><img src='https://res.cloudinary.com/dac8tennr/image/upload/v1704668548/caadexzviwqm5sjjuplv.png' alt=""></img></a>
                    <a href="https://github.com/chintu1851" target="_blank" rel="noreferrer"><img src='https://res.cloudinary.com/dac8tennr/image/upload/v1704668688/vgvedys41106xms5f69v.png' alt=""></img></a>
                </div>
            </div>
        </div>
    );
};

export default Main;
