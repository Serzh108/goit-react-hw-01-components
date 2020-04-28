import React from 'react';
import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';
import styles from './statistics.module.css';

const Statistics = ({ title, stats }) => {
  const itemWidth = `${100 / stats.length}%`;
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>

        {stats.map(stat => (
          <StatisticItem key={stat.id} {...stat} itemWidth = {itemWidth} />
          // <li
          //   key={stat.id}
          //   className={styles.item}
          //   style={{ backgroundColor: randomBGColor(), width: itemWidth }}>
          //   <span className={styles.label}>{stat.label}</span>
          //   <span className={styles.percentage}>{stat.percentage}%</span>
          // </li>
        ))}

      </ul>
    </section>
  );
};


Statistics.defaultProps = {
  title: 'Upload stats',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

export default Statistics;
