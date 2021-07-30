import React, {Suspense} from 'react';
// import ProductList from './relatedComponents/ProductList.jsx';
const ProductList = React.lazy(() => import('./relatedComponents/ProductList.jsx'));
import YourOutfitList from './relatedComponents/YourOutfitList.jsx';
import AppContext from '../../appContext.js';

const Related = ({handleProductChange}) => (
  <div>
    <h2>Related Products</h2>
    <AppContext.Consumer>
      {
        ({product}) => (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductList handleProductChange = {handleProductChange} id = {product ? product.product_id : null}/>
          </Suspense>
        )
      }
    </AppContext.Consumer>
    <h2>Your Outfit</h2>
    <YourOutfitList />
  </div>
);

export default Related;