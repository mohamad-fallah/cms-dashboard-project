import React from 'react';
import Features from '../../components/features/Features'
import './Home.css'
import Chart from '../../components/chart/Chart'
import WidgetSm from '../../components/widgetSm/WidgetSm';
import {xAxisData} from '../../datas';

export default function Home() {
  return (
    <div className='home'>
    <Features/>
    <Chart grid title="Month Sale" data={xAxisData}/>
    <div className='homeWidgets'>
      <WidgetSm/>
    </div>
    </div>
  )
}
 