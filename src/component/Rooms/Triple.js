import React, { Component } from 'react'
import img1 from '../asset/triple/1.jpg'
import img2 from '../asset/triple/2.jpg'
import img3 from '../asset/triple/3.jpg'
import img4 from '../asset/triple/4.jpg'
import img5 from '../asset/triple/5.jpg'
import Room from '../Basic room/Room'
import {connect, coonect} from 'react-redux'
import {getBook, fetch_bookDetails} from '../../redux/ActionCreator'

const mapDispatchToProps=dispatch=>{
    return({
        bookDetails:(details)=>dispatch(fetch_bookDetails(details)),
        BookItem:()=>dispatch(getBook())
    })
}

const mapStateToProps=state=>{
    return({
        book:state.book
    })
}

export class Triple extends Component {
    Book=(e)=>{
        // console.log('Single Submit Values:',e)
        this.props.bookDetails(e)
        this.props.history.push('/book')
    }
    signup=()=>{
        this.props.history.push('/signup')
    }
    login=()=>{
        this.props.history.push('/login')
    }
    componentDidMount(){
        this.props.BookItem()
    }
    render() {
        const imgArr=[{src:img4,type:'Premier Triple Room',opp:{type:'Hotel Room',area: '60 m^2', view: 'mountain view & sea view', tv: 'Flat-screen TV', wifi: 'Free wifi',break:true,dinner:true},des:'1 extra-large double bed ',Total:4,price:8000},
        {src:img5,type:'Deluxe Triple Room',opp:{type:'Hotel Room',area: '50 m^2', view:'sea view',tv:'',wifi:'Free wifi',break:true,dinner:false},des:'1 extra-large  bed ',Total:5,price:7000},
        {src:img3,type:'Super Triple Room',opp:{type:'Hotel Room',area: '40 m^2', view: 'mountain view', tv: 'Flat-screen TV', wifi: 'Free wifi' },des:'1 large  bed ',Total:5,price:6000},
        {src:img2,type:'Standard Triple Room',opp:{type:'Hotel Room',area: '37 m^2',view:'',tv:'',wifi:'Free wifi',break:false,dinner:false},des:'1 large  bed ',Total:6,price:5000}]
        return (
            <div className='container'  style={{padding:'20px 0px'}}>
              {/* <h1 style={{textAlign:'center'}}>Triple</h1>   */}
              <Room imgArr={imgArr} room='triple' bookButton={this.Book} signup={this.signup} login={this.login} book={this.props.book}/>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Triple)

