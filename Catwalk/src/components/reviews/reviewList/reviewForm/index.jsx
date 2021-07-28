import React from 'react';

const ReviewForm = () => (
  <form>
    <p className='form-title'> Title: Write Your Review</p>
    <p className='form-subtitle'>About the Some Amazing Product</p>
    <ul>
      <li>overall rating</li>
      {/* REQUIRED stars
      The overall rating will be selected via five selectable star icons.  Initially, the stars will all be outlines, and none will be solid.  Clicking on a star will fill that star and all of the stars to the left of it with solid color.  Customers will not be able to select fractions of a star.  After selecting a star, text will appear to the right of the stars explaining the meaning of the selection.  The text will vary as follows:
	1 star - “Poor”
	2 stars - “Fair”
	3 stars - “Average”
	4 stars - “Good”
	5 stars - “Great”
 */}
      <li>Do you recommend this product?</li>
      {/* REQUIRED radio buttons y/n default*/}
      <li>characteristics</li>
      {/* REQUIRED 5 radio buttons where 1 is lowest and 5 is highest see characteristics chart*/}
      <li>Review Summary</li>
      {/* limit 60 chars */}
      <li>Review Body
        {/* REQUIRED 1000 */}
      </li>
      <li>Upload your photos
        {/* A button will appear allowing users to upload their photos to the form.
        Clicking the button should open a separate window where the photo to be can be selected.
        After the first image is uploaded, a thumbnail showing the image should appear.  A user should be able to add up to five images before the button to add disappears, preventing further additions.
        */}
      </li>
      <li> What is your nickname
        {/* REQUIRED A text input allowing up to 60 characters for the user’s display name.
        Placeholder text should read: “Example: jackson11!”.
        Below this field, the text “For privacy reasons, do not use your full name or email address” will appear.
        */}
      </li>
      <li>Your email
        {/* REQUIRED
        A text input allowing up to 60 characters.
        Placeholder text should read: “Example: jackson11@email.com”.
        Below this field, the text “For authentication reasons, you will not be emailed” will appear.
        */}
      </li>
      <li> Submit Review
        {/* Upon selecting this button the form’s inputs should be validated.   If there are any invalid entries, the submission should be prevented, and a warning message will appear.   This message should be titled “You must enter the following:”
        This error will occur if:
        Any mandatory fields are blank
        The review body is less than 50 characters
        The email address provided is not in correct email format
        The images selected are invalid or unable to be uploaded.
        */}
      </li>
    </ul>
  </form>
);

export default ReviewForm;