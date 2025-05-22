import './App.css'
import Header from "./Components/Header";
//import ContactMe from "./Components/ContactMe";
import Me from "./Components/Me"
import { useState } from 'react' ;
function App() {

  const [theme , setheme] = useState(true);
  
  return (
    <div className = {`overflow-hidden min-h-screen ${theme ? 'bg-white text-black' : 'bg-black text-white'} `}> 
      <Header setheme = {setheme} theme = {theme}  />
      <IntroBody />
    </div>
  )
}

function IntroBody(){

  return (
    <>
    <div id="intro" className='mx-[58px] my-[185px] flex'>
    <div>
      <div className = "text-[23px] mb-[3px] ">Software Developer</div>
      <div className = "text-6xl"> <b>Pankeet</b></div> 
      <div className = "text-6xl"><b>Manubarwala</b></div>
    </div>
    <div>
      <br /><br />
      <span className='text-6xl ml-[269px] w-[550px] h-[90px] my-[900px]'> Cpp Programmer </span>
    </div>
    </div>
    <div className='mx-[143px] font-sans w-[1034.6px] text-justify text-lg'>
      Hello ! I am Pankeet an engineering student with a strong interest in technology, software development, and problem-solving.
    </div>
    </>
  )
}


export default App
