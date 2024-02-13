import React from 'react'
import './header.css'
import Netflixlogo from '../Images/icons/Netflix_Logo_PMS.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Header = () => {
  return (
    <div className='headr_wrapper'>
        <div className='header_holder'>
            <div className='header_leftSide'>
                <ul className='nav'>
                    <li><img src ={Netflixlogo} alt="Netflix logo" width={100}/> </li>
                    <li>Home</li>
                    <li>Tv show</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>Mylist</li>
                    <li>Browser by Languages</li>
                </ul>
            </div>
            <div>
                <ul className='nav'>
                    <li><SearchIcon/></li>
                    <li><NotificationsIcon/></li>
                    <li><AccountBoxIcon/></li>
                    <li><ArrowDropDownIcon/></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header