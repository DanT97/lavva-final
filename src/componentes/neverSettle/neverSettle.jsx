import React from 'react'

import './neverSettle.css'
import diive from './img/diive_blue.png'

export default props => (
    <div className='container_1' id='entry'>
        <div className='AAA'>AnyPlace,Anywhere,Anytime!</div>
        <div className='never'>NEVER</div>
        <div className='settle'>SETTLE</div>
        <div className='bwr'>Best water-resistant bluetooth speaker with flexible mount for a small price!</div>
        <div className='shadow_price'>
            <div className='price'>
                15$                     
            </div>
        </div>
        <img src={diive}></img>
    </div>
)