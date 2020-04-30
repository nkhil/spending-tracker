import React from 'react';
import { useAppState } from '../appContext';

const Basket = () => {
  const [{basket}, dispatch] = useAppState();
  return (
    <>
    <ul>
      {basket.map((product, index) => {
        return (
          <li key={index}>{product.name} x {product.quantity}</li>
        )
      })}
    </ul>
    </>
  )
}

export default Basket;
