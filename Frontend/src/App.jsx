import './App.css'
import Header from "./Components/Header";
import Contact from './Components/ContactMe'
import { useState } from 'react' ;
import IntroBody from './Components/IntroBody';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  const [theme , setheme] = useState(true);
  
  return (
    <Router>
    <div className = {`overflow-hidden min-h-screen ${theme ? 'bg-[#ece9e2] text-gray-999' : 'bg-gray-999 text-[#ece9e2]'} `}> 
      <Header setheme = {setheme} theme = {theme}  />
    <Routes>
      <Route path = "/" element={<Home />}></Route>
      <Route path = "/about" element={<About />}></Route>
      <Route path = "/projects" element={<Project />}></Route>
      <Route path = "/contact" element={<ContactMe theme={theme} />}></Route> 
    </Routes>
    </div>
    </Router>
  )
}

function Home(){
  return (
    <><IntroBody /></>
  )
}

function About(){
  return(<><div>I am Pankeet The Great</div></>)
}

function Project(){
  function getPro(){
    window.open('https://github.com/Pankeet', '_blank', 'noopener,noreferrer');
  }
  return (
    <><button className="border rounded-md bg-black text-white hover:bg-gray-600" onClick={getPro}>Check My Projects Here</button></>
  )
}

function ContactMe({theme}){
  return (
    <><Contact theme={theme} /></>
  )
}
export default App
