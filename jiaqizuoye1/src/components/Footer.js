import React, { Component } from 'react';
import '../assets/css/Footer.css'
import { Route, Switch } from "react-router-dom"
import Async from './Async'
//按需引入
const Heard = Async(() => import('./Heard'))
const Product = Async(() => import('../views/Product/Product'))
const Home = Async(() => import('../views/Home/Home'))
const Cart = Async(() => import('../views/Cart/Cart'))
const Category = Async(() => import('../views/Category/Category'))
const Mine = Async(() => import('../views/Mine/Mine'))

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    //点击跳转组件 传入要跳转的URL
    goUrl = (url) => {
        //把URL替换 进行跳转
        this.props.history.replace(url);
    }
    // componentWillMount生命周期-组件将要挂载
    componentWillMount() {
        //  console.log(this.props);

        this.colorFn(this.props)
    }
    //父组件改变props传值的时候执行
    componentWillReceiveProps(newprops) {

        this.colorFn(newprops)
        //console.log(this.state.activeClass)
    }
    //添加 activeClass 方便css效果显现
    mapData = () => {
        this.setState({
            activeClass: {
                activeHome: false,
                activeCategory: false,
                activeCart: false,
                activeMine: false
            }
        })
    }

    //点击颜色变换 函数
    colorFn = (props) => {
        this.mapData()
        switch (props.location.pathname) {
            case '/mobile/home':
                this.setState({
                    activeClass: {
                        activeHome: true
                    }
                })
                break;
            case '/mobile/category':
                this.setState({
                    activeClass: {
                        activeCategory: true
                    }
                })
                break;
            case '/mobile/cart':
                this.setState({
                    activeClass: {
                        activeCart: true
                    }
                })
                break;
            case '/mobile/mine':
                this.setState({
                    activeClass: {
                        activeMine: true
                    }
                })
                break;

            default:
                break;
        }
    }
    render() {
        return (
            <div>
                <Heard title={this} />
                {/* 路径 */}
                <React.Fragment>
                    <Switch>
                        <Route path='/mobile/home' component={Home}></Route>
                        <Route path='/mobile/category' component={Category}></Route>
                        <Route path='/mobile/cart' component={Cart}></Route>
                        <Route path='/mobile/mine' component={Mine}></Route>
                        <Route path='/mobile/produc' component={Product}></Route>
                    </Switch>
                </React.Fragment>

                <div className='footer'>
                    <ul onClick={this.goUrl.bind(this, '/mobile/home')}>
                        <li className={this.state.activeClass.activeHome ? "icon home-active" : "icon home"}> </li>
                        <li className={this.state.activeClass.activeHome ? 'text-active' : 'text'}> 首页 </li>
                    </ul>
                    <ul onClick={this.goUrl.bind(this, '/mobile/category')}>
                        <li className={this.state.activeClass.activeCategory ? 'icon category-active' : 'icon category'}> </li>
                        <li className={this.state.activeClass.activeCategory ? 'text-active' : 'text'}> 分类 </li>
                    </ul>
                    <ul onClick={this.goUrl.bind(this, '/mobile/cart')}>
                        <li className={this.state.activeClass.activeCart ? 'icon cart-active' : 'icon cart'}> </li>
                        <li className={this.state.activeClass.activeCart ? 'text-active' : 'text'}> 购物车 </li>
                    </ul>
                    <ul onClick={this.goUrl.bind(this, '/mobile/mine')}>
                        <li className={this.state.activeClass.activeMine ? 'icon mine-active' : 'icon mine'}> </li>
                        <li className={this.state.activeClass.activeMine ? 'text-active' : 'text'}> 我的 </li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Footer;