import './App.css'
import Header from "./Components/Header";
import Contact from './Components/ContactMe'
//import ContactMe from "./Components/ContactMe";
import { useState } from 'react' ;
import IntroBody from './Components/IntroBody';
function App() {

  const [theme , setheme] = useState(true);
  
  return (
    <div className = {`overflow-hidden min-h-screen ${theme ? 'bg-gray-101 text-gray-999' : 'bg-gray-999 text-gray-101'} `}> 
      <Header setheme = {setheme} theme = {theme}  />
      <IntroBody />
    </div>
  )
}


export default App
