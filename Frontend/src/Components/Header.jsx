"use client"
import { Link , useLocation } from 'react-router-dom';
import { motion } from "motion/react";

export default function Header({theme , setheme}){

  const location = useLocation();
  console.log(location.pathname)
    
  function ldmode(){
    setheme(current => !current);
  }
    
  const container = {
    width: 50,
    height: 25,
    backgroundColor: "gray",
    borderRadius: 25,
    cursor: "pointer",
    display: "flex",
    padding: 2.5,
  }
  
  const handle = {
    width: 20,
    height: 20,
    backgroundColor: "black",
    borderRadius: "50%",
  }

      return (
        <div className="font-serif flex text-xl my-3 mx-3 pb-2">
            <div><Link to="/" className='headerCSS'><span className={`${location.pathname == '/' || '' ? 'activeHeader' : '' } hover:text-[#b74b4b] hover:border-b-2 hover:border-b-[#b74b4b]`}>Home</span></Link></div>
            <div><Link to="/about" className="headerCSS"><span className={`${location.pathname == '/about' ? 'activeHeader' : '' } hover:text-[#b74b4b] hover:border-b-2 hover:border-b-[#b74b4b]`}>About Me</span></Link></div>
            <div><Link to="/projects" className="headerCSS"><span className={`${location.pathname === '/projects' ? 'activeHeader' : ''} hover:text-[#b74b4b] hover:border-b-2 hover:border-b-[#b74b4b] `}>Projects</span></Link></div>
            <div><a href='https://contact-me-flax-nu.vercel.app/' className='headerCSS hover:text-[#b74b4b] hover:border-b-2 hover:border-b-[#b74b4b]'>Contact</a></div>
  
          <div className = 'ml-auto mr-10'>
          <button className="toggle-container"
          style={{
            ...container,
            justifyContent: "flex-" + (theme ? "start" : "end"),
            }}
            onClick={ldmode}>

            <motion.div
                className="toggle-handle"
                style={handle}
                layout
                transition={{
                  type: "spring",
                    visualDuration: 0.3,
                    bounce: 0.2,
                  }}
            />
        </button>
          </div>
        </div>
      )
    }
  
  
