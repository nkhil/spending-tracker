import React, { useState, useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Link } from 'react-router-dom';
import firebase from '../../lib/firebase';


const TransactionsHome = ({ className }) => {
  const [transactions, setTransactions] = useState([]);
  const query = firebase.firestore().collection('transactions');
  const [value, loading, error] = useCollection(query);

  useEffect(() => {
    if (value) {
      setTransactions(value.docs);
    }
  }, [value]);

  if (error) {
    console.log('there was an error');
    console.log(error);
  }

  return (
    <>
      <Link to="/">Add transaction</Link>
      <h1>Transactions</h1>
      {transactions.map((trx, index) => {
        const { merchantName, trxAmount, category } = trx.data();
        return (
          <div key={index}>
            <h3>{merchantName}</h3>
            <p>
              <strong>Amount:</strong>
              {trxAmount}
            </p>
            <p>{category}</p>
          </div>
        );
      })}
    </>
  );
};

export default TransactionsHome;
