import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import TransactionItem from './TransactionItem';

function TransactionList({ className, transactions }) {
  const formatDate = (date) => moment(date.toDate()).format('MMM D');
  let trxColour = true;
  if (transactions.length === 0) {
    return (
      <div className={className}>
        <h2>No transactions found.</h2>
      </div>
    );
  }
  return (
    <div className={className}>
      <h2>Transactions</h2>
      {transactions.map((trx, index) => {
        const {
          merchantName, trxAmount, category, date,
        } = trx.data();
        const { id } = trx;
        const formattedDate = formatDate(date);
        if (index > 0) {
          const lastDate = formatDate(transactions[index - 1].data().date);
          if (formattedDate !== lastDate) {
            trxColour = !trxColour;
          }
        }
        return (
          <TransactionItem
            merchantName={merchantName}
            trxAmount={trxAmount}
            category={category}
            date={formattedDate}
            key={id}
            colour={trxColour}
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
    margin-top: 10px;
    padding-top: 10px;
  }

  background-color: white;
  border-radius: 10px;
  margin: 10px;
  margin-top: 20px;
`;

export default StyledTransactionList;
