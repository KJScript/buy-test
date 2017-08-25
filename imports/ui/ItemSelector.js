import React from 'react';
import PropTypes from 'prop-types';
import { shopClient, generateSelectors } from './Shop';

export default class ItemSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      link: 'default',
      productId: '10558455949',
      variantSelectors: null
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
        variantSelectors
      });
      console.log(product.selectedVariant.checkoutUrl);
    });
    console.log(this.state.link);
  }
  componentDidMount() {
    document.getElementById('sel').innerHTML = this.state.variantSelectors;
  }
  render() {
    return (
      <div className="item">
        <img
          src={this.props.image}
          width="200rem"
          />
        <p className="top-space">{this.props.title}</p>
        <p><strong>{this.props.cost}</strong></p>
        <img src={this.state.image}/>
        <p>{this.state.link}</p>
        <h1>{this.state.title}</h1>
        <div id="sel"></div>
        <a href={this.state.link}>Buy Now!</a>
      </div>
    );
  }
}

ItemSelector.propTypes = {
  productId: PropTypes.string.isRequired
}
