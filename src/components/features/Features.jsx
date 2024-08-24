import React from 'react'
import './Features.css' 

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Features() {
  return (
    <div className='feature'>
      <div className='FeatureItem'>
        <span className="FeatureTitle">Revanue</span>
        <div className="FeatureContainer">
          <span className="FeatureMoney">$2,439</span>
          <span className='FeatureRate'>
            -11.4 <ArrowDownwardIcon className='FeatureIcon negative'/>
          </span>
        </div>
        <span className="FeatureSub">Compread to last mounth</span>
      </div>
      <div className='FeatureItem'>
        <span className="FeatureTitle">Sales</span>
        <div className="FeatureContainer">
          <span className="FeatureMoney">$4,416</span>
          <span className='FeatureRate'>
            -1.4 <ArrowDownwardIcon className='FeatureIcon negative'/>
          </span>
        </div>
        <span className="FeatureSub">Compread to last mounth</span>
      </div>
      <div className='FeatureItem'>
        <span className="FeatureTitle">Cost</span>
        <div className="FeatureContainer">
          <span className="FeatureMoney">$2,225</span>
          <span className='FeatureRate'>
            +2.4 <ArrowUpwardIcon className='FeatureIcon'/>
          </span>
        </div>
        <span className="FeatureSub">Compread to last mounth</span>
      </div>
    </div>
  )
}
