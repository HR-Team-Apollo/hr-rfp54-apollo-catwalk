import React from 'react';
import Stars from '../../../../utils/stars';
import StarBar from './starBar';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRatings: this.calcTotal(this.props.ratings),
      avgRatings: null,
      totalRecommends: this.calcTotal(this.props.recommendations)
    };
  }

  calcTotal (obj) {
    let sum = 0;
    Object.values(obj).forEach(val => {
      sum += Number(val);
    });
    return sum;
  }

  calcAvgRatings (obj) {
    let sum = 0;
    Object.entries(obj).forEach(([key,value])=>{
      sum += key * Number(value);
    });
    const avg = sum/this.state.totalRatings;
    return avg;
  }

  calcPercentage (val, tot) {
    return Math.trunc((val/tot) * 100);
  }

  componentDidMount(){
    const avg = this.calcAvgRatings(this.props.ratings);
    this.setState({avgRatings:avg});
  }

  componentDidUpdate(prevProps){
    console.log('component did update');
    if(this.props.ratings !== prevProps.ratings) {
      this.setState({
        totalRatings: this.calcTotal(this.props.ratings),
        totalRecommends: this.calcTotal(this.props.recommendations)},
      ()=>{

        const avg = this.calcAvgRatings(this.props.ratings);
        this.setState({avgRatings:avg});
      }
      );
    }
  }

  render() {
    return(
      <div className="rating-breakdown">
        <div className='rating-summary' style={{display:'flex'}}>
          <span className='rating-average' style={{fontSize: '3rem'}}>
            {parseFloat(this.state.avgRatings).toFixed(1)}
          </span>
          <Stars rating={this.state.avgRatings}/>
        </div>

        <div style={{fontSize:'.75rem'}}>
          <span className='recommendations'>
            {this.calcPercentage(this.props.recommendations['true'], Number(this.state.totalRecommends))}
          </span>
          % of reviews recommend this product
        </div>
        {
          Object.entries(this.props.ratings).reverse().map(rating => (
            <div
              key={rating[0]}
              style={{
                display:'flex',
                marginBottom: '1rem',
                fontSize: '.5rem'}}>
              <span
                className='clickMe'
                style={{textDecoration:'underline'}}
                onClick={()=>{
                  this.props.filter(rating[0]);
                }}>{rating[0]} stars</span>
              <StarBar starPercentage={this.calcPercentage(rating[1],this.state.totalRatings)}/>
              <span>{rating[1]}</span>
            </div>
          ))
        }
      </div>
    );
  }
}

export default RatingBreakdown;