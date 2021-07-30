import React, {Suspense} from 'react';
// import ProductList from './relatedComponents/ProductList.jsx';
const ProductList = React.lazy(() => import('./relatedComponents/ProductList.jsx'));
import YourOutfitList from './relatedComponents/YourOutfitList.jsx';
import AppContext from '../../appContext.js';

const Related = ({handleProductChange}) => (
  <div>
    <AppContext.Consumer>
      {
        ({product}) => (
          <Suspense fallback={<div>Loading...</div>}>
            <h2>Related Products</h2>
            <ProductList handleProductChange = {handleProductChange} id = {product ? product.product_id : null}/>
            <h2>Your Outfit</h2>
            <YourOutfitList id = {product ? product.product_id : null}/>
          </Suspense>
        )
      }
    </AppContext.Consumer>
  </div>
);

export default Related;