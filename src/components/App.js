import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FfiendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from './Profile/user.json';
import statisticalData from './Statistics/statistical-data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

const App = () => (
  <>
    <Profile {...user} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FfiendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);
export default App;
