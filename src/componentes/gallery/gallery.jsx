import React from 'react'

import './gallery.css'

import firstt  from './img/gallery1.png'
import secondd from './img/gallery3.jpg'
import thirdd  from './img/gallery2.png'

export default props => (
<div className='image_flex'>
    <div className='firstt'><img src={firstt}></img></div>
    <div className='secondd'><img src={secondd}></img></div>
    <div className='thirdd'><img src={thirdd}></img></div>
</div>
)