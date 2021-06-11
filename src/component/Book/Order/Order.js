import React, { Component } from 'react'
import {connect} from 'react-redux'
import Element from './Element'
import {getBook, fetch_bookDetails} from '../../../redux/ActionCreator'
import Spinner from '../../Spinner/Spinner'
import { Alert } from 'reactstrap'

const mapDispatchToProps=dispatch=>{
    return({
       
        BookItem:()=>dispatch(getBook())
    })
}

const mapStateToProps=state=>{
    return({
        token:state.token,
        userId:state.userId,
        book:state.book
    })
}

export class Order extends Component {
    state={
        condition:true
    }
    componentDidMount(){
        this.props.BookItem()
    }
    render() {
        let order=null
        let condition=true;
        if(this.props.book.length!==0){
            
            order=this.props.book.map((item)=>{
                condition=true
                if(item.userid===this.props.userId){
                    condition=true
                    return <Element item={item} key={Math.random()} />
                }
                else{
                    condition=false
                }
                
            })
        }
        else{
            if(this.state.condition){
                <Spinner/>
                setTimeout(()=>{
                    this.setState({
                        condition:false
                    })
                })
            }
            else{
                order= <Alert  style={{width:'60%',margin:'auto',textAlign:'center'}}>You have no booking</Alert>
            }
           
        }
        
        
        // console.log('Book:',order)
        return (
            <div className='container' style={{ margin: 'auto', width: '100%' }} >
                
                {!condition?<Alert  style={{width:'60%',margin:'auto',textAlign:'center'}}>You have no booking</Alert>:order}
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Order)
