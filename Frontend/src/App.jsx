import './App.css'
import Header from "./Components/Header";
import ScrollTriggered from './Components/Project';
import { useState } from 'react' ;
import IntroBody from './Components/IntroBody';
import { BrowserRouter as Router, Routes, Route ,Outlet } from 'react-router-dom';
function App() {

  const [theme , setheme] = useState(true);
  
  return (
    <Router>
      <div className = {`overflow-hidden min-h-screen w-full ${theme ? 'bg-[#ece9e2] text-gray-999' : 'bg-gradient-to-r from-gray-999 to-black text-[#ece9e2]'} `}> 
      <Header setheme = {setheme} theme = {theme}  />
    <Routes>
      <Route path = "/" element={<Home />}></Route>
      <Route path = "/about" element={<About />}></Route>
      <Route path = "/projects" element={<Project />}></Route>
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
  return(<> <div>I am Pankeet The Great</div></>)
}

function Project(){

  return (
    <><ScrollTriggered /></>
  )
}

export default App
