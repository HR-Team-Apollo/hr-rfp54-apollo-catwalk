import React from 'react';

const Answer = ({answerObj}) => (
  <div>
    <p>
      <strong>A:</strong> {answerObj.body}
      <br />
    </p>
    <span>
      by: {answerObj.isSeller ? <strong>Seller</strong> : answerObj.user}, {answerObj.date} | Helpful? <a href="">Yes</a> ({answerObj.helpfulCount}) | <a href="">Report</a>
    </span>

    <div className="photoInfo">
      <br />
      <p>{answerObj.photo.photoBody}</p>
      <br />
      {answerObj.photo.images.length > 0 && <div><img src={answerObj.photo.images[0]} alt="water-proof watch1" width="200px" height="200px" /><img src={answerObj.photo.images[1]} alt="water-proof watch1" width="200px" height="200px" /><br/><span>by: {answerObj.isSeller ? <strong>Seller</strong> : answerObj.user}, {answerObj.date} | Helpful? <a href="">Yes</a> ({answerObj.photo.photoHelpfulCount}) | <a href="">Report</a></span></div>}
    </div>
  </div>
);

export default Answer;