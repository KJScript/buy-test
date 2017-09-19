import React from 'react';
import PropTypes from 'prop-types';
import { shopClient, generateSelectors, addToCart, viewCart } from './Shop';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      price: '',
      productId: '10558455949',
      variantSelectors: null,
      variant: ''
    }
  }
  componentWillMount() {
    shopClient.fetchProduct(this.props.productId).then(product => {
      let variant = product.variants[0]
      let variantSelectors = generateSelectors(product);
      this.setState({
        title: product.title,
        image: product.selectedVariantImage.src,
        link: product.selectedVariant.checkoutUrl,
        variantSelectors,
        price: product.selectedVariant.price,
        variant
      });
    });
  }
  componentDidMount() {
    let cart;
    shopClient.createCart().then(function (newCart) {
      cart = newCart;
    });
    this.setState({cart})
  }
  handleClick(e) {
    e.preventDefault();
    //document.getElementById('tester').className= 'color-change top-space'
    addToCart(this.state.variant, 1);
  }

  render() {
    return (
      <div className="item">
        <p id='tester' className="top-space">{this.props.title}</p>
        <p><strong>{this.props.cost}</strong></p>
        <img className="item__image" src={this.state.image}/>
        <h1>{this.state.title}</h1>
        <p>{this.state.price}</p>
          <button className="product__buy" onClick={this.handleClick.bind(this)}>ADD TO CART</button>
      </div>
    );
  }
}

Item.propTypes = {
  productId: PropTypes.string.isRequired
}
