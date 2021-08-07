import React, {Suspense} from 'react';
import ProductList from './relatedComponents/ProductList.jsx';
import YourOutfitList from './relatedComponents/YourOutfitList.jsx';
import AppContext from '../../appContext.js';

const Related = ({handleProductChange, logInteraction, loading}) => {
  return (
    <div id='related' className = 'container widget'>
      <AppContext.Consumer>
        {
          (context) => (
            <section>
              <h2 style = {{marginLeft: '5%', fontSize: '1.7em'}}>Related Products</h2>
              <ProductList loading={loading} handleProductChange = {handleProductChange} id = {context.product.product_id}/>
              <h2 style = {{marginLeft: '5%', fontSize: '1.7em'}}>Your Outfit</h2>
              <YourOutfitList handleProductChange = {handleProductChange} id = {context.product ? context.product.product_id : null}/>
            </section>
          )
        }
      </AppContext.Consumer>
    </div>
  );
};

export default Related;