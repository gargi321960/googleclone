 import React from 'react'
 import './Home.css';
 import { Link } from 'react-router-dom';
 import AppsIcon from '@mui/icons-material/Apps';
 import AccountCircleIcon from '@mui/icons-material/AccountCircle';
 import Search from './Search';




import './Search.css';

function openTab() {
  window.open('https://mail.google.com/');
}
function openTabtwo() {
  window.open('https://www.google.com/search?q=images&sxsrf=ALiCzsaLLhjqE0P7Rp8hp77y5R0Kc1UK8Q:1670791942758&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjHk_eBufL7AhUs8jgGHWZSArwQ_AUoAXoECAIQAw&biw=1536&bih=754&dpr=1.25');
}
 
 function Home() {
   return (
     <div className='home'>

      
      <div className='home__header'>

      <div className='home__headerLeft'>
      <Link to='about'>About</Link>
      <Link to='store'>Store</Link>

      </div>
      <div className='home__headerRight'>
      <Link to='gmail' onClick={openTab} >Gmail</Link>
      <Link to='images'  onClick={openTabtwo} >Images</Link>
      <AppsIcon sx={{ fontSize: 25}}/>
      <AccountCircleIcon  color="disabled"  sx={{ fontSize: 40 }}/>
      </div>

      </div>

      <div className='home__body'>
        <img src='https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif' alt=''/>

        <div className='home__inputContainer'>
        <Search/>
        </div>

      </div>
     </div>
   )
 }
 
 export default Home;