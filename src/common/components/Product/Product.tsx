import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Product as ProductType } from '../../../features/types';
import { Colors } from '../../basics/Colors';
import { Spacing } from '../../basics/Spacing';
import { Price } from '../Price/Price';

export interface ProductProps {
  className?: string;
  product: ProductType;
  addProduct?: (product: ProductType) => void;
}

export const Product = ({ className, product, addProduct }: ProductProps): ReactElement => {
  return (
    <Container className={className}>
      <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${product.id}.png`} />
      <StyledPrice>{product.price}</StyledPrice>
      <Name>{product.name}</Name>
      {addProduct && <button onClick={() => addProduct(product)}>Add</button>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  border: 1px solid ${Colors.lilacPurple100};
  border-radius: ${Spacing.S}px;
  background-color: ${Colors.white};
`;

const StyledPrice = styled(Price)`
  margin-top: ${Spacing.XXS}px;
  height: ${Spacing.XL}px;
`;

const Name = styled.span`
  font-weight: bold;
  color: ${Colors.nightBlack100};
`;
