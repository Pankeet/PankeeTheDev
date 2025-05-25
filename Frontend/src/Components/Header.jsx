"use client"
import { Link } from 'react-router-dom';
import * as motion from "motion/react-client"

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
        <div className="font-armies flex text-[1.7rem] my-[5px]">
            <div><Link to="/" className="headerCSS">Home</Link></div>
            <div><Link to="/about" className="headerCSS">About Me</Link></div>
            <div><Link to="/projects" className="headerCSS">Projects</Link></div>
            <div><Link to="/contact" className="headerCSS">Contact</Link></div>
  
          <div className = 'w-[126px] h-[72px] ml-[520px] my-[6.5px]'>
          <button className="toggle-container"
          style={{
            ...container,
            justifyContent: "flex-" + (theme ? "start" : "end"),
            }}
            onClick={ldmode}
            >
            <motion.div
                className="toggle-handle"
                style={handle}
                layout
                transition={{
                  type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.3,
                  }}
            />
        </button>
          </div>
        </div>
      )
    }
  
  