import React from 'react'

import './about_us.css'

import googlle from './logos/Google.svg'
import redbull from './logos/redbull.svg'

export default props => (
    <div className='about_us' id='about_us'>    
        <div className='title_'>WHAT COMPANIES SAY ABOUT US</div>
        <div className='text_'>“Tt is the most solid performer for the price. you could comfortably leave it around a pool edge without any worry”</div>
        <div className='c_logos'>
            <div className='google'><img src={googlle}></img></div>
            <div className='redbull'><img src={redbull}></img></div>
        </div>
        <div className='pink_4yc'>4 YOUR COMPANIE</div>
            
    </div>
)