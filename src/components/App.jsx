import user from '../user/user.json';
import data from '../data/data.json';
import friends from '../friends/friends.json';
import transactions from '../transactions/transactions.json';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';
import { TransactionHistory } from './transactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        background: 'silver',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
{/* --------------Component Profile---------------------- */}
{/* <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
        
/> */}

{/*---------------------Component Statistics----------------*/}
{/* <Statistics title="Upload stats" stats={data} /> */}
{/* <Statistics stats={data} />   */}
      
{/* ---------------------Component FrendList---------------- */}
      {/* <FriendList items ={friends} /> */}


{/* ---------------Component TransactionHistory----------------- */}
      <TransactionHistory items={transactions} />
    </div>
  );
};
