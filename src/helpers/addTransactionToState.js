export default function addTransactionToState(transactionsState, newTransaction) {
  return [...transactionsState, newTransaction];
}
