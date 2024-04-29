import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  review = () => this.setState({isFeedbackSelected: true})

  renderFeedbackQuestion() {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="top-container">
        <div className="request-container">
          <h1>How satisfied are you with our customer support performance?</h1>
          <ul className="emojis">
            {emojis.map(each => (
              <li key={each.id}>
                <button onClick={this.review} type="button">
                  <img className="image" src={each.imageUrl} alt={each.name} />
                  <br />
                  <span>{each.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div>
        <img alt="love emoji" src={loveEmojiUrl} />
        <h1>Thank You</h1>
        <p>We use your feedback to imporve our customer support performance</p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div>
        <div>
          {isFeedbackSelected
            ? this.renderThankYouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
