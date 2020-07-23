import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import { useAppState } from '../../appContext';
import firebase from '../../lib/firebase';
import actions from '../../actions';
import categoryDropdownOptions from '../../constants/transactionCategories';

const Home = ({ className, history }) => {
  const [, dispatch] = useAppState();
  const [merchantName, setMerchantName] = useState('');
  const [trxAmount, setTrxAmount] = useState(0);
  const [trxCategory, setTrxCategory] = useState('');

  const saveTransaction = async (trx) => {
    try {
      const db = firebase.firestore();
      await db.collection('transactions').add({
        ...trx,
      });
      history.push('/transactions');
    } catch (err) {
      console.log('ERROR \n', err);
    }
  };

  const addTransactionToState = async (e) => {
    e.preventDefault();
    const name = merchantName || 'Default';
    const transaction = { merchantName: name, trxAmount, category: trxCategory };
    dispatch({ type: actions.ADD_TRANSACTION, transaction });
    setMerchantName('');
    setTrxAmount('');
    await saveTransaction(transaction);
  };

  const increment = (num) => {
    setTrxAmount(trxAmount + num);
  };

  const changeCategory = (e) => {
    setTrxCategory(e.target.value);
  };

  return (
    <div className={className}>
      <Link to="/transactions">Transactions</Link>
      <form onSubmit={addTransactionToState} className="form">
        <input
          name="merchant-name"
          placeholder="merchant name"
          type="text"
          value={merchantName}
          onChange={(e) => setMerchantName(e.target.value)}
        />
        <input
          name="trx-amount"
          placeholder="Amount"
          type="text"
          pattern="[0-9]*"
          value={trxAmount}
          onChange={(e) => setTrxAmount(+e.target.value)}
        />
        <button onClick={() => increment(10)} type="button">+10</button>
        <button onClick={() => increment(5)} type="button">+5</button>
        <button onClick={() => increment(1)} type="button">+1</button>
        <select
          value={trxCategory}
          onChange={changeCategory}
        >
          {categoryDropdownOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};


const StyledHome = styled(Home)`
  .form {
    display: flex;
    flex-direction: column;
  }
`;

export default withRouter(StyledHome);
