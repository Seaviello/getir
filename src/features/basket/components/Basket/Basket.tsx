import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Colors } from '../../../../common/basics/Colors';
import { Spacing } from '../../../../common/basics/Spacing';
import { addProductAction, removeProductAction } from '../../redux/actions';
import { selectBasketProducts, selectBasketTotal } from '../../redux/selectors';
import { BasketProduct } from './BasketProduct';

export interface BasketProps {
  className?: string;
}

export const Basket = ({ className }: BasketProps): ReactElement => {
  const dispatch = useDispatch();
  const total = useSelector(selectBasketTotal);
  const basketProducts = useSelector(selectBasketProducts);

  return (
    <Container className={className}>
      {basketProducts.map((product) => (
        <BasketProduct
          key={product.id}
          product={product}
          onAdd={(product) => dispatch(addProductAction(product))}
          onRemove={(product) => dispatch(removeProductAction(product))}
        />
      ))}
      <span>{total}</span>
    </Container>
  );
};

const Container = styled.div`
  border: 8px solid ${Colors.skyBlue100};
  padding: ${Spacing.M}px;
`;
