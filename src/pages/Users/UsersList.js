import React from 'react'
import { useState } from 'react'
import { userRow } from '../../datas'
import {DataGrid} from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

import './UsersList.css'

export default function UsersList() {

  const [userDatas, setUserDatas] = useState(userRow)
  const userDelete = userID => {
    setUserDatas(userDatas.filter(user => user.id !== userID))
  
  }

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90,
    },
    {
      field: 'username',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to="/" className='Link'>
            <div className='userListUser'>
              <img src={params.row.avatar} alt="lorem" className='useListImg'/> 
              {params.row.username}
            </div>
            </Link>
          </>
          )
      }
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200 
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120 ,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160 ,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150 ,
      renderCell: (params) => {
        return (
          <>
          <Link to={`/usser/${params.row.id}`} className='Link'>
          <button className='userListEdit'>Edit</button>
          </Link>
          <DeleteOutlineIcon onClick={() => userDelete(params.row.id)} className='userListDelete'/>
          </>
        )
      }
    },
  ]

  return (
    <div className='userList'>
      <DataGrid
        rows={userDatas}
        columns={columns}
        disableSelectionOnClick
        pageSize={2}
      />
    </div>
  )
}
