import React from 'react'

import './instagram.css'

import first_gram  from './img/Layer 19.png'
import second_gram from './img/Layer 20.png'
import third_gram  from './img/Layer 21.png'
import fourth_gram from './img/Layer 22.png'
import fifth_gram  from './img/Layer 23.png'
import sixth_gram  from './img/Layer 24.png'

export default props =>(
    <div className='insta_container' id='instagram'>
        <div className='community'>Join the our community of friends</div>
        <div className='diivein'>#diivein</div>
        <div className='flex_gram_1'>
            <div className='second_gram'><img src={second_gram}/></div>     
            <div className='fourth_gram'>
                <img src={fourth_gram} className='img_1'/>
                <img src={fifth_gram} className='img_2'/>
            </div>     
            <div className='first_gram'><img src={first_gram}/></div>      
            <div className='third_gram'><img src={third_gram}/></div>
            <div className='sixth_gram'><img src={sixth_gram}/></div>       
        </div>
    </div>
)