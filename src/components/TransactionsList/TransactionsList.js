import React from 'react';
import styled from 'styled-components';
import TransactionItem from './TransactionItem';

function TransactionList({ className, transactions }) {
  return (
    <div className={className}>
      <h2>Transactions</h2>
      {transactions.map((trx) => {
        const {
          merchantName, trxAmount, category, date,
        } = trx.data();
        const { id } = trx;
        return (
          <TransactionItem
            merchantName={merchantName}
            trxAmount={trxAmount}
            category={category}
            date={date}
            key={id}
          />
        );
      })}
    </div>
  );
}

const StyledTransactionList = styled(TransactionList)`

  h2 {
    font-size: 1rem;
    color: #AAAAAA;
    padding-left: 5px;
    margin-top: 35px;
  }

  background-color: white;
  border-radius: 10px;
  margin: 10px;
`;

export default StyledTransactionList;
