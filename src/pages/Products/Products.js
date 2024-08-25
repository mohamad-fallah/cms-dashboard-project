import React from 'react'
import { useState } from 'react'
import { product } from '../../datas';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import Stack from '@mui/material/Stack';
import './Products.css'


export default function UsersList() {

  const [productDatas, setProductDatas] = useState(product)

  const productDelete = productID => {
    setProductDatas(productDatas.filter(product => product.id !== productID))
  }

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 50,
    },
    {
      field: 'title',
      headerName: 'Name',
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className='Link'>
            <div className='userListUser'>
              <img src={params.row.avatar} alt="lorem" className='useListImg'/> 
              {params.row.title}
            </div>
            </Link>
          </>
          )
      }
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 130 ,
      renderCell: (params) => {
        return (
          <Stack direction="row" spacing={1} alignItems="center">
          <Link to={`/product/${params.row.id}`} className='Link'>
          <button className='userListEdit'>Edit</button>
          </Link>
          <DeleteOutlineIcon onClick={() => productDelete(params.row.id)} className='userListDelete'/>
          </Stack>
        )
      }
    },
  ]

  return (
    <div className='userList'>
      <DataGrid
        rows={productDatas}
        columns={columns}
        disableSelectionOnClick
        pageSize={2}
      />
    </div>
  )
}
