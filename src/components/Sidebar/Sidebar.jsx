import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <Link to="/" className="link">
            <li className='sidebarListItem active'>
              <LineStyleIcon className="sidebarIcon"/>
              Home
            </li>
            </Link>
            <Link to="/" className="link">
            <li className='sidebarListItem'>
              <TimelineIcon className="sidebarIcon"/>
              Analytics
            </li>
            </Link>
            <Link to="/" className="link">
            <li className='sidebarListItem'>
              <TrendingUpIcon className="sidebarIcon"/>
              Sales
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className='sidebarTitle'>Quic Menu</h3>
          <ul className='sidebarList'>
            <Link to="/users" className="link">
            <li className='sidebarListItem'>
              <PermIdentityIcon className="sidebarIcon"/>
              Users
            </li>
            </Link>
              <Link to="/newUser" className="link">
            <li className='sidebarListItem'>
            <PermIdentityIcon className="sidebarIcon"/>
              New User
            </li>
           </Link>  
            <Link to="/products" className="link">
            <li className='sidebarListItem'>
              <StorefrontIcon className="sidebarIcon"/>
              Products
            </li>
            </Link>
            <Link to="/" className="link">
            <li className='sidebarListItem'>
              <AttachMoneyIcon className="sidebarIcon"/>
              Transaction
            </li>
            </Link>
            <Link to="/" className="link">
            <li className='sidebarListItem'>
              <BarChartIcon  className="sidebarIcon"/>
              Reports
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className='sidebarTitle'>Notification</h3>
          <ul className='sidebarList'>
            <Link to="/" className="link">
            <li className='sidebarListItem'>
              <MailOutlineIcon className="sidebarIcon"/>
              Mail
            </li>
            </Link>
             <Link to="/" className="link">
            <li className='sidebarListItem'>
              <DynamicFeedIcon className="sidebarIcon"/>
              Feedback
            </li>
            </Link>            
            <Link to="/" className="link">
            <li className='sidebarListItem'>
              <ChatBubbleOutlineIcon className="sidebarIcon"/>
              messages
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <Link to="/" className="link">
            <li className='sidebarListItem'>
              <WorkOutlineIcon className="sidebarIcon"/>
              Manage
            </li>
            </Link>
            <Link to="/" className="link">
            <li className='sidebarListItem'>
              <TimelineIcon className="sidebarIcon"/>
              Analytics
            </li>
              </Link>           
            <Link to="/" className="link">     
            <li className='sidebarListItem'>
              <WorkOutlineIcon className="sidebarIcon"/>
              Reports
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}
