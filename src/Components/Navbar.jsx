import React ,{useEffect} from 'react';
import{AiOutlineMenu}from "react-icons/ai"
import {FiShoppingCart} from "react-icons/fi"
import {BsChatLeft} from "react-icons/bs"
import {RiNotification3Line} from "react-icons/ri"
 import {MdKeyboardArrowDown} from "react-icons/md"
 import { TooltipComponent } from '@syncfusion/ej2-react-popups';
 import avatar from "../data/avatar.jpg";
 import {Cart ,Chat,Notification,UserProfile} from ".";
 import { useStateContext } from '../Contexts/ContextProvider';


const NavButton=({title,customfunc,icon,color,dotColor})=>
(
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button'
    onClick={customfunc} style={{color}}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span style={{background:dotColor}} className="absolute inline-flex  rounded-full
      h-2 w-2 right-2 top-2 "/>{icon}
    </button>
    
  </TooltipComponent>
)

const Navbar = () => {
  const {activeMenu,isClicked,setIsClicked
 ,handleClick,setActiveMenu
 ,screenSize, setScreenSize}=useStateContext()


 useEffect(() => {
   const handleResize=()=>setScreenSize(window.innerWidth);
   window.addEventListener('resize',handleResize);

   handleResize();

  return()=> window.removeEventListener("resize",handleResize)
 }, []);

 useEffect(() => {
   if(screenSize <= 900 )
   {
     setActiveMenu(false)
   }
    else
    {
      setActiveMenu(true)
    }
 }, [screenSize])
 
 
  return (
    <div className='flex justify-between md:mx-6 p-2 relative'>

<NavButton
 title="Menu"
  customfunc={()=>
setActiveMenu ((prevActiveMenu)=>!prevActiveMenu)} color="blue" icon={<AiOutlineMenu/>} >
  
</NavButton>

<div className='flex'>
<NavButton
 title="Cart"
  customfunc={()=>handleClick('Cart')}
 color="blue"
  icon={<FiShoppingCart/>} >

</NavButton>

<NavButton
 title="Chat"
 dotColor="#03C9D7"
  customfunc={()=>handleClick('Chat')}
 color="blue"
  icon={<BsChatLeft/>} >

</NavButton>
<NavButton
 title="Notifications"
 dotColor="#03C9D7"
  customfunc={()=>handleClick('notifaction')}
 color="blue"
  icon={<RiNotification3Line/>} >
</NavButton>

<TooltipComponent content="profile" 
position='BottomCenter'>
<div className='flex items-center gap-2 cursor-pointer
p-1 hover:bg-light-gray rounded-lg'
onClick={()=>handleClick ("userProfile")}>
  <img
  className='rounded-full w-8 h-8 ' 
  src={avatar}/>
  <p>
    <span className='text-gray-400
    text-14'>Hi,</span>{' '}
    <span className='text-gray-400
    text-14 font-bold ml-1'>Mohamed</span>
  </p>
  <MdKeyboardArrowDown className='text-gray-400 text-14'/>
</div>
</TooltipComponent>
{isClicked?.cart&&<Cart/>}
{isClicked?.chat&&<Chat/>}
{isClicked?.notification&&<Notification/>}
{isClicked?.userProfile&&<UserProfile/>}
</div>
    </div>
  )
}

export default Navbar