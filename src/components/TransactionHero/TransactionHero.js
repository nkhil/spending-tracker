import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Button from '../Button';

function calculateTotalThisMonth(transactions) {
  return transactions.reduce((acc, trx) => {
    const { trxAmount, date } = trx.data();
    const currentMonth = new Date().getMonth();
    const trxMonth = date.toDate().getMonth();
    if (currentMonth === trxMonth) {
      acc += trxAmount;
    }
    return acc;
  }, 0);
}

function TransactionHero({ className, transactions }) {
  const totalThisMonth = calculateTotalThisMonth(transactions);
  const TOTAL_BUDGET = 800;
  const formattedCurrentMonth = moment().startOf('month').format('MMM D');
  const formattedMonthAndYear = moment().format('MMM YYYY');
  return (
    <div className={className}>
      <p className="transaction-hero-month-year">{formattedMonthAndYear}</p>
      <h2>
        £
        {TOTAL_BUDGET - totalThisMonth}
        {' '}
        remaining
      </h2>
      <p className="transaction-hero-spent-since">
        £
        {totalThisMonth}
        {' '}
        spent since
        {' '}
        {formattedCurrentMonth}
      </p>
      <Button path="/" text="Add transaction" />
    </div>
  );
}

const StyledTransactionHero = styled(TransactionHero)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 15px;
  margin: 5px;
  padding: 10px;

  p {
    margin: 0;
    color: #757575;
  }

  h2 {
    margin: 0;
  }

  .transaction-hero-month-year {
    margin: 15px;
  }

  .transaction-hero-spent-since {
    margin: 10px;
  }
`;

export default StyledTransactionHero;
