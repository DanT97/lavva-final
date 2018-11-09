import React from 'react'

import './flex.css'

export default props =>(
    <div className='flex' id='flex'>
        <div className='first'>
            <div className='diive'>Diive</div>
            <div className='ioo'>in or out</div>
            <div className='shadow'>
                <a  href='/sec' className='plus'>+</a>
            </div>            
        </div>
        <div className='second'>
            <div className='diive'>Diive</div>
            <div className='idd'>IN DEEP</div>
            <div className='shadow'>
                <div className='plus'>+</div>
            </div>
        </div>
        <div className='third'>
            <div className='diive'>Diive</div>
            <div className='ipp'>IN PARTY</div>
            <div className='shadow'>
                <div className='plus'>+</div>
            </div>
           
        </div>
    </div>
)