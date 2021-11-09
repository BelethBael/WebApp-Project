import './Cart.css'
import React from 'react'
import {ImBin} from 'react-icons/im'

import { withRouter } from '../withRouter/withRouter';

import { connect } from 'react-redux';
import { clearCart } from '../../redux/actions/cart';
import { delethItemCart } from '../../redux/actions/cart';

class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items:this.props.items,
            cart:this.props.cart
        }
    }

    // addNewProduct =()=> {
    //     let num = Math.floor(Math.random() * 5);

    //     if(this.state.cart.length == 0){
    //         this.state.items[num].quantity = 1
    //         this.setState({
    //             cart:this.state.cart.concat(this.state.items[num])
    //         })

    //     }
    //     else{
    //         let check = false
    //         let numCheck = 0
    //         for(let i = 0; i<this.state.cart.length; i++){
    //                 // console.log(this.state.cart[i])
    //                 // console.log(this.state.items[num])
    //                 if(this.state.cart[i].id == this.state.items[num].id){
    //                     check = true
    //                     numCheck = i
    //                     break
    //                 }

    //         }
    //         if(check == true){
    //             let data = this.state.cart
    //             data[numCheck].quantity += 1
    //             this.setState({cart:data})
    //         }
    //         else{
    //             // console.log(this.state.items[num])
    //             this.state.items[num].quantity = 1
    //             this.setState({cart:this.state.cart.concat(this.state.items[num])})
    //         }
    //     }
    // }

    clearItems =()=> {
        // this.setState({cart:[]})
        // for(let i = 0; i<this.state.items; i++){
        //     this.state.items[i].quantity = 1
        // }

        this.props.clearCart()
        this.forceUpdate()
    }
    
    delethItem =(id)=> {
        // console.log("Item want to deleth: "+id)
        this.props.delethItemCart(id)
        this.forceUpdate()
        // for(let i = 0; i<this.state.cart.length; i++){
        //     if(this.state.cart[i].id == id){
        //         let data = this.state.cart
        //         data[i].quantity -= 1

        //         if(data[i].quantity == 0){
        //             console.log("quan0")
        //             data.splice(i,1)
        //             this.setState({cart:data})
        //         }
        //         else{
        //             this.setState({cart:data})
        //         }
        //         break
        //     }
        // }
    }

    goCheckout =()=> {
        if(this.props.cartData.length != 0){
            this.props.history("/checkout")
        }
    }

    componentDidMount(){
        // console.log(this.props.params.id)
    }

    render(){
        console.log("Cart")
        let totalPrice = 0
        let discount = 0
        let totalItems = 0

        const listItems = this.props.cartData.map((data) => {
            totalPrice += data.price*data.quantity
            totalItems += data.quantity
            // console.log(data.id)
            return(
                        <div className='tableRowCart'>
                            <div className='itemDetails' style={{width:'50%'}}>
                                <img className='item-img-cart' src={data.img}></img>
                                <p>{data.name}</p>
                            </div>
                            {/* PLATFORM */}
                            <div className='itemDetails' style={{width:'10%', justifyContent:'center'}}>
                                    {data.platform}
                            </div>
                            {/* REGION */}
                            <div className='itemDetails' style={{width:'10%', justifyContent:'center'}}>
                                    {data.region}
                            </div>
                            {/* QUANTITY */}
                            <div className='itemDetails' style={{width:'10%', justifyContent:'center'}}>
                                    {data.quantity}
                            </div>
                            {/* SUBTOTAL */}
                            <div className='itemDetails' style={{width:'10%', justifyContent:'center'}}>
                                    {data.price}
                            </div>
                            {/* DELETH */}
                            <div className='itemDetails' style={{width:'10%', justifyContent:'center'}}>
                                    <ImBin size={25} onClick={()=>{this.delethItem(data.id)}}></ImBin>
                            </div>
                        </div>
            )
        })

        return(
            <div className='mainCart'>
                <div className='headCart'>
                    <h2>MY CART</h2>
                </div>
                <div className='bodyCart'>
                    <div className='tableCart'>
                        <div className='tableHeadCart'>
                            <h4 style={{display:'flex',justifyContent:'center' ,width:'50%', padding:'20px'}}>PRODUCT</h4>
                            <h4 style={{display:'flex',justifyContent:'center' ,width:'10%', padding:'20px'}}>PLATFORM</h4>
                            <h4 style={{display:'flex',justifyContent:'center' ,width:'10%', padding:'20px'}}>REGION</h4>
                            <h4 style={{display:'flex',justifyContent:'center' ,width:'10%', padding:'20px'}}>QUANTITY</h4>
                            <h4 style={{display:'flex',justifyContent:'center' ,width:'10%', padding:'20px'}}>SUBTOTAL</h4>
                            <h4 style={{display:'flex',justifyContent:'center' ,width:'10%', padding:'20px'}}></h4>
                        </div>

                        {listItems}

                    </div>

                    <div className='underBodyCart'>
                        <div style={{width:'70%',padding:'20px'}}>
                            <p>{totalItems} ITEMS</p>
                        </div>
                        <div className='checkoutCart'>
                            <div style={{display:'flex', flexDirection:'row',paddingBottom:'10px'}}>
                                <div style={{width:'25%'}}>TOTAL</div>
                                <div style={{width:'50%'}}></div>
                                <div style={{width:'25%',display:'flex',flexDirection:'row-reverse'}}>{totalPrice} BATH</div>
                            </div>
                            <div style={{display:'flex', flexDirection:'row',paddingBottom:'30px'}}>
                                <div style={{width:'25%'}}>DISCOUNT</div>
                                <div style={{width:'50%'}}></div>
                                <div style={{width:'25%',display:'flex',flexDirection:'row-reverse'}}>- BATH</div>
                            </div>
                            <div style={{height:'0.5px',width:'100%',border:'0.5px solid white',backgroundColor:'white'}}></div>
                            <div style={{display:'flex', flexDirection:'row',paddingTop:'30px',paddingBottom:'10px',fontSize:'20px'}}>
                                <div style={{width:'25%'}}>TOTAL</div>
                                <div style={{width:'50%'}}></div>
                                <div style={{width:'25%',display:'flex',flexDirection:'row-reverse'}}>{totalPrice-discount} BATH</div>
                            </div>
                            <div className='checkoutBut' onClick={this.goCheckout}>
                                SECURE CHECKOUT
                            </div>
                            {/* <div className='checkoutBut' onClick={this.addNewProduct}>ADD RANDOM NEW PRODUCT</div> */}
                            <div className='checkoutBut' onClick={this.clearItems}>CLEAR</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemData: state.itemReducer.data,
        cartData: state.cartReducer.data
    };
};

const mapDispatchToProps =(dispatch) => {
    return {
        clearCart: ()=> dispatch(clearCart()),
        delethItemCart: (data)=> dispatch(delethItemCart(data))
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Cart))