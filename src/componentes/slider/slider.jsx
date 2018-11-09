import React, { Component } from "react";
import Slider from "react-slick";

import './slider.css'
import slide_1_img from './img/slide1.png'
import slide_2_img from './img/slide2.png'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='container' id='slider'>
        <Slider {...settings}>
            <div className='slide_1'>
                <div className='slide_1_container'>
                    <div className='bth'>Bluetooth speaker with flexible mount.</div>
                    <div className='connect'>connect</div>
                    <div className='slide_1_text'>Ultra-portable speaker for any adventures – it has a built-in microphone and its unique flexible “tail” mount is designed to be completely universal in any situation. Easily fix Divenamic on a bike wheel, shower head or a bag and enjoy music whenever you want!</div>
                    <img src={slide_1_img}></img>
                </div>
            </div>
            <div className='slide_2'>
                <div className='slide_2_container'>
                    <div className='flx'>Flexible is the feature number 2 for this slide.</div>
                    <div className='custom'>custom</div>
                    <div className='slide_2_text'>Ultra-portable speaker for any adventures – it has a built-in microphone and its unique flexible “tail” mount is designed to be completely universal in any situation. Easily fix Divenamic on a bike wheel, shower head or a bag and enjoy music whenever you want!</div>
                    <img src={slide_2_img}></img>
                </div>
            </div>
        </Slider>
      </div>
    );
  }
}


