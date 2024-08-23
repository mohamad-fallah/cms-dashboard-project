import React from 'react'
import './topbar.css'
import NotificationIcon from '@mui/icons-material/Notificationicons'
import LanguageIcon from '@mui/icons-material/Language'
import SettingsIcon from '@mui/icons-material/Settings'


export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className='logo'>oktino🩵</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationIcon/>
            <span className='topIconBadge'>2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon/>
            <span className='topIconBadge'>3</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon/>
          </div>
          <img className='profile-images' src="/cms-project/public/images/Mohamad-fallah.jpg" alt="mohammadfallh" />
        </div>
      </div>
    </div>
  )
}
