import { useState } from 'react';
import { Section } from '../components/Section/Section';
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions';
import { Statistics } from '../components/Statistics/Statistics';
import { Notification } from '../components/Notification/Notification';

import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const OPTIONS = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = name => {
    if (name === 'good') setGood(prev => prev + 1);
    else if (name === 'bad') setBad(prev => prev + 1);
    else setNeutral(prev => prev + 1);
  };

  const countTotal = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedback = () => {
    const total = countTotal();
    return total ? Math.round((good / total) * 100) : 0;
  };

  const total = countTotal();
  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={OPTIONS} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedback()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
};
