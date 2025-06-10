import { Typewriter} from 'react-simple-typewriter';
export default function IntroBody(){

    return (
      <>
      <div className='ml-16 my-48 flex'>
      <div className='flex-1'>
        <div className = "text-2xl mb-1 bg-gradient-to-r from-blue-950 to-blue-300 bg-clip-text text-transparent">
          <Typewriter 
            className='text-6xl ml-[280px]'
            words={['C++ Programmer' , 'Software Engineer', 'Full Stack Developer', 'Ui/Ux designer' ]}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={60}
            delaySpeed={2000}></Typewriter>
            </div>
        <div className = "text-6xl font-bold bg-gradient-to-r from-blue-950 to-blue-300 bg-clip-text text-transparent"> <b>Pankeet</b></div> 
        <div className = "text-6xl font-bold bg-gradient-to-r from-blue-950 to-blue-300 bg-clip-text text-transparent"><b>Manubarwala</b></div>
      </div>
      <div className = "flex-2">
      </div>
      </div>
       <div className='mx-[143px] font-sans w-[1034.6px] text-justify text-lg'>
        Hello ! I am Pankeet an engineering student with a strong interest in technology, software development, and problem-solving.
      </div>
      </>
    )
  }
  