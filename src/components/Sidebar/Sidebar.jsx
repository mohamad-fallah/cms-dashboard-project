import React from 'react';
import './Sidebar.css';
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
import ReportIcon from '@mui/icons-material/Report';


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <LineStyleIcon className="sidebarIcon"/>
              Home
            </li>
            <li className='sidebarListItem'>
              <TimelineIcon className="sidebarIcon"/>
              Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUpIcon className="sidebarIcon"/>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className='sidebarTitle'>Quic Menu</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <PermIdentityIcon className="sidebarIcon"/>
              Users
            </li>
            <li className='sidebarListItem'>
            <StorefrontIcon className="sidebarIcon"/>
              New User
            </li>
            <li className='sidebarListItem'>
              <AttachMoneyIcon className="sidebarIcon"/>
              Products
            </li>
            <li className='sidebarListItem'>
              <BarChartIcon className="sidebarIcon"/>
              Transaction
            </li>
            <li className='sidebarListItem'>
              <ReportIcon className="sidebarIcon"/>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className='sidebarTitle'>Notification</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <DynamicFeedIcon className="sidebarIcon"/>
              Mail
            </li>
            <li className='sidebarListItem'>
              <TimelineIcon className="sidebarIcon"/>
              Feedback
            </li>
            <li className='sidebarListItem'>
              <ChatBubbleOutlineIcon className="sidebarIcon"/>
              messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <WorkOutlineIcon className="sidebarIcon"/>
              Manage
            </li>
            <li className='sidebarListItem'>
              <MailOutlineIcon className="sidebarIcon"/>
              Analytics
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
