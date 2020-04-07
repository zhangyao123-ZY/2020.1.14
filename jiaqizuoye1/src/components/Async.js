import React, { Component } from 'react';



export default function AsyncCom(importComponent) {
    class Async extends Component {
        constructor(props) {
            super(props)
            this.state = {
                CompontData: null
            }
        }
        async componentDidMount() {
            const { default: component } = await importComponent()
            this.setState({
                CompontData: component
            })
        }
        render() {
            const A = this.state.CompontData
            return A ? <A{...this.props} /> : null
        }
    }
    return Async
}