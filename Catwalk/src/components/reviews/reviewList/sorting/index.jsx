import React from 'react';

const Sorting = ({recommended}) => {
  let totalReviews = Number(recommended.true) + Number(recommended.false);
  return(
    <div className='sorting'>
      <p>
        <span>{totalReviews}</span> reviews, sorted by
        <span style={{textDecoration: 'underline'}}> relevance </span>
      </p>
    </div>
  );
};

export default Sorting;