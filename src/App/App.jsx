import { Component } from 'react';
import { Section } from '../components/Section/Section';
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions';
import { Statistics } from '../components/Statistics/Statistics';
import { Notification } from '../components/Notification/Notification';

import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const optionKey = event.target.value;
    this.setState(prevState => ({ [optionKey]: prevState[optionKey] + 1 }));
  };

  countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback = () => {
    const total = this.countTotal();
    return total ? Math.round((this.state.good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotal();
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedback()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
