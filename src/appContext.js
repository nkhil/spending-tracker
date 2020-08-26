import React, { createContext, useContext, useReducer } from 'react';
import actions from './actions';
import addTransactionToState from './helpers/addTransactionToState';

const AppContext = createContext();

const appStateReducer = (state, action) => {
  switch (action.type) {
    case actions.USER_EXISTS: {
      return {
        ...state,
        currentUser: action.currentUser,
      };
    }
    case actions.ADD_TRANSACTION: {
      const newTrxState = addTransactionToState(state.transactions, action.transaction);
      return {
        ...state,
        transactions: newTrxState,
      };
    }
    case actions.ADD_TRANSACTIONS: {
      return {
        ...state,
        transactions: action.transactions,
      };
    }
    default:
      return state;
  }
};

const initialState = {
  transactions: [],
  currentUser: null,
};

export function useAppState() {
  return useContext(AppContext);
}

export function AppStateProvider({ children }) {
  const cake = useReducer(appStateReducer, initialState);
  return <AppContext.Provider value={cake}>{children}</AppContext.Provider>;
}
