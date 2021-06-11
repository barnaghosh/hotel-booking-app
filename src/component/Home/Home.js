import React, { Component } from 'react'
import Example from './HeaderImg'
import MenuItem from './MenuItem'
import {Row} from 'reactstrap'
import img3 from '../asset/single/pic1.jpg'
import img4 from '../asset/double/1.jpg'
import img5 from '../asset/triple/1.jpg'
import Service from './Service'
import './Menu.css'
// import FontAwesome from 'react-fontawesome'


export class Home extends Component {
    single=()=>{
        this.props.history.push('/room/single')
    }
    double=()=>{
        this.props.history.push('/room/double')
    }
    triple=()=>{
        this.props.history.push('/room/triple')
    }
    render() {
        // console.log('Home:',this.props)
        let bycle=<i className="fa fa-bicycle" style={{fontSize:'30px'}}></i>
        let coffee=<i className="fa fa-coffee" style={{fontSize:'30px'}}></i>
        let medi=<i className="fa fa-medkit" style={{fontSize:'30px'}}></i>
        let wifi=<i className="fa fa-wifi" style={{fontSize:'30px'}}></i>
        
        
        return (
            <div>
                
                <div style={{marginBottom:'20px'}}>
                <Example />
                </div>
                <div className='menu container' >
                    <h3 style={{textAlign:'center'}}>Catagory of Rooms</h3>
                    <div style={{display:'flex'}} >
                    <MenuItem img={img3} text='View single bed rooms' go={this.single} />
                    <MenuItem img={img4} text='View double bed rooms' go={this.double} />
                    <MenuItem img={img5} text='View triple bed rooms' go={this.triple}/>
                    </div>
                </div>
                <div className='service' style={{padding:'20px 0px'}}>
                    <div className='container'>
                    <h3 style={{textAlign:'center',marginBottom:'10px'}}>Free Services</h3>
                    <div style={{display:'flex'}} >
                        <div className='d-flex flex-md-row flex-column'>

                            <Service icon={bycle} type='Free Bycle Ride' />
                            <Service icon={coffee} type='Free Breakfast Coffee' />
                            <Service icon={medi} type='Free First-Aid' />
                            <Service icon={wifi} type='Free Wifi' />
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
