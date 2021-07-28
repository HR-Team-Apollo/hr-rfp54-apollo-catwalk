import React from 'react';

// product_id	integer	Required ID of the product to post the review for
// rating	int	Integer (1-5) indicating the review rating
// summary	text	Summary text of the review
// body	text	Continued or full text of the review
// recommend	bool	Value indicating if the reviewer recommends the product
// name	text	Username for question asker
// email	text	Email address for question asker
// photos	[text]	Array of text urls that link to images to be shown
// characteristics	object	Object of keys representing characteristic_id and values representing the review value for that characteristic. { "14": 5, "15": 5 //...}

//props should have
// product_id
// product_name
// characteristics
const ReviewForm = () => (
  <form className='review-form'>
    <h3 className='form-title'>Write Your Review</h3>
    <h4 className='form-subtitle'>About the Some Amazing Product</h4>
    <div>
      {/* REQUIRED stars
      The overall rating will be selected via five selectable star icons.  Initially, the stars will all be outlines, and none will be solid.  Clicking on a star will fill that star and all of the stars to the left of it with solid color.  Customers will not be able to select fractions of a star.  After selecting a star, text will appear to the right of the stars explaining the meaning of the selection.  The text will vary as follows:
      1 star - “Poor”
      2 stars - “Fair”
      3 stars - “Average”
      4 stars - “Good”
      5 stars - “Great”
     */}
      <p>Overall Rating: </p>
      <input type="radio" id="rating-5" name="rating" value="5"></input>
      <label htmlFor='rating'>Great</label>
      <input type="radio" id="rating-4" name="rating" value="4"></input>
      <label htmlFor='rating'>Good</label>
      <input type="radio" id="rating-3" name="rating" value="3"></input>
      <label htmlFor='rating'>Average</label>
      <input type="radio" id="rating-2" name="rating" value="2"></input>
      <label htmlFor='rating'>Fair</label>
      <input type="radio" id="rating-1" name="rating" value="1"></input>
      <label htmlFor='rating'>Poor</label>
    </div>
    <div>
      <label htmlFor='recommend'>Do you recommend this product? </label>
      <input type="radio" id="recommend-y" name="recommend" value="true" defaultChecked></input>
      <label htmlFor='recommend'>Yes</label>
      <input type="radio" id="recommend-n" name="recommend" value="false"></input>
      <label htmlFor='recommend'>No</label>
    </div>
    <div>
      {/* REQUIRED 5 radio buttons where 1 is lowest and 5 is highest see characteristics chart
      By default, no button will be selected.
      Above the five buttons, the meaning of the current selection will be explicitly presented.  The default will be “none selected”.  After making a selection, this should update as applicable for the given characteristic

      */}
      <label htmlFor='recommend'>Characteristic </label>
      <input type="radio" id="characteristics-5" name="characteristics" value="5"></input>
      <label htmlFor='characteristics'>Great</label>
      <input type="radio" id="characteristics-4" name="characteristics" value="4"></input>
      <label htmlFor='characteristics'>Good</label>
      <input type="radio" id="characteristics-3" name="characteristics" value="3"></input>
      <label htmlFor='characteristics'>Average</label>
      <input type="radio" id="characteristics-2" name="characteristics" value="2"></input>
      <label htmlFor='characteristics'>Fair</label>
      <input type="radio" id="characteristics-1" name="characteristics" value="1"></input>
      <label htmlFor='characteristics'>Poor</label>
    </div>

    <div className="form-example">
      <label htmlFor="summary">Summary: </label>
      <input type="text" name="summary" id="summary" placeholder="Example: Best purchase ever!" maxLength="60"/>
    </div>
    <div className="form-example">
      <label htmlFor="body">body: </label>
      <input type="textarea" name="body" id="body" placeholder="Why did you like this product or not?" maxLength="1000" minLength="50" required/>
      {/* if the length of text inputed is 50 change below to "Minimum reached" */}
      <p>Minimum required characters left: <span className='charCount'>50</span></p>
    </div>
    <div className="form-example">
      {/* A button will appear allowing users to upload their photos to the form.
        Clicking the button should open a separate window where the photo to be can be selected.
        After the first image is uploaded, a thumbnail showing the image should appear.  A user should be able to add up to five images before the button to add disappears, preventing further additions.
        */}
      <label htmlFor="photos">Upload photos: </label>
      <input type="file" name="photos" id="photos" accept="image/png, image/jpeg"/>
    </div>
    <div className="form-example">
      <label htmlFor="email">Enter your email: </label>
      <input type="email" name="email" id="email" placeholder="Example: jackson11@email.com" required/>
      <p>For authentication reasons, you will not be emailed</p>
    </div>
    <div className="form-example">
      <label htmlFor="name">What is your nickname? </label>
      <input type="text" name="name" id="name" placeholder="Example: jackson11!" maxLength="60" required/>
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
      Submit</button>
  </form>
);

export default ReviewForm;