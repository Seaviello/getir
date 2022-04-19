import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Colors } from '../../../../common/basics/Colors';
import { Spacing } from '../../../../common/basics/Spacing';
import { Price } from '../../../../common/components/Price/Price';
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
      <Total>
        <Price>{total}</Price>
      </Total>
    </Container>
  );
};

const Container = styled.div`
  border: 8px solid ${Colors.skyBlue100};
  background-color: ${Colors.white};
  padding: ${Spacing.M}px;
  display: flex;
  flex-direction: column;
`;

const Total = styled.div`
  align-self: flex-end;
  border: 2px solid ${Colors.skyBlue100};
  padding: ${Spacing.M}px;
  margin-top: ${Spacing.M}px;
`;
