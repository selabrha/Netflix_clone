import React from 'react'
import './foooter.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='footer_wrapper'>
      <div className='fotter_inner_container'>
        <div className='footer_icons'>
          <FacebookIcon/>
          <InstagramIcon/>
          <YouTubeIcon/>
        </div>
        <div className='fotter_data'>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Inestor Relationa</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookies Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Uses</li>
              <li>Corporator Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Prevancy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className='service_code'>
          <p>Service code</p>
        </div>
        <div className='copy_writer'>
          &copy;1997-2024 Netflix,Inc
        </div>
      </div>
    </div>
  )
}

export default Footer