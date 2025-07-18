import { FaGithub , FaLinkedin } from "react-icons/fa";
export default function AboutMe({theme}){
    console.log(theme);
    return (
        <div className="font-serif h-screen">
            <div className="mx-9 my-5 py-3 px-10 grid grid-cols-7 border-b border-black rounded-sm">
                <div className="col-span-2 flex justify-start items-center">
                    <span className="font-serif text-xl">Pankeet Manubarwala</span>
                </div>
                <div className="col-span-3 flex justify-center items-center gap-3">
                    <a href="/files/Pankeet_Resume.pdf" 
                        download  
                        className="aboutCSS" >
                        Achievements 
                    </a>
                    <a href="/files/Pankeet_Resume.pdf" 
                        target="_blank" 
                        className="aboutCSS" >
                        Resume 
                    </a>
                    <a href="/files/Offer_Plus_Completion.pdf" 
                        target="_blank" 
                        className="aboutCSS" >
                        Experience
                    </a>
                </div>
                <div className="col-span-2 flex justify-end items-center gap-3">
                    <a href="https://github.com/Pankeet" target="_blank" rel="noopener noreferrer" className={`${theme ? "text-black hover:text-gray-500" : " text-white hover:text-gray-400"} transition duration-200`}>
                        <FaGithub className="w-9 h-9" />
                    </a>
                    <a href="https://www.linkedin.com/in/pankeet04/" target="_blank" rel="noopener noreferrer" className={`${theme ? "text-black hover:text-gray-500" : " text-white hover:text-gray-400"} transition duration-200`}>
                        <FaLinkedin className="w-9 h-9" />
                    </a>
                </div>
            </div>
            <div className="m-10 text-2xl font-serif flex justify-center items-center">
            <h1> Hey there! I'm Pankeet — an engineering student, full-stack web developer, and someone who believes in solving problems with clean code and coffee.
                Currently building cool stuff like a Second Brain app, open project sharing platforms, and trying to dodge Parthism every day 😅.
            </h1>
            </div>
        </div>
    )
}
            