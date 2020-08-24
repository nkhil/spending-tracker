import React from 'react';
import styled from 'styled-components';
import moment from 'moment';


function TransactionItem({
  className, merchantName, trxAmount, category, date, id,
}) {
  const formattedDate = moment(date.toDate()).format('MMM D');
  return (
    <div className={className} key={id}>
      <div className="transaction-top-row">
        <h3 className="trx-merchant-name">{merchantName}</h3>
        <p className="trx-amount">
          £
          {trxAmount}
        </p>
      </div>
      <div className="transaction-top-row">
        <p className="trx-category">{category}</p>
        <p className="trx-date">{formattedDate}</p>
      </div>
    </div>
  );
}

const StyledTransactionItem = styled(TransactionItem)`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 15px 0;
  padding: 0 10px;

  .transaction-top-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 0 5px;
  }

  .trx-merchant-name {
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
  }

  .trx-amount {
    margin: 0;
  }

  .trx-date {
    font-size: 10px;
    color: #9A9A9A;
  }

  .trx-category {
    margin: 0;
    color: #9A9A9A;
    font-size: 12px;
  }
`;

export default StyledTransactionItem;
