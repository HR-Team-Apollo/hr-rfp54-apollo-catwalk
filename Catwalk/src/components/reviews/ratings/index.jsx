import React from 'react';
import AppContext from '../../../appContext.js';
import RatingBreakdown from './ratingBreakdown';
import ProductBreakdown from './productBreakdown';

const Ratings = ({filter}) => (
  <AppContext.Consumer>
    {(context)=>(
      <div className="ratings" style={{marginRight: '2rem'}}>
        <RatingBreakdown filter={filter} ratings={context.product.ratings} recommendations={context.product.recommended}/>
        <ProductBreakdown characteristics={context.product.characteristics}/>
      </div>

    )
    }
  </AppContext.Consumer>
);
export default Ratings;