import React from 'react'
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts'

import './Chart.css'

export default function Chart({title, data, grid}) {
  console.log(data);
  
  return (
    <div className='Chart'>
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4}>
            <LineChart data={data}>
                <XAxis dataKey="Name" stroke='#5550bd'/>
                <Line type="monotone" dataKey="Sale" stroke='#5550bd'/>
                <Tooltip/>
                {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="10"/>}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
