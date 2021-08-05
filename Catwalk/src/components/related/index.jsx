import React, {Suspense} from 'react';
// import ProductList from './relatedComponents/ProductList.jsx';
import ProductList from './relatedComponents/ProductList.jsx';
import YourOutfitList from './relatedComponents/YourOutfitList.jsx';
import AppContext from '../../appContext.js';
// context.product ? context.product.product_id : null
const Related = ({handleProductChange, logInteraction}) => {
  return (
    <div id='related' className = 'container widget' style = {{display: 'flex', flexFlow: 'column nowrap'}}>
      <AppContext.Consumer>
        {
          (context) => (
            <section>
              <h2 style = {{marginLeft: '5%', fontSize: '1.7em'}}>Related Products</h2>
              <ProductList handleProductChange = {handleProductChange} id = {context.product.product_id}/>
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