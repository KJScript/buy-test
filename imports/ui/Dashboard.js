import React from 'react';
import PrivateHeader from './PrivateHeader';
import Item from './Item';
import CheckoutButton from './CheckoutButton';

export default () => {
    return (
      <div>
        <PrivateHeader title="Insert clever shop name here"/>
        <div className='page-content'>
          Welcome to our incredibly hard to find shop
        </div>
        <div className="item__content">
          <Item productId='10558455949'/>
          <Item productId='10569004557'/>
          <Item productId='10569005901'/>
        </div>
        <div className="item__content">
          <CheckoutButton/>
        </div>
      </div>
    );
  }
