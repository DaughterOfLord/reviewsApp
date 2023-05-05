// Write your code here
import {Component} from 'react'
import './/App.js'

class ReviewCarousel extends Component {
  state = {activeReviewIndex: 0}

  getReview = reviewsList => {
    const {activeReviewIndex} = this.state
    const {imageUrl, userName, companyName, description} = reviewsList[
      activeReviewIndex
    ]
  }
  
  render {
   return (
    <div className="reviews-container">
      <h1 className="heading">Reviews</h1>
     <img src={imageUrl} alt={userName} />
      <p className="user-name">{userName}</p>
      <p>{companyName}</p>
      <p>{description}</p>
    </div>
  )
 }
}

export default ReviewCarousel
