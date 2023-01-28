import React from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendelLeaveFidback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  counterTotalFeadback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  counterFeedbackPercentage = () => {
    const total = this.counterTotalFeadback();
    return total > 0 ? Math.round((100 * this.state.good) / total) : 0;
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.counterTotalFeadback();

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.hendelLeaveFidback}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              feedbackPercentage={this.counterFeedbackPercentage('good')}
            />
          )}
        </Section>
      </div>
    );
  }
}
