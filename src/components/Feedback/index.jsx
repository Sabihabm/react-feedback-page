import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackGiven: false,
  }

  onClickEmoji = () => {
    this.setState({isFeedbackGiven: true})
  }

  renderEmojis = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback">
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>

        <ul className="emojis-list-container">
          {emojis.map(each => (
            <li key={each.id} onClick={this.onClickEmoji}>
              <img src={each.imageUrl} alt={each.name} />
              <p>{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="feedback">
        <img src={loveEmojiUrl} alt="love emoji" />
        <h1>Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackGiven} = this.state

    return (
      <div className="feedback-container">
        {isFeedbackGiven ? this.renderThankYou() : this.renderEmojis()}
      </div>
    )
  }
}

export default Feedback
