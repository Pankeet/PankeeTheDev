import { FaGithub , FaLinkedin } from "react-icons/fa";
import { FaReact , FaJava , FaPython , FaNodeJs , FaHtml5 , FaCss3 , FaGit , FaAngular } from "react-icons/fa";
import cpp from "/img/cpp.svg";
import next from "/img/nextjs.svg";
import mongo from "/img/mongodb.png";
import tsc from "/img/typescript.svg";
import Bot  from "/img/GptBot.png";
export default function AboutMe_lg(){
    return (
        <div className="h-screen w-full grid grid-cols-4 font-serif">
            <div className="col-span-2 flex justify-center items-center">
                <img src={Bot} alt="Software Engineer" className="size-96 shadow-xl shadow-[#631FF0] rounded-xl" />
            </div>
            <div className="col-span-2 mt-5 grid place-content-center">
                <div>
                <span className="text-2xl font-semibold text-purple-700">
                    About Me
                </span>
                </div>
                <div>
                    <div className="text-lg text-justify mr-20 mt-6 bg-gradient-to-l bg-clip-text text-transparent from-[#B253FC] to-[#551AF3] space-y-6">      
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
                <div>
                    <div className="mt-6">
                        <span className="text-2xl font-semibold text-purple-700">My TechStack</span>
                    </div>
                    <div className="flex gap-3 mt-4">
                        <img src={cpp} alt="cpp" className="w-9 h-9" />
                        <FaReact className="w-9 h-9"/>
                        <img src={tsc} className="w-9 h-9" alt="typescript" />
                        <FaGit  className="w-9 h-9" />
                        <FaNodeJs className="w-9 h-9"/>
                        <img src={mongo} alt="mongodb" className="w-9 h-9" />
                        <img src={next} alt="nextjs" className="w-9 h-9" />
                        <FaHtml5 className="w-9 h-9" />
                        <FaCss3  className="w-9 h-9" />
                        <FaAngular  className="w-9 h-9" />
                        <FaJava className="w-9 h-9"/>
                        <FaPython className="w-9 h-9"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
