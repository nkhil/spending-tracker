import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../../lib/firebase';
import TransactionList from '../TransactionsList';
import TransactionHero from '../TransactionHero';
import Navbar from '../Navbar';

const TransactionsHome = ({
  className, currentUser, navbarIsVisible, setNavbarIsVisible,
}) => {
  const [transactions, setTransactions] = useState([]);

  const query = firebase.firestore().collection('transactions').where('userId', '==', (currentUser ? currentUser.uid : '1')).orderBy('date', 'desc');
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
        <div className={className}>
          <Navbar isVisible={navbarIsVisible} setIsVisible={setNavbarIsVisible} />
          <h1>Loading...</h1>
        </div>
      </>
    );
  }

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <div className={className}>
        <Navbar isVisible={navbarIsVisible} setIsVisible={setNavbarIsVisible} />
        <TransactionHero transactions={transactions} />
        <TransactionList transactions={transactions} />
      </div>
    </>
  );
};

const StyledTransactionHome = styled(TransactionsHome)`
  background-color: #F3F4F6;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 450px;
`;

export default StyledTransactionHome;
