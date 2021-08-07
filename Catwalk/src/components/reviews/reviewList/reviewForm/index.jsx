import React from 'react';
import AppContext from '../../../../appContext.js';
import axios from 'axios';

import RatingInput from './ratingInput';
import RecommendInput from './recommendInput';
import CharacteristicsInput from './characteristicsInput';
import SummaryInput from './summaryInput';
import BodyInput from './bodyInput';
import PhotosInput from './photosInput';
import EmailInput from './emailInput';
import NameInput from './nameInput';

const windowPath = window.location.href;

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: Number(this.props.id),
      rating: 0,
      summary: '',
      body: '',
      recommend: true,
      name: '',
      email: '',
      photos: [],
      characteristics: {}
    };
  }

  updateFormState(key,value, index){
    if (key === 'photo'){
      let photosArray = this.state.photos;
      photosArray[index] = value;
      console.log(key, value, index);
      console.log(this.state.photos);
      this.setState({photos: photosArray});
    } else if (typeof value === 'object') {
      let newState = this.state[key];
      let valKeys = Object.keys(value);
      valKeys.forEach(k=>{
        newState[k] = value[k];
      });
      this.setState({characteristics: newState});
    } else {
      this.setState({[key]: value});
    }
  }

  render(){
    return (
      <AppContext.Consumer>
        {({product, openModal}) =>(
          <form id="review-form" style={{maxWidth: '40rem'}}>
            <h3 className="form-title">Write Your Review</h3>
            <h4 className="form-subtitle">{`About the ${product.name}`}</h4>
            <RatingInput stateRate={this.state.rating} stateUpdate={this.updateFormState.bind(this)}/>
            <RecommendInput stateUpdate={this.updateFormState.bind(this)}/>
            <CharacteristicsInput stateUpdate={this.updateFormState.bind(this)}/>
            <SummaryInput stateUpdate={this.updateFormState.bind(this)}/>
            <BodyInput stateUpdate={this.updateFormState.bind(this)}/>
            <PhotosInput stateUpdate={this.updateFormState.bind(this)}/>
            <EmailInput stateUpdate={this.updateFormState.bind(this)}/>
            <NameInput stateUpdate={this.updateFormState.bind(this)}/>

            <button type="submit" className='clickMe' onClick={
              (e) => {
                e.preventDefault();
                let data = {
                  'product_id': Number(this.state.product_id),
                  'rating': this.state.rating,
                  'summary': this.state.summary,
                  'body': this.state.body,
                  'recommend': this.state.recommend,
                  'photos': this.state.photos,
                  'email': this.state.email,
                  'name': this.state.name,
                  'characteristics': this.state.characteristics
                };
                console.log(data);
                axios.post(`${windowPath}api/reviews`, data)
                  .then(res=>{{
                    console.log(res.data);
                    if(res.data === 'Created'){
                      openModal(<p>Thank you for submitting your review</p>);
                    }else{
                      alert('something went wrong');
                    }
                  }})
                  .catch(err=>console.log(err));
              }}
            >Submit</button>
          </form>
        )}
      </AppContext.Consumer>
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