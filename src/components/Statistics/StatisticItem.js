import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const randomColor = () => Math.floor(Math.random() * 255);
const randomBGColor = () =>
  `rgb(${randomColor()},${randomColor()},${randomColor()})`;

const StatisticItem = ({ label, percentage, itemWidth }) => {
  return (
    <li
      className={styles.item}
      style={{ backgroundColor: randomBGColor(), width: itemWidth }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;
