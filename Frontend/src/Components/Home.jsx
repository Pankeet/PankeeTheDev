import { Typewriter } from 'react-simple-typewriter';
import gsap from 'gsap';
import { FaGithub , FaLinkedin } from 'react-icons/fa';
import { useLayoutEffect } from 'react';
export default function IntroBody({theme}){

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
      <div className='h-screen w-full'>
      <div className="mt-20 grid grid-cols-11">
      <div className='grid place-content-center col-span-6'>
        <div className = {`text-2xl font-semibold ml-1 mb-1 bg-gradient-to-r bg-clip-text text-transparent ${theme ? "from-blue-950 to-blue-700" : "from-blue-200 to-blue-300"}`}>
          <Typewriter 
            words={['C++ Programmer' , 'Jr. Software Developement Engineer', 'Computer Engineer' , 'Full Stack Developer' ]}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={60}
            delaySpeed={2000}></Typewriter>
            </div>
      <div className = {`myName text-6xl font-bold bg-gradient-to-r ${theme ? "from-blue-950 to-blue-900" : "from-blue-300 to-blue-100"} bg-clip-text text-transparent`}><b>Pankeet</b></div> 
      <div className = {`myName text-6xl font-bold bg-gradient-to-r ${theme ? "from-blue-950 to-blue-900" : "from-blue-200 to-blue-300"} bg-clip-text text-transparent`}><b>Manubarwala</b></div>
      </div>
      <div className = "col-span-5 grid place-content-center">
        <video autoPlay loop muted alt="SDE" className={`imgCSS ${theme ? "brightness-105": "brightness-75"}  shadow-lg shadow-white`}>
          <source src="/vid/Sde.mp4"></source>
        </video>
      </div>
      </div>
       <div className={`myIntro mx-36 flex gap-5 font-serif text-xl bg-gradient-to-r ${theme ? "from-blue-950 to-gray-900" : "from-blue-200 to-blue-300"} bg-clip-text text-transparent`}>
       <a href="/files/Pankeet_Resume.pdf" 
          download
          target="_blank" s
          className="aboutCSS" >
            Download Resume 
        </a>
        <a href="/files/Offer_Plus_Completion.pdf" 
           target="_blank" 
            className="aboutCSS" >
            View Experience
        </a>
       </div>
       <div className="techLinks flex justify-start mx-36 mt-10 items-center gap-3">
                    <a href="https://github.com/Pankeet" target="_blank" rel="noopener noreferrer" className={`${theme ? "text-black hover:text-gray-500" : " text-white hover:text-gray-400"} transition duration-200`}>
                        <FaGithub className="w-9 h-9" />
                    </a>
                    <a href="https://www.linkedin.com/in/pankeet04/" target="_blank" rel="noopener noreferrer" className={`${theme ? "text-black hover:text-gray-500" : " text-white hover:text-gray-400"} transition duration-200`}>
                        <FaLinkedin className="w-9 h-9" />
                    </a>
                </div>
      </div>
    )
  }
  

