import gsap from 'gsap';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub , FaLinkedin } from 'react-icons/fa';
import { useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
export default function IntroBody_sm({theme}){

  useLayoutEffect(()=>{
    const tl = gsap.timeline();
      tl.from("img", {
        opacity:0,
        x:30,
        duration: 0.6,
      });
      tl.from("video", {
        opacity:0,
        x:30,
        duration: 0.6,
      });
      tl.from(".myName", {
        opacity:0,
        x:-30,
        duration: 0.8,
      });
      tl.from(".myIntro" , {
        y:30,
        opacity:0,
        duration:0.5,
      })
      tl.from(".techLinks" , {
        opacity : 0,
        scale : 0.5,
        duration : 0.7,
        x : -200
      })
  }, [])
    return (
      <>
      <div className='grid grid-cols-2 mt-7 mx-3'>
        <div className='col-span-1 grid place-content-center'>
            <div className={`ml-1 text-md inline-block max-w-48 break-words bg-gradient-to-r bg-clip-text text-transparent ${theme ? "from-blue-950 to-blue-700" : "from-blue-200 to-blue-300"}`}>
              <Typewriter 
                words={['C++ Programmer' , 'Jr. Software Developement Engineer', 'Computer Engineer' , 'Full Stack Developer' ]}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={2000}></Typewriter>
              </div>
              <div className='mt-1'>
                <div className = {`myName md:text-4xl text-3xl font-bold bg-gradient-to-r 
                  ${theme ? "from-blue-950 to-blue-900" : "from-blue-300 to-blue-100"} bg-clip-text text-transparent`}><b>Pankeet</b></div> 
                <div className = {`myName md:text-4xl text-3xl font-bold bg-gradient-to-r 
                  ${theme ? "from-blue-950 to-blue-900" : "from-blue-200 to-blue-300"} bg-clip-text text-transparent`}><b>Manubarwala</b></div>
              </div>
        </div>

        <div className='col-span-1 grid place-content-center mt-3'>
          <video autoPlay loop muted alt="SDE" className={`imgCSS ${theme ? "brightness-105": "brightness-75"}  shadow-lg shadow-white`}>
            <source src="/vid/Sde.mp4"></source>
          </video>
        </div>
      </div>
  
        <div className="myIntro flex flex-col gap-7 mt-3 font-sans">
          <div>
            <a href="/files/Pankeet_Resume.pdf" 
                download
                target="_blank" s
                className="aboutCSS mx-16" >
                  Download Resume 
              </a>
          </div>
          <div>
          <a href="/files/Offer_Plus_Completion.pdf" 
              target="_blank" 
                className="aboutCSS mx-28" >
                View Experience
            </a>
          </div>
        </div>
        <div className="techLinks flex gap-3 mx-12 mt-10">
          <a href="https://github.com/Pankeet" target="_blank" rel="noopener noreferrer" className={`${theme ? "text-black hover:text-gray-500" : " text-white hover:text-gray-400"} transition duration-200`}>
              <FaGithub className="w-9 h-9" />
          </a>
          <a href="https://www.linkedin.com/in/pankeet04/" target="_blank" rel="noopener noreferrer" className={`${theme ? "text-black hover:text-gray-500" : " text-white hover:text-gray-400"} transition duration-200`}>
              <FaLinkedin className="w-9 h-9" />
          </a>
        </div>
    </>
  )
  }
  

