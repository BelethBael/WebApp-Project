import React from 'react'
import './Items-show.css'
import { FaCartPlus } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import { MdNavigateNext } from 'react-icons/md'

import { withRouter } from '../withRouter/withRouter'

import { connect } from "react-redux";
import { addCart } from '../../redux/actions/cart'

class Items extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            head: this.props.name,
            items: this.props.itemData,
            cart: this.props.cart
        }
    }

    onClickItem = (id) => {
        // console.log(id);
        this.props.history("/item/" + id)
    }

    addCart = (id) => {
        console.log("Add cart: " + id)

        // let data = []
        // for(let i = 0;i<this.state.items.length; i++){
        //     // console.log(id)
        //     if(id == this.state.items[i].id){
        //         data.push(this.state.items[i])
        //         this.setState({cart:this.state.cart.concat(data)})
        //         console.log(this.state.cart)
        //         break
        //     }
        // }

        let data = []
        for (let i = 0; i < this.props.itemData.length; i++) {
            // console.log(id)
            if (id == this.props.itemData[i].id) {
                // console.log(this.props.itemData[i]);
                this.props.updateCart(this.props.itemData[i])
                break

            }
        }

    }

    heartCheck =()=> {
        console.log("Heart check");
        console.log("From cart: ");
        console.log(this.props.cartData);
        console.log("From item: ");
        console.log(this.props.itemData);
    }

    componentDidMount() {
        // console.log(this.props.itemData)
        // this.setState({items:this.props.itemData})
    }

    render() {
        // console.log(this.state.items);
        const listItems = this.props.itemData.map((data) => {
            return (
                <div className='items'>
                    <img src={data.img}
                        className='item-img' onClick={() => this.onClickItem(data.id)}></img>
                    <div className='item-details'>
                        <div className='item-inside-details' style={{ height: '80px', width: '100%' }}>{data.name}</div>
                        {/* <div style = {{height:'40px', backgroundColor:'white'}}></div> */}
                        <div style={{ height: '0.5px', width: '100%', backgroundColor: '#00295E' }}></div>
                        <div className='item-inside-details' style={{ height: '40px', width: '100%' }}>
                            <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <p>{data.price} Bath</p>
                            </div>
                            <AiFillHeart onClick={this.heartCheck} style={{ width: '25%' }} size={25} color='#F72585'></AiFillHeart>
                            <FaCartPlus onClick={() => this.addCart(data.id)} style={{ width: '25%' }} size={25} color='#57F282'></FaCartPlus>
                        </div>
                    </div>
                </div>

            )
        })
        return (
            <div className='mainItems'>

                <div className='items-head'>
                    <div style={{
                        border: '2px solid white',
                        width: '20%',
                        display: 'flex',
                        alignItems: 'center',
                        height: '50px',
                        justifyContent: 'center',
                    }}>
                        <h2>{this.state.head}</h2>
                    </div>
                    <div style={{ height: '0.5px', width: '80%', border: '0.5px solid white', backgroundColor: 'white' }}></div>
                </div>

                <div className='items-list'>
                    {listItems}
                    <MdNavigateNext size={75} color='#FFFFFF'></MdNavigateNext>
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

const mapDispatchToProps = (dispatch) => {
    return {
      updateCart: (data) => dispatch(addCart(data)),
    };
  };

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Items))