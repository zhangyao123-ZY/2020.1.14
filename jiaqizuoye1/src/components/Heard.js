import React, { Component } from 'react';
import '../assets/font/iconfont.css'
import '../assets/css/Heard.css'
class Heard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: '蓝果小镇商城',
            flag: false
        }
    }
    // componentWillMount生命周期-组件将要挂载
    componentWillMount() {
        //console.log(this.props);

        this.changFn(this.props.title.props)
    }
    //父组件改变props传值的时候执行
    componentWillReceiveProps(newprops) {
        //  console.log(this.props);
        // console.log(newprops);

        this.changFn(newprops.title.props)
        //console.log(this.state.activeClass)
    }
    changFn = (props) => {

        switch (props.location.pathname) {
            case '/mobile/home':
                this.setState({
                    msg: '蓝果小镇商城',
                    flag: false
                })
                break;
            case '/mobile/category':
                this.setState({
                    msg: '分类',
                    flag: false
                })
                break;
            case '/mobile/cart':
                this.setState({
                    msg: '购物车',
                    flag: false
                })
                break;
            case '/mobile/mine':
                this.setState({
                    msg: '个人中心',
                    flag: false
                })
                break;
            case '/mobile/produc':
                this.setState({
                    msg: '商品详情',
                    flag: true
                })
                break;
            default:
                break;
        }
    }
    //点击返回
    fanHui = () => {
        console.log(this.props);

    }
    render() {
        return (
            <div className='heard'>
                <div className='first' onClick={this.fanHui.bind(this)}><i className='iconfont icon-fanhui'></i></div>
                <div className={this.state.flag ? 'four flag' : 'four '}><i className='iconfont icon-delete'></i></div>
                <div className='two'>{this.state.msg}</div>
                <div className='three'><i className='iconfont icon-yunpanlogo-'></i></div>
            </div>
        );
    }
}

export default Heard;