import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../../common/basics/Colors';
import { Spacing } from '../../../../common/basics/Spacing';
import { Button, ButtonType } from '../../../../common/components/Button/Button';
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
        <StyledPrice>{product.price}</StyledPrice>
      </ProductInfo>
      <ProductActions>
        <StyledButton onClick={() => onRemove(product)} buttonType={ButtonType.PLAIN}>
          –
        </StyledButton>
        <Quantity>{product.quantity}</Quantity>
        <StyledButton onClick={() => onAdd(product)} buttonType={ButtonType.PLAIN}>
          +
        </StyledButton>
      </ProductActions>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.dirtyWhite100};
  padding-bottom: ${Spacing.M}px;

  & + & {
    padding-top: ${Spacing.M}px;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledPrice = styled(Price)`
  margin-top: ${Spacing.XXS}px;
`;
const Name = styled.span``;
const Quantity = styled.span`
  margin-left: ${Spacing.XXXXS}px;
  margin-right: ${Spacing.XXXXS}px;
  background-color: ${Colors.skyBlue100};
  padding: ${Spacing.XXS}px ${Spacing.S}px;
  color: ${Colors.white};
`;
const ProductActions = styled.div`
  display: flex;
  align-items: center;
`;
const StyledButton = styled(Button)`
  font-size: 20px;
`;
