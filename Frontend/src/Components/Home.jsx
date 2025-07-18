import { Typewriter } from 'react-simple-typewriter';
import gsap from 'gsap';
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
  }, [])
    return (
      <>
      <div className={`mt-20 grid grid-cols-11 overflow-auto`}>
      <div className='grid place-content-center col-span-5'>
        <div className = {`text-2xl font-semibold ml-1 mb-1 bg-gradient-to-r bg-clip-text text-transparent ${theme ? "from-blue-950 to-blue-700" : "from-blue-200 to-blue-300"}`}>
          <Typewriter 
            words={['C++ Programmer' , 'Software Engineer', 'Full Stack Developer', 'Ui/Ux designer' ]}
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
      <div className = "col-span-6 grid place-content-center">
        <video autoPlay loop muted alt="SDE" className={`imgCSS ${theme ? "brightness-105": "brightness-75"}  shadow-sm shadow-black`}>
          <source src="/Sde.mp4"></source>
        </video>
      </div>
      </div>
       <div className={`myIntro flex mx-24 font-serif w-[1034.6px] text-justify text-xl mt-24 bg-gradient-to-r ${theme ? "from-blue-950 to-gray-900" : "from-blue-100 to-blue-200"} bg-clip-text text-transparent`}>
        <span className="text-justify ">Hey there, I'm Pankeet a 21-years-old CSE undergrad 
          who is passionate about Software Development, UI/UX Design, Product Management. Currently,
          I'm pursuing my career as a Full Stack Web Developer.My further goal is to excel in my Development Skills.
        </span>
       </div>
      </>
    )
  }
  

