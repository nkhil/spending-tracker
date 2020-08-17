import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Link } from 'react-router-dom';
import firebase from '../../lib/firebase';
import { useAppState } from '../../appContext';
import TransactionList from '../TransactionsList';

const TransactionsHome = ({ className }) => {
  const [, dispatch] = useAppState();
  const [transactions, setTransactions] = useState([]);
  const query = firebase.firestore().collection('transactions').orderBy('date', 'desc');
  const [value, loading, error] = useCollection(query);

  useEffect(() => {
    if (value) {
      setTransactions(value.docs);
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
      <TransactionList transactions={transactions} />
    </div>
  );
};

const StyledTransactionHome = styled(TransactionsHome)`
  background-color: #F3F4F6;
`;

export default StyledTransactionHome;
