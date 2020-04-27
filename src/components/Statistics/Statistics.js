import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  console.log('stats =', stats);
  return (
      <section className="statistics">
        <h2 className="title">{title}</h2>
        <ul className="stat-list">
          {stats.map(stat => (
            <li key={stat.id} className="item">
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}</span>
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
