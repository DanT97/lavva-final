import React , {Component} from 'react'

import './sec.css'
import girll from './video/HipHop_Video1_1.mp4'

class Secundary extends Component {
    render() {
        return(
            <div className='secundary_cont'>
                <div className='container_2'>
                    <div className='close'><a href='/#diive'><i class="fas fa-times"></i></a></div>
                    <div className='diive_2'>Diive</div>
                    <div className='ioro'>in or out</div>
                    <div className='sec_txt'>In or out. Thanks to this ultra-portable speaker for any adventures – it has a built-in microphone and its unique flexible “tail” mount is designed to be completely universal in any situation. </div>
                    <div className='girl_id'>
                        <div className='shadow_pink'>
                            <div className='oval'></div>
                        </div>
                        <div className='namee'>Beatriz, 16 years</div>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <video src={girll} autoPlay='true' loop='true' muted='true'></video>
                </div>
            </div>
        )
    }
}

export default Secundary;