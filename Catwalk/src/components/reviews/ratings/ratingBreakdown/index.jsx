import React from 'react';
import Stars from '../../../../utils/stars';
import StarBar from './starBar';

let ratings = {
  2: 1,
  3: 1,
  4: 2,
  1: 1,
  5: 5
};

let recommendations = {
  0: 5,
  1: 9
};

const calcTotal = (obj) => {
  return Object.values(obj).reduce((acc, val)=>{
    return acc += val;
  });
};

const calcAvg = (obj) => {
  let sum = 0;
  Object.entries(obj).forEach(([key,value])=>{
    sum += key * value;
  });
  const avg = sum/totalRatings;
  return avg;
};

const calcPercentage = (val, tot) => {
  return Math.trunc((val/tot) * 100);
};

const totalRatings = calcTotal(ratings);
const avgRatings= calcAvg(ratings);

const totalRecommends = calcTotal(recommendations);

const RatingBreakdown = ({/*ratings, recommendations */}) => (
  <div className="ratingBreakdown">
    <span className='rating-average'>{avgRatings}</span>
    <Stars rating={avgRatings}/>
    <div>
      <span className='recommendations'>{calcPercentage(recommendations[1], totalRecommends)}</span>% of reviews recommend this product
    </div>
    {
      /*TODO: reverse order */
      Object.entries(ratings).map(rating => (
        <div key={rating[0]}>{rating[0]} stars <StarBar starPercentage={calcPercentage(rating[1],totalRatings)}/></div>
      ))
    }
  </div>
);

export default RatingBreakdown;