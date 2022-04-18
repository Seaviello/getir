import React, { forwardRef, HTMLProps, ReactElement, Ref } from 'react';
import styled from 'styled-components';

import { Colors } from '../../basics/Colors';
import { Spacing } from '../../basics/Spacing';

export interface InputProps extends Pick<HTMLProps<HTMLInputElement>, 'autoFocus' | 'onChange' | 'defaultValue'> {
  className?: string;
  label?: ReactElement | string;
  id: string;
  unit?: ReactElement | string;
}

export const Input = forwardRef(function Input(
  { className, label, id, unit, ...inputProps }: InputProps,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <Container className={className}>
      <StyledInput {...inputProps} id={id} ref={ref} />
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  height: 36px;
  flex: 1;
  min-width: 40px;
  max-width: 200px;
  margin-top: ${Spacing.XXS}px;
  padding-left: ${Spacing.XS}px;
  padding-right: ${Spacing.XS}px;
  border: 1px ${Colors.graphiteGray100} solid;
  border-radius: ${Spacing.XXXS}px;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    background-color: ${Colors.white};
    border: 1px ${Colors.skyBlue100} solid;
  }
`;
