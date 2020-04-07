import React, { Component } from 'react';

import Async from '../../../components/Async'
import '../../../assets/css/homeMain.css'
const Product = Async(() => import('../../Product/Product'))
class HomeMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: [{
                id: '1',
                src: 'https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536614559343.jpg',
                title: '手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机',
                price: '3999',
                xiao: '500'
            }, {
                id: '2',
                src: require('../../../assets/images/home/p1.jpg'),
                title: '手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机',
                price: '3999',
                xiao: '500'
            }, {
                id: '3',
                src: require('../../../assets/images/home/p2.jpg'),
                title: '手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机',
                price: '3999',
                xiao: '500'
            }, {
                id: '4',
                src: require('../../../assets/images/home/p3.jpg'),
                title: '手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机',
                price: '3999',
                xiao: '500'
            }, {
                id: '5',
                src: require('../../../assets/images/home/p4.jpg'),
                title: '手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机',
                price: '3999',
                xiao: '500'
            }, {
                id: '6',
                src: require('../../../assets/images/home/p6.jpg'),
                title: '手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机',
                price: '3999',
                xiao: '500'
            }]
        }
    }
    //点击跳转组件 传入要跳转的URL
    goUrl = (url) => {
        console.log(this.props.title.props.history);
        //把URL替换 进行跳转
        this.props.title.props.history.replace(url);
    }
    render() {
        return (
            <div>
                <div className='main'>

                    {
                        this.state.lists.map((list, key) => {
                            return (
                                <div className='item' onClick={this.goUrl.bind(this, '/mobile/produc')} key={key}>
                                    <img src={list.src} />
                                    <p className='title'>{list.title}</p>
                                    <p className='price'><span className='price-left'>{list.price}</span><span className='price-right'>{list.price}</span></p>
                                    <p className='xiao'>
                                        <span>新品</span>
                                        <span>销量：<span>{list.xiao}</span></span>
                                    </p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        );
    }
}

export default HomeMain;