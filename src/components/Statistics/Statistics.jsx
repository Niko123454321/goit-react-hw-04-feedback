import css from './statistics.module.css';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  counterFeedbackPercentage,
}) => {
  if (total > 0) {
    console.log(total);

    return (
      <ul className={css.ul}>
        <li className={css.li}>good: {good}</li>
        <li className={css.li}>neutral: {neutral}</li>
        <li className={css.li}>bad: {bad}</li>
        <li className={css.li}>total: {total}</li>
        <li className={css.li}>
          positive feedback: {counterFeedbackPercentage('good')}%
        </li>
      </ul>
    );
  } else {
    return <Notification message={'no feedback given'} />;
  }
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  counterFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics;
