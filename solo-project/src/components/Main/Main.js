import './Main.css';
import Top from '../page-coms/Top'
import ItemBlock from './Items-show'
import Bottom from '../page-coms/Bottom'

import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items:this.props.items,
            cart:[]
        }
    }

    componentDidUpdate(){
        // this.state.items = this.props.items
        console.log("Main");
    }
    
    render() {
        // console.log(this.props.items)
        // console.log("Main");
        return (
            <div className="Main">
                <Top></Top>
                <ItemBlock name='BEST SELLER' cart={this.props.cart}></ItemBlock>
                <ItemBlock name='TRENDING' cart={this.props.cart}></ItemBlock>
                <ItemBlock name='COMMING SOON' cart={this.props.cart}></ItemBlock>
                <Bottom></Bottom>
            </div>
        )
    }
}

export default Main;
