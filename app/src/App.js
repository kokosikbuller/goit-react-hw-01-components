import React, { Component } from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics'; 
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import FriendList from './components/FriendList/FriendList';
import user from './JSON/user.json'
import statisticalData from './JSON/statistical-data.json'
import friends from './JSON/friends.json'
import transactions from './JSON/transactions.json'

class App extends Component {
  render() {
    return (
      <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> 

      <hr/>

      <Statistics 
        title="Upload stats" 
        stats={statisticalData} 
      />;
      <Statistics 
        stats={statisticalData} 
      />;
      
      <hr/>

      <FriendList friends={friends} />
      
      <hr/>

      <TransactionHistory items={transactions} />
      </>
    );
  }
}

export default App;





