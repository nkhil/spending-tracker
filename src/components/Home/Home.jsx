import React, { useState } from 'react';
import { useAppState } from '../../appContext';
import actions from '../../actions';

const Home = () => {
  const [state, dispatch] = useAppState();
  const [merchantName, setMerchantName] = useState('');
  const [trxAmount, setTrxAmount] = useState('');

  console.log('state', state);

  const addTransactionToState = (e) => {
    e.preventDefault();
    const transaction = { merchantName, trxAmount };
    dispatch({ type: actions.ADD_TRANSACTION, transaction });
    setMerchantName('');
    setTrxAmount('');
  };

  return (
    <>
      <form onSubmit={addTransactionToState}>
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
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Home;
