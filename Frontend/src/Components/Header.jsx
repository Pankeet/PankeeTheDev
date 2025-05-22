export default function Header({theme , setheme}){

    function ldmode(){
      setheme(current => !current);
    }
  
    return (
      <div className="font-armies flex text-3xl my-[10px]">
        <div><span class="headerCSS">Home</span></div>
        <div><span class="headerCSS">About Me</span></div>
        <div><span class="headerCSS">Projects</span></div>
        <div><span class="headerCSS">Contact</span></div>
  
        <div className='ml-[520px]'>
          <img src={theme ? `/img/Light Mode.png`:`/img/Dark Mode2.png`}  className='w-[85px] h-[40px] cursor-pointer' onClick={ldmode}></img>
        </div>
      </div>
    )
  }
  