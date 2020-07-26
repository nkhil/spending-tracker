import React, { useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Link } from 'react-router-dom';
import firebase from '../../lib/firebase';
import { useAppState } from '../../appContext';
import actions from '../../actions';

const TransactionsHome = ({ className }) => {
  const [state, dispatch] = useAppState();
  const { transactions } = state;
  const query = firebase.firestore().collection('transactions');
  const [value, loading, error] = useCollection(query);

  useEffect(() => {
    if (value) {
      dispatch({ type: actions.ADD_TRANSACTIONS, transactions: value.docs });
    }
  }, [value, dispatch]);

  if (error) {
    console.log('there was an error');
    console.log(error);
  }

  if (loading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <div className={className}>
      <Link to="/">Add transaction</Link>
      <h1>Transactions</h1>
      {transactions.map((trx, index) => {
        const { merchantName, trxAmount, category } = trx.data();
        const { id } = trx;
        return (
          <div key={id}>
            <h3>{merchantName}</h3>
            <p>
              <strong>Amount:</strong>
              {trxAmount}
            </p>
            <p>{category}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionsHome;
