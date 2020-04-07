import React, { Component } from 'react';

class Right extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: [
                [{
                    id: '1',
                    src: require('../../assets/images/home/p1.jpg'),
                    title: '手机'
                }, {
                    id: '2',
                    src: require('../../assets/images/home/p2.jpg'),
                    title: '手机'
                }, {
                    id: '3',
                    src: require('../../assets/images/home/p3.jpg'),
                    title: '手机'
                }], [{
                    id: '01',
                    src: require('../../assets/images/home/p4.jpg'),
                    title: '电脑'
                }], [{
                    id: '1',
                    src: require('../../assets/images/home/p6.jpg'),
                    title: '智能硬件'
                }, {
                    id: '2',
                    src: require('../../assets/images/home/p1.jpg'),
                    title: '智能硬件'
                }], [{
                    id: '1',
                    src: require('../../assets/images/home/p4.jpg'),
                    title: '配件'
                }, {
                    id: '2',
                    src: require('../../assets/images/home/p3.jpg'),
                    title: '配件'
                }]
            ]
        }

    }
    render() {
        return (
            <div id='right'>
                {
                    this.state.lists[this.props.title.state.as].map((list, key) => {
                        return (<li key={key}><img src={list.src}></img><p>{list.title}</p></li>)
                    })
                }
            </div>
        );
    }
}

export default Right;