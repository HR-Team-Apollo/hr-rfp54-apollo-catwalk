import React from 'react';

const Sorting = ({recommended, clickHandler}) => {
  let totalReviews = Number(recommended.true) + Number(recommended.false);
  return(
    <div className='sorting'>
      <p>
        <span>{totalReviews}</span> reviews, sorted by
        <select className='clickMe' name="sort" id="sortBy" style={{background: 'transparent', border: 'none', fontFamily: 'inherit'}} onChange={
          (e)=>{
            clickHandler(e.target.value);
          }
        }>
          <option value="relevance">relevance</option>
          <option value="newest">newest</option>
          <option value="helpful">helpful</option>
        </select>
      </p>
    </div>
  );
};

export default Sorting;