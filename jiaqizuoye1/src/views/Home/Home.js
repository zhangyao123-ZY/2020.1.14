import React, { Component } from 'react';

import Async from "../../components/Async"

const HomeBanner = Async(() => import('./component/HomeBanner'))
const HomeMain = Async(() => import('./component/HomeMain'))
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>

                <HomeBanner />
                <HomeMain title={this} />

            </div>
        );
    }
}

export default Home;