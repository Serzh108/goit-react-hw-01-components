import React from 'react';
import PropTypes from 'prop-types';
import styles from './transaction.module.css';


const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistor}>
      <thead>
        <tr>
          <th className={styles.transactionTh}>Type</th>
          <th className={styles.transactionTh}>Amount</th>
          <th className={styles.transactionTh}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, indx) => {
          return (
          <tr key={item.id}>
            <td className={(indx % 2) ? styles.transactionTd : styles.transactionOdd}>{item.type}</td>
            <td className={(indx % 2) ? styles.transactionTd : styles.transactionOdd}>{item.amount}</td>
            <td className={(indx % 2) ? styles.transactionTd : styles.transactionOdd}>{item.currency}</td>
          </tr>
        )})}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
