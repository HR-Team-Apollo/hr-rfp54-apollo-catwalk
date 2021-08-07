import React from 'react';
import AppContext from '../../appContext.js';

import Ratings from './ratings';
import ReviewList from './reviewList';

const windowPath = window.location.href;

class Reviews extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      reviews: null,
      sort: 'relevant',
      page: 1,
      count: 2,
      starFilter: [1, 2, 3, 4, 5]
    };
  }

  moreReviewsHandler(e){
    this.setState({page: ++this.state.page},
      this.getReviews(result => {
        console.log(result);
        let currReviews = Array.from(this.state.reviews.results);
        currReviews = currReviews.concat(result.results);
        if(result.results.length === 0) {
          e.target.style.display = 'none';
        }
        this.setState({reviews: {results: currReviews}});
      }));
  }

  getReviews(next) {
    console.log('[getReviews state]' ,this.state);
    fetch(`${windowPath}api/reviews/reviewPage/${this.props.id}/${this.state.page}/${this.state.count}/${this.state.sort}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(result => {
        next(result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  sortReviewsHandler(sortOption) {
    this.setState(
      {
        sort: sortOption,
        page: 1
      }, ()=>{
        this.getReviews(res=>{
          console.log(res);
          this.setState({reviews: res});
        });
      });
  }

  componentDidMount(){
    console.log(`REVIEWS COMPONENT MOUNTING: ${this.props.id}`);
    this.getReviews((res)=>{
      this.setState({reviews: res});
    });
  }

  componentDidUpdate(prevProps) {
    if(this.props.id !== prevProps.id) {
      this.setState({
        reviews: null,
        sort: 'relevant',
        page: 1,
        count: 2,
        starFilter: [1, 2, 3, 4, 5]

      },
      this.getReviews((res)=>{
        this.setState({reviews: res});
      })
      );
    }
  }

  filterByStars(star) {
    star = Number(star);
    let starsShown = this.state.starFilter;
    const index = starsShown.indexOf(star);
    if (index === -1) {
      starsShown.push(star);
    } else {
      starsShown.splice(index, 1);
    }
    this.setState({starFilter: starsShown});
  }

  render(){
    return (
      <AppContext.Consumer>
        {(context)=>(
          <div id='reviews' className="reviews container widget">
            <h2>Ratings &amp; Reviews</h2>
            <div style={{display: 'flex'}}>
              <Ratings filter={this.filterByStars.bind(this)}/>
              {
                this.state.reviews?
                  <ReviewList
                    starFilter={this.state.starFilter}
                    sortHandler={this.sortReviewsHandler.bind(this)}
                    moreReviewsHandler={this.moreReviewsHandler.bind(this)}
                    reviews={this.state.reviews}
                    recommended={context.product.recommended}
                  />:
                  null
              }
            </div>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Reviews;