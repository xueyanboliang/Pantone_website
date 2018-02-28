import React, { Component } from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage/homePage'

class Routes extends Component {

    render () {
        return (
            <Router>
                <div>
                    <Route path="/" component={HomePage} />
                </div>
            </Router>
        );
    }
}


export default Routes;