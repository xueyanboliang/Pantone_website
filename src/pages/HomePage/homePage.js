import React, { Component } from 'react'
import './homePage.css'
import Header from '../../components/header/header'
import Content from '../../components/content/content'

class HomePage extends Component {
    render () {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }
}

export default HomePage