import './App.css';
import Main from './components/Main/Main'
import Cart from './components/Cart/Cart'
import Item from './components/Item/Item'
import Checkout from './components/Checkout/Checkout';

import { Route, Routes } from 'react-router-dom'
import React from 'react';

import { connect } from "react-redux";
import { addItem } from './redux/actions/items'
import { MdError } from 'react-icons/md';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      cart: []
    }
  }
  componentDidMount() {
    fetch("http://localhost:3001/showdata")
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result)
          // this.setState({items:result})
          this.props.updateItem(result)
          this.setState({ items: result })
        },
        (error) => {
          console.log("what is error: " + error)
        }
      )
  }

  render() {
    console.log(this.state.items);
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/item/:id" element={<Item/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    itemData: state.itemReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateItem: (data) => dispatch(addItem(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
