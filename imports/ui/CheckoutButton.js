import React from 'react';
import { viewCart } from './Shop';

export default class CheckoutButton extends React.Component {
  constructor(props) {
    super(props);
  }
  
  checkout(e) {
    e.preventDefault;

    viewCart();
  }

  render() {
    return(
      <button onClick={this.checkout.bind(this)}>CHECKOUT</button>
    );
  }
}
