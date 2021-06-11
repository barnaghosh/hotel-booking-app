import React, { Component } from 'react'
import img1 from '../asset/single/pic1.jpg'
import img2 from '../asset/single/pic2.jpg'
import img3 from '../asset/single/pic3.jpg'
import img4 from '../asset/single/pic4.jpg'
import img5 from '../asset/single/pic5.jpg'
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

export class Single extends Component {
    
    
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
        
        // console.log(`Single1: ${single1}, Single2:${single2},Single3:${single3}, Single4: ${single4}`)
        const imgArr=[ {src:img5,type:'Superior King  Room',opp:{type:'Single bed Room',area:'50 m^2',view:'mountain view & sea view',tv:'Smart Flat-screen TV',wifi:'Free wifi',break:true,dinner:true},des:'1 extra-large double bed ',Total:4,price:3000},

        {src:img2,type:'Family deluxe  Room',opp:{type:'Single bed Room',area:'45 m^2',view:'sea view',tv:'',wifi:'Free wifi',break:true,dinner:false},des:'1 large single  bed ',Total:5,price:2500},
            
        {src:img4,type:'Family Standard Room',opp:{type:'Single bed Room',area:'37 m^2',view:'',tv:'Flat-screen TV',wifi:'Free wifi',break:false,dinner:false},des:'1 large single bed ',Total:7,price:2000},
       
        {src:img3,type:'Family room',opp:{type:'Single bed Room',area:'30 m^2',view:'',tv:'',wifi:'Free wifi',break:false,dinner:false},des:'1 single bed ',Total:9,price:1500}
        ]
        return (
            <div className='container' style={{padding:'20px 0px'}} >
              {/* <h1 style={{textAlign:'center'}}>Single</h1>   */}
              <Room imgArr={imgArr} room='single' bookButton={this.Book} signup={this.signup} login={this.login} book={this.props.book} />
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Single)
