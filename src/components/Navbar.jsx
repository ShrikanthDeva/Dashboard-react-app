import React, {useEffect} from 'react'
// icons
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Fill, RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
// tooltip
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile} from '.'
import { useStateContext} from '../contexts/ContextProvider';

// button wrapped in a tooltip component
const NavButton = ( {title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button 
      type='button' 
      onClick={() => customFunc()}
      style={{color}} 
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span style={{background: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {

  // get state
  const {activeMenu, setActiveMenu , isClicked, handleClick, screenSize, setScreenSize, currentColor} = useStateContext();

  // useEffect accepts a callback fn and a dependency array(when its going to be called) 
  //  if array -> [] then at the beginning 
  
  // find the screen size initially and set acc instead of finding it each time
  useEffect(() => {

    const handleResize = () => setScreenSize(window.innerWidth);

    // every time we resize we set the screen size
    window.addEventListener('resize', handleResize)

    // self call to set it initially
    handleResize();

    // remove the eventlistener
    return () => window.removeEventListener('resize',handleResize)
  }, [] );

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  
  const handleActiveMenu = () => setActiveMenu(!activeMenu);



  return (
        
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
        
        {/* menu icon */}
        <NavButton title="Menu"  customFunc={handleActiveMenu}  color={currentColor} icon={<AiOutlineMenu/>} />
     
        <div className='flex'>
          {/* cart icon */}
          <NavButton 
            title="Cart" 
            customFunc={ () => handleClick('cart')} 
            color={currentColor} 
            icon={<FiShoppingCart/>}
          />

          {/* Chat */}
          <NavButton 
            title="Chat" 
            dotColor="#30C9D7"
            customFunc={ () => handleClick('chat')} 
            color={currentColor} 
            icon={<BsChatLeft/>}
          />

          {/* Notification */}
          <NavButton 
            title="Notification" 
            dotColor="#30C9D7"
            customFunc={ () => handleClick('notification')} 
            color={currentColor} 
            icon={<RiNotification3Line/>}
          />

          {/* Profile icon */}
          <TooltipComponent content="Profile" position='BottomCenter'>
            <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={ () => handleClick('userProfile')} >
                {/* image */}
                <img className='rounded-full w-8 h-8' src={avatar} />
                {/* text */}
                <p>
                  <span className='text-gray-400 text-14'>Hi, </span> {' '}
                  <span className='text-gray-400 font-bold ml-1 text-14'>Micheal</span>
                </p>
                {/* arrow down */}
                <MdKeyboardArrowDown className='text-gray-400 text-14'/>
            </div>
          </TooltipComponent>

          {isClicked.cart && <Cart />}
          {isClicked.chat && <Chat />}
          {isClicked.notification && <Notification />}
          {isClicked.userProfile && <UserProfile />}

        </div>
    </div>
    
  )
}

export default Navbar