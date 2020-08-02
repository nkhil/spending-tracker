import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import { useAppState } from '../../appContext';
import firebase from '../../lib/firebase';
import actions from '../../actions';
import categoryConstants from '../../constants/transactionCategories';
import commonMerchants from '../../constants/commonMerchants';
import CategoryButton from '../MerchantNameButton';
import InputField from '../InputField';
import NumberImputButton from '../NumberInputButton';

const Home = ({ className, history }) => {
  const [, dispatch] = useAppState();
  const [merchantName, setMerchantName] = useState('');
  const [trxAmount, setTrxAmount] = useState(0);
  const [trxCategory, setTrxCategory] = useState('Uncategorised');

  const amounts = [10, 5, 1];

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

  const decrement = (num) => {
    const totalAmount = trxAmount - num;
    const newTrxState = totalAmount < 0 ? 0 : totalAmount;
    setTrxAmount(newTrxState);
  };

  const setCommonMerchants = (merchantSuggestion) => {
    setMerchantName(merchantSuggestion);
  };

  const convertAndSetTrxAmount = (trxString) => setTrxAmount(+trxString);

  return (
    <div className={className}>
      <Link to="/transactions">Transactions</Link>
      <form onSubmit={addTransactionToState} className="form">
        <InputField
          name="merchant-name"
          placeholder="Merchant name"
          value={merchantName}
          onChange={setMerchantName}
        />
        <div className="category-options-row">
          {commonMerchants.map((merchant) => (
            <CategoryButton key={merchant} text={merchant} onClick={setCommonMerchants} />
          ))}
        </div>
        <InputField
          name="trx-amount"
          placeholder="Amount"
          type="text"
          pattern="[0-9]*"
          value={trxAmount}
          onChange={convertAndSetTrxAmount}
        />
        <div className="increment-decriment-buttons">
          {amounts.map((num) => (
            <NumberImputButton key={num} number={num} increment={increment} decrement={decrement} />
          ))}
        </div>
        <h3>
          Category:
          {' '}
          {trxCategory}
        </h3>
        <div className="category-options-row">
          {categoryConstants.map((cat) => (
            <CategoryButton key={cat} text={cat} onClick={setTrxCategory} />
          ))}
        </div>
        <input className="submit-button" type="submit" value="Submit" />
      </form>
    </div>
  );
};

const StyledHome = styled(Home)`
  
  @media screen and (max-width: 599px) {
    margin: 0 10px;

    .form {
      display: flex;
      flex-direction: column;
    }

    .category-options-row {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .increment-decriment-buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    .submit-button {
      background-color: black;
      color: white;
      font-size: 1.5rem;
      margin: 10px 0;
      padding: 5px;
      border-radius: 5px;
    }
  }
`;

export default withRouter(StyledHome);
