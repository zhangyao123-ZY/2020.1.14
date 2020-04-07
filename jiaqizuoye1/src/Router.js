import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Async from './components/Async'

const Footer = Async(() => import('./components/Footer'))

// import Footer from './components/Footer'
class RouterComp extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <React.Fragment>
                        <Switch>
                            <Route path='/mobile' component={Footer}></Route>

                            {/* 初始路径 Redirect 路由重定向*/}
                            <Redirect to={"/mobile/home"}></Redirect>
                        </Switch>
                    </React.Fragment>
                </Router>
            </React.Fragment>
        );
    }
}

export default RouterComp;