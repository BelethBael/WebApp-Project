import React from "react";
import './Item.css'

import Top from '../page-coms/Top'
import Bottom from '../page-coms/Bottom'

import { Button } from 'reactstrap';

import {AiFillHeart} from 'react-icons/ai'

import { withRouter } from "../withRouter/withRouter";

import { connect } from "react-redux";
import { addCart } from '../../redux/actions/cart'

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items:this.props.itemData,
            itemSelectedID:this.props.params.id,
            itemSlectedList:[]
        }
    }

    addCart = (id) => {
        console.log("Add cart: " + id)

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

    componentDidMount(){
        this.selectItem(this.state.itemSelectedID, this.state.items)
    }

    selectItem =(id, list)=> {
        // console.log("ID");
        // let data = []
        for(let i = 0; i<list.length ;i++){
            if(id == list[i].id){
                // console.log(list[i]);
                // data.push(list[i])
                this.setState({itemSlectedList:list[i]})

                break
            }
        }
    }

    render() {
        // console.log(this.state.itemSlectedList);
        return (
            <div className="item-body">
                <Top />
                <div className="item-block">
                    <div className="item-head-name">{this.state.itemSlectedList.name}</div>
                    <div className="item-inner-details">

                        <div>
                            <img className="img" src={this.state.itemSlectedList.img} />
                        </div>

                        <div className="detials">

                            <h2 style={{}}>{this.state.itemSlectedList.name}</h2>

                            <div className="details-review">
                                <div style={{fontSize:"30px"}}>98/100</div>
                                <div>Review me</div>
                            </div>

                            <div className="details-stock">
                                <div className="details-stock-text">
                                    <div className="color-gray">PLATFORM</div>
                                    <div>{this.state.itemSlectedList.platform}</div>
                                </div>

                                <div className="details-stock-text">
                                    <div className="color-gray">REGION</div>
                                    <div>{this.state.itemSlectedList.region}</div>
                                </div>

                                <div className="details-stock-text">
                                    <div className="color-gray">AVALIBLE</div>
                                    <div>IN STOCK</div>
                                </div>

                                <div className="details-stock-text">
                                    <div className="color-gray">DELIVERY</div>
                                    <div>INSTANT DELIVERY</div>
                                </div>

                            </div>

                            <div className="details-version">
                                <div className="color-gray">EDITION</div>
                                <div className="details-version-text">
                                    <div className="details-stock-text">STANDARD</div>
                                    <div className="details-stock-text">DELUXE</div>
                                    <div className="details-stock-text">ULTIMATE</div>
                                </div>

                            </div>

                            <div className="details-confirm-buy">
                                <div className="details-price">{this.state.itemSlectedList.price} BATH</div>
                                <div
                                style={{width:'200px',height:"50px", }}
                                className="buy-but"
                                onClick={()=>this.addCart(this.state.itemSelectedID)}>BUY</div>
                            </div>

                        </div>
                    </div>

                </div>
                <Bottom />
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Item));