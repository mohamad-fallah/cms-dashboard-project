import React from 'react'
import './WidgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { newMembers } from '../../datas';

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
        <spana className='widgetSmTitle'>New Join Members</spana>
        <ul className="widgetSmList">
            {newMembers.map(user => (
                 <li key={user.id} className="widgetSmListItem">
                 <img src={user.img} alt='ims' className='widgetSmImg'/>
                <div className="widgetSmUser">
                    <span className='widgetSmUserName'>{user.username}</span>
                    <span className='widgetSmUserTitle'>{user.title}</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className='widgetSmIcon'/>
                </button>
            </li>
            ))}
        </ul>
    </div>
  )
}
