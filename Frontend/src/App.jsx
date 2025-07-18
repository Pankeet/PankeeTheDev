import './App.css'
import Header from "./Components/Header";
import ScrollTriggered from './Components/Project';
import { useEffect, useState } from 'react' ;
import IntroBody from './Components/Home';
import AboutMe from "./Components/About";
import { BrowserRouter as Router, Routes, Route ,Outlet } from 'react-router-dom';
function App() {

  const [theme , setheme] = useState();

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(isDarkMode) setheme(false);
    else setheme(true);
  },[setheme]);

  return (
    <Router>
      <div className = {`overflow-x-hidden h-screen w-full ${theme ? 'bg-[#ece9e2] text-gray-950' : 'bg-gradient-to-r from-gray-950 to-black text-[#ece9e2]'} `}> 
      <div> <Header setheme = {setheme} theme = {theme} /></div>
    <Routes>
      <Route path = "/" element={<Home theme={theme} />}></Route>
      <Route path = "/about" element={<AboutMe theme={theme}/>}></Route>
      <Route path = "/projects" element={<div>
        <Project />
      </div>}></Route>
    </Routes>
    </div>
    </Router>
  )
}

function Home({theme }){
  return (
    <><IntroBody theme={theme} />
    <AboutMe theme={theme} /></>

  )
}

function Project(){

  return (
    <><ScrollTriggered /></>
  )
}

export default App
