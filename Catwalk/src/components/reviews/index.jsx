import React from 'react';

import Ratings from './ratings';
import ReviewList from './reviewList';


class Reviews extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      reviews: null,
      meta: null
    };
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/reviews', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(result => {
        this.setState({reviews: result});
      })
      .catch(error => {
        console.error('Error:', error);
      });

    fetch('http://localhost:3001/api/reviews/meta/17067', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(result => {
        this.setState({meta: result});
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render(){
    return (
      <div className="reviews container">
        <h2>Ratings &amp; Reviews</h2>
        <div style={{display: 'flex'}}>
          {this.state.meta? <Ratings ratings={this.state.meta}/>: null}
          {this.state.reviews && this.state.meta?
            <ReviewList reviews={this.state.reviews} recommended={this.state.meta.recommended} />:
            null}
        </div>
      </div>
    );
  }
}

export default Reviews;