import React, { HTMLProps, ReactElement } from 'react';
import styled from 'styled-components';

import { Colors } from '../../basics/Colors';
import { Spacing } from '../../basics/Spacing';

export interface ButtonProps extends Pick<HTMLProps<HTMLButtonElement>, 'onClick'> {
  className?: string;
  children: ReactElement | string;

  htmlType?: 'button' | 'submit';
}

export const Button = ({ className, children, htmlType, ...buttonHTMLProps }: ButtonProps): ReactElement => {
  return (
    <Container className={className} type={htmlType} {...buttonHTMLProps}>
      {children}
    </Container>
  );
};

const Container = styled.button`
  background-color: ${Colors.skyBlue100};
  color: ${Colors.white};
  padding: ${Spacing.XXS}px ${Spacing.L}px;
  border: none;
  border-radius: ${Spacing.XXXS}px;

  &:active,
  &:hover,
  &:focus {
    background-color: ${Colors.skyBlue200};
  }
`;
