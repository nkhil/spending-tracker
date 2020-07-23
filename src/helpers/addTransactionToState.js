export function addTransactionToState(transactionsState, newTransaction) {
  console.log('addTransactionToState -> newTransaction', newTransaction);
  console.log('addTransactionToState -> transactionsState', transactionsState);
  return [...transactionsState, newTransaction];
}

export function foo() {
  return 'foo';
}
