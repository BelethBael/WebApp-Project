import React from 'react'
import './Top.css'

import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
// import ReactSearchBox from 'react-search-box'


class Top extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    handleClick =()=> {
        // this.props.history.push("/cart")
        // console.log("Click");
        // const recipeUrl = 'http://localhost:3001/create_invoice';
        // const data = [
        //   {
        //     name: "king",
        //     type: "your moawd"
        //   },
        //   {
        //     name: "copter",
        //     type: "your dad"
        //   }
        // ];

        // const requestMetadata = {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        //   };
      
        //   fetch(recipeUrl, requestMetadata)
        //     .then(res => res.json())
        //     .then(recipes => {
        //       console.log("Success: " + recipes)
        //       // this.setState({ recipes });
        //     })
        //     .catch(error => {
        //       console.log(error)
        //     })



    }

    render(){
        return(
            <div className="mainTop">
                <div className='logo'>
                    KGK
                </div>

                <div className='search-container'>
                    <div className='search-head'>
                        <Input className='search-bar' placeholder='Search Your Game'></Input>
                    </div>

                    <div style={{height:'20%'}}></div>

                    <div className='head-topic'>
                        <h3>TOP-UP</h3>
                        <h3>SELL</h3>
                        <h3>DAILY DEALS</h3>
                        <h3>NEWS</h3>
                        <h3>COMMING SOON</h3>
                    </div>
                </div>

                <div className='icon'>
                    <BiUserCircle size={40}></BiUserCircle>
                    <p>Sign In</p>
                    <Link to={{
                        pathname:"/cart"
                    }}>
                        <AiOutlineShoppingCart size={40} onClick={this.handleClick}></AiOutlineShoppingCart>
                    </Link>
                </div>

            </div>
        )
    }
}

export default Top