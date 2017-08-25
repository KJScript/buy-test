import React from 'react';
import PrivateHeader from './PrivateHeader';
import ItemSelector from './ItemSelector';

export default () => {
    return (
      <div>
        <PrivateHeader title="Insert clever shop name here"/>
        <div className='page-content'>
          Welcome to our incredibly hard to find shop
        </div>
        <ItemSelector productId='10558455949'/>
        <ItemSelector productId='10558455949'/>
        <ItemSelector productId='10558455949'/>
      </div>
    );
  }
