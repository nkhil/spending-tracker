import React, { createContext, useContext, useReducer } from 'react';
import actions from './actions';
import { addProductToBasket, deductProductFromBasket } from './helpers/basketHelper';
import { addTransactionToState } from './helpers/addTransactionToState';

const AppContext = createContext();

const appStateReducer = (state, action) => {
  switch (action.type) {
  case actions.ADD_TRANSACTION: {
    // Attempt to add to db
    const newTrxState = addTransactionToState(state.transactions, action.transaction);
    return {
      ...state,
      transactions: newTrxState,
    };
  }
  case 'ADD_TO_BASKET':
  case 'INCREMENT_ITEM': {
    const newBasketState = addProductToBasket(state.basket, action.transaction);
    localStorage.setItem('basket', JSON.stringify(newBasketState));
    return {
      ...state,
      basket: newBasketState,
    };
  }
  case 'GET_FROM_LOCAL_STATE': {
    return {
      ...state,
      basket: action.basket,
    };
  }
  case 'DECREMENT_ITEM': {
    const newBasketState = deductProductFromBasket(state.basket, action.product);
    localStorage.setItem('basket', JSON.stringify(newBasketState));
    return {
      ...state,
      basket: newBasketState,
    };
  }
  default:
    return state;
  }
};

const initialState = {
  transactions: [],
};

export function useAppState() {
  return useContext(AppContext);
}

export function AppStateProvider({ children }) {
  const cake = useReducer(appStateReducer, initialState);
  return <AppContext.Provider value={cake}>{children}</AppContext.Provider>;
}
