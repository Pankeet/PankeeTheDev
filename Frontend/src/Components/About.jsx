import { FaGithub , FaLinkedin } from "react-icons/fa";
import Bot  from "/img/GptBot.png"
export default function AboutMe(){
    return (
        <div className="h-screen w-full grid grid-cols-4 font-serif">
            <div className="col-span-2 flex justify-center items-center">
                <img src={Bot} alt="Software Engineer" className="size-96 shadow-lg shadow-[#631FF0]" />
            </div>
            <div className="col-span-2 flex justify-center items-center">
                <div>
                <div>
                <span className="text-4xl font-semibold text-[#631FF0]">
                    About Me
                </span>
                </div>
                <div>
                    <div className="text-xl text-justify mr-20 mt-6 bg-gradient-to-l bg-clip-text text-transparent from-[#B253FC] to-[#551AF3] space-y-6">      
                        <p>
                           <i>Welcome to my portfolio.</i> I'm Pankeet, a 21-year-old Computer Science 
                           undergraduate with a strong passion for Software Development, System Design, and 
                           Product Management. I specialise in the MERN stack and Data Structures and Algorithms.
                        </p> 
                         <p>
                         My skill set includes wireframing, problem-solving, front-end implementation, and 
                         rigorous testing—ensuring that every piece of software is both flawless and 
                         functionally robust. I have worked on a diverse range of projects, including mobile 
                         applications, web platforms, and interactive dashboards—each centred around user-focused 
                         design that fosters engagement.
                         </p>
                        <p>
                        My long-term ambition is to master advanced algorithms, particularly Dynamic Programming. 
                        I approach every project with unwavering commitment, precision, and a drive to deliver 
                        intuitive, high-performance user experiences.
                        </p>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}
