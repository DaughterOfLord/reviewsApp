// Write your code here
import {Component} from 'react'
// import './/App.js'

class ReviewCarousel extends Component {
  state = {activeReviewIndex: 0}

  getReview = reviewsList => {
    const {activeReviewIndex} = this.state
    const {imageUrl, username, companyName, description} = reviewsList[
      activeReviewIndex
    ]
  }

  return (
    <div className="reviews-container">
      <h1 className="heading">Reviews</h1>
     <img src={imageUrl} alt={username} />
      <p className="user-name">{username}</p>
      <p>{companyName}</p>
      <p>{description}</p>
    </div>
  )
  
  onLeft = () => {
     state = {activeReviewIndex: 0}

    if (activeReviewIndex > 0) {
      this.setState(prevState = ({
          activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  onRight = () => {
     state = {activeReviewIndex: 0}

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState = ({
          activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    console.log(activeReviewIndex)

    return(
      <div className="app-container">
        <button
          data-testid="leftArrow" 
          type="button"
          onClick={this.onLeft} 
          className="btn">
          <img 
            className="arrow" 
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png" 
            alt="left-arrow"
          />
        </button>
        {this.getReview(reviewsList)}
        <button
          data-testid="rightArrow" 
          type="button"
          onClick={this.onLeft} 
          className="btn">
          <img 
            className="arrow" 
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png" 
            alt="right-arrow"
          />
        </button>
      </div>
    )

  }

}

export default ReviewCarousel
