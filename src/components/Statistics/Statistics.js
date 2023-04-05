import React from 'react';
import PropTypes from 'prop-types';
import { Container, Item } from './Statistics.styled';

function Statistics({ feedback }) {
  const { good, neutral, bad } = feedback;

  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);

  return (
    <Container>
      <ul>
        <Item>Good: {good}</Item>
        <Item>Neutral: {neutral}</Item>
        <Item>Bad: {bad}</Item>
        <Item>Total: {total}</Item>
        <Item>Positive feedback: {positivePercentage}%</Item>
      </ul>
    </Container>
  );
}

Statistics.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired
  }).isRequired
};

export default Statistics;



/*import React from 'react';
import {} from './Statistics.styled';

function Statistics({ feedback }) {
  const { good, neutral, bad } = feedback;

  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);

  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

export default Statistics; */




