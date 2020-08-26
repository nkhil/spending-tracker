import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../../lib/firebase';
import { useAppState } from '../../appContext';
import TransactionList from '../TransactionsList';
import TransactionHero from '../TransactionHero';

const TransactionsHome = ({ className, currentUser }) => {
  const [transactions, setTransactions] = useState([]);

  const query = firebase.firestore().collection('transactions').orderBy('date', 'desc');
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

  if (loading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className={className}>
      <button type="button" onClick={() => firebase.auth().signOut()}>
        signout
      </button>
      <TransactionHero transactions={transactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

const StyledTransactionHome = styled(TransactionsHome)`
  background-color: #F3F4F6;
`;

export default StyledTransactionHome;
