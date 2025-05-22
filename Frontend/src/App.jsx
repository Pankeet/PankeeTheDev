import './App.css'
import Header from "./Components/Header";
//import ContactMe from "./Components/ContactMe";
import { useState } from 'react' ;
import IntroBody from './Components/IntroBody';
function App() {

  const [theme , setheme] = useState(true);
  
  return (
    <div className = {`overflow-hidden min-h-screen ${theme ? 'bg-gray-300 text-gray-999' : 'bg-gray-999 text-gray-300'} `}> 
      <Header setheme = {setheme} theme = {theme}  />
      <IntroBody />
    </div>
  )
}


export default App
