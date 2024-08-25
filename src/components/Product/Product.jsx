import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'
import Chart from '../chart/Chart'
import { productsData } from '../../datas'

export default function Product() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className='productTitle'>Product</h1>
            <Link to="/newProduct">
                <button className='productAddButton'>Create</button>
            </Link>
        </div>

        <div className='productTop'>
            <div className="productTopLeft">
                <Chart title="Sale In Month" data={productsData} datakey="sales"/>
            </div>
            <div className="productTopRight">
                <div className='productInfoTop'>
                    <img src="/images/3232.webp" alt="test" className='productImages'/>
                    <span className='productName'>Dell LapTop</span>
                </div>
                <div className='productInfobottom'>
                    <div className="productInfoItem">
                        <div className='productInfoKey'>ID: </div>
                        <div className='productInfoValue'>132</div>
                    </div>
                    <div className="productInfoItem">
                        <div className='productInfoKey'>Sales: </div>
                        <div className='productInfoValue'>$90555</div>
                    </div>
                    <div className="productInfoItem">
                        <div className='productInfoKey'>ID: </div>
                        <div className='productInfoValue'>132</div>
                    </div>
                    <div className="productInfoItem">
                        <div className='productInfoKey'>In Stock: </div>
                        <div className='productInfoValue'>No</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
