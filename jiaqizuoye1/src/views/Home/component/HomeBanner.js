import React, { Component } from 'react';
import Swiper from "swiper"  //cnpm install swiper --save
import "../../../assets/css/swiper.min.css"
import "../../../assets/css/banner.css"
class HomeBanner extends Component {
    constructor() {
        super()
        this.state = {
            banner: [
                {
                    id: '1',
                    src: require('../../../assets/images/home/banner_1.jpg')
                }, {
                    id: '2',
                    src: require('../../../assets/images/home/banner_2.jpg')
                }, {
                    id: '3',
                    src: require('../../../assets/images/home/banner_3.jpg')
                }, {
                    id: '4',
                    src: require('../../../assets/images/home/banner_4.jpg')
                }, {
                    id: '5',
                    src: require('../../../assets/images/home/banner_5.jpg')
                }
            ]
        }
    }
    //生命周期-组件完全挂载
    componentDidMount() {
        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false
            }
        });
    }
    render() {
        return (
            <div>
                {/* <!-- Swiper --> */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.banner.map((list, key) => {
                                return (
                                    <div className="swiper-slide" key={key}>
                                        <img src={list.src}></img>
                                    </div>
                                )
                            })
                        }
                        {/* <div className="swiper-slide">
                            <img src={this.state.banner[0].src}></img>
                        </div> */}
                    </div>
                    {/* <!-- Add Pagination --> */}
                    <div className="swiper-pagination"></div>
                </div>

            </div>
        );
    }
}

export default HomeBanner;