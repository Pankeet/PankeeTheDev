import './App.css'
import { useState } from 'react' ;
function App() {

  const [theme , setheme] = useState(true);
  
  return (
    <div className = {` min-h-screen overflow-hidden ${theme ? 'bg-white text-black' : 'bg-black text-white'} `}> 
      <Header setheme = {setheme} theme = {theme} />
      <IntroBody />
      <Me />
    </div>
  )
}

function Header({theme , setheme}){

  function ldmode(){
    setheme(prev => !prev);
  }

  return (
    <div className="font-armies flex text-3xl my-[10px]">
      <div className='w-[85.1px] h-[51.1px] mr-[45px] ml-[50px]  cursor-pointer'>Home</div>
      <div className='h-[51.1px] w-[149.9px] mr-[45px]  cursor-pointer'>About Me</div>
      <div className='h-[51.1px] w-[110.8px] mr-[45px]  cursor-pointer'>Projects</div>
      <div className='h-[51.1px] w-[109.7px]  cursor-pointer'>Contact</div>

      <div className='ml-[500px]'>
        <img src={theme ? `/img/Dark Mode.png`:`/img/Light Mode.png`}  className='w-[85px] h-[40px] cursor-pointer' onClick={ldmode}></img>
      </div>
    </div>
  )
}

function IntroBody(){
  return (
    <>
    <div className='mx-[57.9px] my-[180px] font-aptos'>
    <div className = "text-[23px] mb-[3px]">Software Developer </div>
    <div className = "text-6xl"> <b>Pankeet</b></div> 
    <div className = "text-6xl"><b>Manubarwala</b></div>
    </div>
    </>
  )
}

function Me(){
  return (
    <>
    <div className='mx-[143px] font-sans w-[1034.6px] text-justify text-lg'>
    Hello ! I am Pankeet an engineering student with a strong interest in technology, software development, and problem-solving.
  </div>
    </>
  )
}
export default App
