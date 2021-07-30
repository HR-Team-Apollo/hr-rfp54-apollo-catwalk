import React from 'react';
import RatingInput from './RatingInput';
import RecommendationsInput from './recommendationsInput';
import CharacteristicsInput from './characteristicsInput';


const mockProps = {
  product_id: '1',
  product_name: 'Master Sword',
  characteristics: ['Size','Width','Comfort']
};

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      recommendations: null,
      characteristics: {}
    };
  }

  updateFormState(key,value){
    this.setState({[key]: value});
  }

  render(){
    return (
      <form id="review-form">
        <h3 className="form-title">Write Your Review</h3>
        <h4 className="form-subtitle">{`About the ${mockProps.product_name}`}</h4>

        <RatingInput stateRate={this.state.rating} stateUpdate={this.updateFormState.bind(this)}/>
        <RecommendationsInput stateUpdate={this.updateFormState.bind(this)}/>
        <CharacteristicsInput stateUpdate={this.updateFormState.bind(this)}/>



        <div className="review-form-section summary">
          <label htmlFor="summary">Summary: </label>
          <input
            type="text"
            name="summary"
            id="summary"
            placeholder="Example: Best purchase ever!"
            maxLength="60"
          />
        </div>

        {/* <div className="review-form-section">
          <label htmlFor="body">body: </label>
          <input
            type="textarea"
            name="body"
            id="body"
            placeholder="Why did you like this product or not?"
            maxLength="1000"
            minLength="50"
            required
            onChange={
              (e)=>{
                e.target.value.length <= e.target.minLength?
                  document.getElementById('charCount').innerText = (e.target.minLength - e.target.value.length):

              }
            }
          />
          <p id="minimum">
            Minimum required characters left:{' '}
            <span id="charCount">50</span>
          </p>
          <p id="minReached">Minimum reached</p>
        </div>
         */}
        <div className="review-form-section">
          {/* A button will appear allowing users to upload their photos to the form.
            Clicking the button should open a separate window where the photo to be can be selected.
            After the first image is uploaded, a thumbnail showing the image should appear.  A user should be able to add up to five images before the button to add disappears, preventing further additions.
            */}
          <label htmlFor="photos">Upload photos: </label>
          <input
            type="file"
            name="photos"
            id="photos"
            accept="image/png, image/jpeg"
          />
        </div>
        <div className="review-form-section">
          <label htmlFor="email">Enter your email: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Example: jackson11@email.com"
            required
          />
          <p>For authentication reasons, you will not be emailed</p>
        </div>
        <div className="review-form-section">
          <label htmlFor="name">What is your nickname? </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Example: jackson11!"
            maxLength="60"
            required
          />
          <p>For privacy reasons, do not use your full name or email address</p>
        </div>
        <button type="submit">
          {/* Upon selecting this button the form’s inputs should be validated.   If there are any invalid entries, the submission should be prevented, and a warning message will appear.   This message should be titled “You must enter the following:”
          This error will occur if:
          Any mandatory fields are blank
          The review body is less than 50 characters
          The email address provided is not in correct email format
          The images selected are invalid or unable to be uploaded.
          */}
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
// characteristics	object	Object of keys representing characteristic_id and values representing the review value for that characteristic. { "14": 5, "15": 5 //...}

export default ReviewForm;