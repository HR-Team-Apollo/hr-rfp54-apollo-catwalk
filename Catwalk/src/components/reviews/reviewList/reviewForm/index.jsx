import React from 'react';
import AppContext from '../../../../appContext.js';

import RatingInput from './ratingInput';
import RecommendInput from './recommendInput';
import CharacteristicsInput from './characteristicsInput';
import SummaryInput from './summaryInput';
import BodyInput from './bodyInput';
import PhotosInput from './photosInput';
import EmailInput from './emailInput';
import NameInput from './nameInput';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: this.props.product_id,
      rating: 0,
      summary: null,
      body: null,
      recommend: null,
      name: null,
      email: null,
      photos: null,
      characteristics: {}
    };
  }

  updateFormState(key,value){
    if (typeof value === 'object') {
      let newState = this.state[key];
      let valKeys = Object.keys(value);
      valKeys.forEach(k=>{
        newState[k] = value[k];
      });
      this.setState({characteristics: newState});
    }
    this.setState({[key]: value});
  }

  render(){
    return (
      <form id="review-form">
        <h3 className="form-title">Write Your Review</h3>
        <AppContext.Consumer>
          {
            ({product}) =>{
              <h4 className="form-subtitle">{`About the ${product.name}`}</h4>
            }
          }
        </AppContext.Consumer>

        <RatingInput stateRate={this.state.rating} stateUpdate={this.updateFormState.bind(this)}/>
        <RecommendInput stateUpdate={this.updateFormState.bind(this)}/>
        <CharacteristicsInput stateUpdate={this.updateFormState.bind(this)}/>
        {/* FIXME: fix the characteristics state update
          characteristics	object	Object of keys representing characteristic_id and values representing the review value for that characteristic. { "14": 5, "15": 5 //...}
        */}
        <SummaryInput stateUpdate={this.updateFormState.bind(this)}/>
        <BodyInput stateUpdate={this.updateFormState.bind(this)}/>
        <PhotosInput stateUpdate={this.updateFormState.bind(this)}/>
        <EmailInput stateUpdate={this.updateFormState.bind(this)}/>
        <NameInput stateUpdate={this.updateFormState.bind(this)}/>
        <button type="submit" onClick={
          (e)=>{
            e.preventDefault();
            fetch(
              'http://localhost:3001/reviews',
              {
                'method': 'POST',
                'headers': {
                  'Content-Type': 'application/json'
                },
                'data': JSON.stringify({
                  'product_id': this.state.product_id,
                  'rating': this.state.rating,
                  'summary': this.state.summary,
                  'body': this.state.body,
                  'recommend': this.state.recommend,
                  'photos': this.state.photos,
                  'email': this.state.email,
                  'name': this.state.name,
                  'characteristics': this.state.characteristics
                }),
              })
              .then(res=>console.log(res))
              .catch(err=>console.log(err));
          }
        }
        >
          Submit
        </button>
      </form>
    );
  }
}

//SUBMIT EVENT: POST THE FOLLOWING INFO TO API
// product_id	integer	Required ID of the product to post the review for
// rating	int	Integer (1-5) indicating the review rating
// summary	text	Summary text of the review
// body	text	Continued or full text of the review
// recommend	bool	Value indicating if the reviewer recommends the product
// name	text	Username for question asker
// email	text	Email address for question asker
// photos	[text]	Array of text urls that link to images to be shown


export default ReviewForm;