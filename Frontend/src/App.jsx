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
        <Route path = "/projects" element={<Project />}></Route>
        <Route path="*" element={<ErrorPage />} />
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

function ErrorPage(){
  return (
  <div className="text-center px-4 flex items-center justify-center h-screen font-sans">
    <div className='mr-12'>
    <h1 className="text-8xl font-extrabold tracking-tight text-purple-700 drop-shadow-lg">404</h1>
    <p className="text-2xl mt-4 font-semibold">Oops! Page not found</p>
    </div>
    <div>
    <div className="mt-6 ">
    <p className="text-gray-400">Looks like you took a wrong turn into the void of Parthism 💫</p>
      <a href="/" className="mt-5 inline-block px-6 py-3 bg-purple-700 hover:bg-purple-800 hover:shadow-fuchsia-800 text-white font-medium rounded-xl transition-all duration-200 shadow-md">
        🏠 Back to Home
      </a>
    </div>
    </div>
  </div>
  )
}

export default App
