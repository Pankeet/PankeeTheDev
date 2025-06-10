"use client"
import { Link } from 'react-router-dom';
import { motion } from "motion/react";

export default function Header({theme , setheme}){

    
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
        <div className="font-serif flex text-xl my-3 mx-2 border-b-2 border-black pb-2 rounded-lg">
            <div><Link to="/" className="headerCSS">Home</Link></div>
            <div><Link to="/about" className="headerCSS">About Me</Link></div>
            <div><Link to="/projects" className="headerCSS">Projects</Link></div>
            <div><a href='https://contact-me-flax-nu.vercel.app/'className="headerCSS">Contact</a></div>
  
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
  
  
