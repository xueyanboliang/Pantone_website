import React, { Component } from 'react'
import './content.css'
import c1 from './assets/c1.png'
import c2 from './assets/c2.png'
import c3 from './assets/c3.png'
import c4 from './assets/c4.png'
import c5 from './assets/c5.png'
import { Carousel } from 'antd';

class Content extends Component {
    render () {
        return (
            <div className="content center">
                <div className="carousel">
                    <Carousel autoplay>
                        <div><img src= {c1} alt=""/></div>
                        <div><img src= {c2} alt=""/></div>
                        <div><img src= {c3} alt=""/></div>
                        <div><img src= {c4} alt=""/></div>
                        <div><img src= {c5} alt=""/></div>
                    </Carousel>
                </div>
            </div>
        )
    } 
}

export default Content