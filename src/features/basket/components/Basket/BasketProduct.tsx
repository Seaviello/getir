import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Price } from '../../../../common/components/Price/Price';
import { BasketProduct as BasketProductType, Product } from '../../../types';

export interface BasketProductProps {
  className?: string;
  product: BasketProductType;
  onAdd: (product: Product) => void;
  onRemove: (product: Product) => void;
}

export const BasketProduct = ({ className, product, onAdd, onRemove }: BasketProductProps): ReactElement => {
  return (
    <Container className={className}>
      <ProductInfo>
        <Name>{product.name}</Name>
        <Price>{product.price}</Price>
      </ProductInfo>
      <ProductActions>
        <button onClick={() => onRemove(product)}>-</button>
        <Quantity>{product.quantity}</Quantity>
        <button onClick={() => onAdd(product)}>+</button>
      </ProductActions>
    </Container>
  );
};

const Container = styled.div``;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.span``;
const Quantity = styled.span``;
const ProductActions = styled.div``;
