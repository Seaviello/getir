import cx from 'classnames';
import React, { HTMLProps, ReactElement } from 'react';
import styled from 'styled-components';

import { Colors } from '../../basics/Colors';
import { Spacing } from '../../basics/Spacing';

export enum ButtonType {
  PRIMARY = 'primary',
  PLAIN = 'plain',
}

export interface ButtonProps extends Pick<HTMLProps<HTMLButtonElement>, 'onClick'> {
  className?: string;
  children: ReactElement | string | number;
  buttonType?: ButtonType;

  htmlType?: 'button' | 'submit';
}

export const Button = ({
  className,
  children,
  buttonType = ButtonType.PRIMARY,
  htmlType,
  ...buttonHTMLProps
}: ButtonProps): ReactElement => {
  return (
    <Container className={cx(buttonType, className)} type={htmlType} {...buttonHTMLProps}>
      {children}
    </Container>
  );
};

const Container = styled.button`
  padding: ${Spacing.S}px;
  border: none;
  border-radius: ${Spacing.XXXS}px;

  &.${ButtonType.PRIMARY} {
    background-color: ${Colors.skyBlue100};
    color: ${Colors.white};

    &:active,
    &:hover,
    &:focus {
      background-color: ${Colors.skyBlue200};
    }
  }

  &.${ButtonType.PLAIN} {
    background-color: transparent;
    color: ${Colors.graphiteGray100};

    &:active,
    &:hover,
    &:focus {
      color: ${Colors.skyBlue100};
    }
  }
`;
