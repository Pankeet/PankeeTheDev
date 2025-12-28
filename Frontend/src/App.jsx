import './App.css';
import { useEffect, useState } from 'react';
import { Suspense, lazy } from "react";
import Header_lg from "./Components/ui_lg/Header";
import Header_sm from "./Components/ui_sm/Header";
import IntroBody_lg from './Components/ui_lg/Home';
import AboutMe_lg from "./Components/ui_lg/About";
import IntroBody_sm from './Components/ui_sm/Home';
import AboutMe_sm from "./Components/ui_sm/About";
const ScrollTriggered = lazy(() => import('./Components/Project'));

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [theme, setheme] = useState();

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) setheme(false);
    else setheme(true);
  }, []);

  const screen_small = window.matchMedia('(max-width: 767px)').matches;

  return (
    <Router>
      <div role='main' className={`overflow-x-hidden h-screen w-full ${theme ? 'bg-[#ece9e2] text-gray-950' : 'bg-gradient-to-r from-gray-950 to-black text-[#ece9e2]'}`}>
        {!screen_small && <Header_lg setheme={setheme} theme={theme} /> }
        {screen_small && <Header_sm setheme={setheme} theme={theme} />}
        <Suspense fallback={<div className='font-serif text-red-500 text-xl'>Loading Projects...</div>}>
          <Routes>
            <Route path="/" element={<>{screen_small ? (<><IntroBody_sm theme={theme} /><AboutMe_sm theme={theme} /></>) : (<><IntroBody_lg theme={theme} /><AboutMe_lg theme={theme} /></>)}</>}/>
            <Route path="/projects" element={<Suspense fallback={<div className="font-serif text-red-500 text-xl">Loading Projects...</div>}><ScrollTriggered /></Suspense>}/>
            <Route path="*" element={<ErrorPage />}
            />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

function ErrorPage(){
return (
        <div role='main' className="text-center px-4 flex items-center justify-center h-screen font-sans">
            <div className='mr-12'>
              <h1 className="text-8xl font-extrabold tracking-tight text-purple-700 drop-shadow-lg">404</h1>
              <p className="text-2xl mt-4 font-semibold">Oops! Page not found</p>
            </div>
            <div className="mt-6">
              <p className="text-gray-400">Looks like you took a wrong turn into the void of Parthism 💫</p>
              <a aria-label='Go back to Home Page' href="/" className="mt-5 inline-block px-6 py-3 bg-purple-700 hover:bg-purple-800 hover:shadow-fuchsia-800 text-white font-medium rounded-xl transition-all duration-200 shadow-md">
                🏠 Back to Home
              </a>
            </div>
          </div>
              )
}

export default App;
