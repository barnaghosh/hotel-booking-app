import React, { Component } from 'react'
import Auth from './Auth'

export class Login extends Component {
    componentDidMount(){
        // console.log('Login Props:',this.props)
    }
    render() {
        return (
            <div className='container'>
                
                <Auth auth='Login' />

            </div>
        )
    }
}

export default Login
