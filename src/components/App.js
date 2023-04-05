import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleFeedback = (feedback) => {
    this.setState((prevState) => ({
      ...prevState,
      [feedback]: prevState[feedback] + 1
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positive = this.state.good;
    return total === 0 ? 0 : Math.round((positive / total) * 100);
  };

  render() {
    const feedbackOptions = [
      { value: 'good', label: 'Good' },
      { value: 'neutral', label: 'Neutral' },
      { value: 'bad', label: 'Bad' },
    ];
  
    return (
      <div>
        <Section title ='Please leave feedback' />
        <FeedbackOptions options={feedbackOptions} onLeaveFeedback={this.handleFeedback} />
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message='No feedback given' />
          ) : (
            <Statistics feedback={this.state} /> // Utilizar el componente Statistics y pasar la prop feedback
          )}
        </Section>
      </div>
    )}
}

export default App;
