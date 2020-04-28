import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const randomColor = () => Math.floor(Math.random() * 255);
const randomBGColor = () => `rgb(${randomColor()},${randomColor()},${randomColor()})`;

const Statistics = ({ title, stats }) => {
  const itemWidth = `${100 / stats.length}%`;
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={styles.item}
            style={{ backgroundColor: randomBGColor(), width: itemWidth }}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// const StatisticItem = ({ label, percentage }) => {
//   return (
//     <li key="stat.id" className="item">
//       <span className="label">{label}</span>
//       <span className="percentage">{percentage}</span>
//     </li>
//   );
// };

Statistics.defaultProps = {
  title: 'Upload stats',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
