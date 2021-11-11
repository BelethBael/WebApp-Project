import React from "react";
import { ImBin } from 'react-icons/im'
// import { TextField } from "@mui/material";
// import Input from '@mui/material/Input';
// import { Box } from "@mui/system";

import { withRouter } from "../withRouter/withRouter";
import { connect } from 'react-redux';
import './Checkout.css'

import Swal from 'sweetalert2'
// import 'sweetalert2/src/sweetalert2.scss'

class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            address: '',
            tel: '',
            email: ''
        }

    }

    onInputText = (e, head) => {
        // console.log("Text");
        if (head == "FIRSTNAME") {
            this.setState({ firstname: e.target.value })
            // console.log(this.state.firstname);

        }
        else if (head == "LASTNAME") {
            this.setState({ lastname: e.target.value })
            console.log(this.state.lastname);

        }
        else if (head == "ADDRESS") {
            this.setState({ address: e.target.value })
            console.log(this.state.address);
        }
        else if (head == "TEL") {
            this.setState({ tel: e.target.value })
            console.log(this.state.tel);
        }
        else if (head == "EMAIL") {
            this.setState({ email: e.target.value })
            console.log(this.state.email);
        }
    }

    onPlaceOrder = () => {
        console.log("Place order");
        let data = JSON.parse(JSON.stringify(this.props.cartData));
        let email = JSON.parse(JSON.stringify(this.state.email));
        let invoiceID = "331450"
        // console.log(data)
        for (let i = 0; i < data.length; i++) {
            data[i].email = email
            data[i].invoiceID = invoiceID
            // console.log(data)
        }
        console.log(data)

        Swal.fire({
            title:'Complete your order!',
            text:'click to go back',
            icon:'success'

        }).then((()=>{
            console.log("ASD");
            this.props.history("/")
            // this.props.history("/checkout")
        }))

        // ----------------------- POST data to back-end server ----------------------- //

        // const recipeUrl = 'http://localhost:3001/create_invoice';

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

    render() {
        let totalPrice = 0
        let discount = 0
        let totalItems = 0

        const listItems = this.props.cartData.map((data) => {
            totalPrice += data.price * data.quantity
            totalItems += data.quantity
            // console.log(data.id)
            return (
                <div className='tableRowCart'>
                    <div className='itemDetails' style={{ width: '70%' }}>
                        <img className='item-img-cart' src={data.img}></img>
                        <p>{data.name}</p>
                    </div>
                    {/* PLATFORM */}
                    <div className='itemDetails' style={{ width: '10%', justifyContent: 'center' }}>
                        {data.platform}
                    </div>
                    {/* REGION */}
                    <div className='itemDetails' style={{ width: '10%', justifyContent: 'center' }}>
                        {data.region}
                    </div>
                    {/* QUANTITY */}
                    <div className='itemDetails' style={{ width: '10%', justifyContent: 'center' }}>
                        {data.quantity}
                    </div>
                    {/* SUBTOTAL */}
                    <div className='itemDetails' style={{ width: '10%', justifyContent: 'center' }}>
                        {data.price}
                    </div>
                </div>
            )
        })

        return (
            <div className="main-check">
                {/* ----------------------- TOP ----------------------- */}
                <div className='top-checkout'>
                    <div className='logo-checkout'>
                        KGK
                    </div>

                    <div className='head'>
                        SECURE CHECKOUT
                    </div>

                    <div className='blank'>

                    </div>
                </div>

                <div className='input-checkout'>
                    <div className='input-head' style={{ fontSize: "36px", paddingBottom: "20px" }}>
                        BILLING INFORMATION
                    </div>
                    <div className='input-box'>
                        <div style={{ paddingBottom: "10px" }}>FIRST NAME</div>
                        <input className='input-field' onChange={(e) => this.onInputText(e, "FIRSTNAME")}></input>
                    </div>
                    <div className='input-box'>
                        <div style={{ paddingBottom: "10px" }}>LAST NAME</div>
                        <input className='input-field' onChange={(e) => this.onInputText(e, "LASTNAME")}></input>
                    </div>
                    <div className='input-box'>
                        <div style={{ paddingBottom: "10px" }}>ADDRESS</div>
                        <input className='input-field' onChange={(e) => this.onInputText(e, "ADDRESS")}></input>
                    </div>
                    <div className='input-box'>
                        <div style={{ paddingBottom: "10px" }}>PHONE</div>
                        <input type='number' className='input-field' onChange={(e) => this.onInputText(e, "TEL")}></input>
                    </div>
                    <div className='input-box'>
                        <div style={{ paddingBottom: "10px" }}>EMAIL</div>
                        <input className='input-field' onChange={(e) => this.onInputText(e, "EMAIL")}></input>
                    </div>
                </div>

                <div className='show-price-items'>
                    <div>TOTAL {totalPrice} BATH</div>
                </div>

                <div className='place-order' onClick={this.onPlaceOrder}>
                    PLACE ORDER
                </div>

                <div className='tableCart' >
                    <div className='tableHeadCart'>
                        <h4 style={{ display: 'flex', justifyContent: 'center', width: '50%', padding: '20px' }}>PRODUCT</h4>
                        <h4 style={{ display: 'flex', justifyContent: 'center', width: '10%', padding: '20px' }}>PLATFORM</h4>
                        <h4 style={{ display: 'flex', justifyContent: 'center', width: '10%', padding: '20px' }}>REGION</h4>
                        <h4 style={{ display: 'flex', justifyContent: 'center', width: '10%', padding: '20px' }}>QUANTITY</h4>
                        <h4 style={{ display: 'flex', justifyContent: 'center', width: '10%', padding: '20px' }}>SUBTOTAL</h4>
                        <h4 style={{ display: 'flex', justifyContent: 'center', width: '10%', padding: '20px' }}></h4>
                    </div>

                    {listItems}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartData: state.cartReducer.data
    };
};

export default withRouter(connect(mapStateToProps)(Checkout))