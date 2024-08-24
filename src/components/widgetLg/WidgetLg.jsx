import React from 'react'
import './WidgetLg.css'
import { Transactions } from '../../datas'


export default function WidgetLg() {
    //btn component for change color
    const Button = ({type}) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }

  return (
    <div className='widgetLg'>
        <h3 className='widgetLgTitle'>Lates TransActions</h3>
        <table className='widgetLgTable'>
            <tr className='widgetLgTr'>
                <th className='widgetLgTh'>Customer</th>
                <th className='widgetLgTh'>Date</th>
                <th className='widgetLgTh'>Amout</th>
                <th className='widgetLgTh'>Atstus</th>
            </tr>
            {Transactions.map((transaction) => (
                <tr key={transaction.id} className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src={transaction.img} alt="lorem" className='widgetLgImg'/>
                    <span className='widgetLgName'>{transaction.customer}</span>
                </td>
                <td className='widgetLgDate'>{transaction.date}</td>
                <td className='widgetLgAmount'>{transaction.amount}</td>
                <td className='widgetLgStatus'>
                    <Button type={transaction.status}/>
                </td>
            </tr>
            ))}
        </table>
    </div>
  )
}
