import css from './statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, feedbackPercentage }) => {
  return (
    <ul className={css.ul}>
      <li className={css.li}>good: {good}</li>
      <li className={css.li}>neutral: {neutral}</li>
      <li className={css.li}>bad: {bad}</li>
      <li className={css.li}>total: {total}</li>
      <li className={css.li}>positive feedback: {feedbackPercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  feedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
