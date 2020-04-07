import React, { Component } from 'react';
import '../../assets/css/category/category.css'
import Async from '../../components/Async'

const Right = Async(() => import('./Right'))
class Category extends Component {
    constructor() {
        super()
        this.state = {
            as: 0
        }
    }
    componentDidMount() {
        //实时屏幕高度 - 头部高度 = 左边高度
        let divLeft = document.getElementsByClassName('category-left')[0]
        console.log(window.innerHeight);
        let heard = document.getElementsByClassName('heard')[0].offsetHeight
        divLeft.style.height = window.innerHeight - heard + 'px'

    }
    //点击
    changFn = (a) => {

        let cateUl = document.getElementsByClassName('left-ul')[0]
        let cateLi = cateUl.getElementsByTagName('li')

        for (let i = 0; i < cateLi.length; i++) {
            cateLi[i].className = 'as'
        }
        cateLi[a].className = 'left-active'

        this.setState({
            as: a
        })


    }


    render() {
        return (
            <div className='category'>

                <div className='category-left'>
                    <ul className='left-ul'>
                        <li className='left-active' onClick={this.changFn.bind(this, 0)}>
                            手机
                    </li>
                        <li onClick={this.changFn.bind(this, 1)}>
                            笔记本
                    </li>
                        <li onClick={this.changFn.bind(this, 2)}>
                            智能硬件
                    </li>
                        <li onClick={this.changFn.bind(this, 3)}>
                            周边配件
                    </li>
                    </ul>
                </div>

                <div className='category-right'>
                    <Right title={this} />
                </div>
            </div>
        );
    }
}

export default Category;