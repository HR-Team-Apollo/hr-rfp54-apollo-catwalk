import React, {Suspense} from 'react';
// import ProductList from './relatedComponents/ProductList.jsx';
const ProductList = React.lazy(() => import('./relatedComponents/ProductList.jsx'));
import YourOutfitList from './relatedComponents/YourOutfitList.jsx';
import AppContext from '../../appContext.js';

const Related = ({handleProductChange}) => {
  return (
    <div style = {{display: 'flex', flexFlow: 'column nowrap', margin: '0 18% 0 18%'}}>
      <AppContext.Consumer>
        {
          ({product}) => (
            <Suspense fallback={<div>Loading...</div>}>
              <h2 style = {{marginLeft: '5%', fontSize: '1.7em'}}>Related Products</h2>
              <ProductList handleProductChange = {handleProductChange} id = {product ? product.product_id : null}/>
              <h2 style = {{marginLeft: '5%', fontSize: '1.7em'}}>Your Outfit</h2>
              <YourOutfitList handleProductChange = {handleProductChange} id = {product ? product.product_id : null}/>
            </Suspense>
          )
        }
      </AppContext.Consumer>
    </div>
  );
};

export default Related;