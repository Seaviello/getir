import styled, { css } from 'styled-components';

const fontRegular = css`
  font-weight: 400;
`;

const fontSemiBold = css`
  font-weight: 600;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fontLight = css`
  font-weight: 300;
`;

export const Header = styled.h2`
  ${fontRegular};
  font-size: 32px;
  line-height: 48px;
`;

export const SectionHeader = styled.h3`
  ${fontSemiBold};
  font-size: 21px;
  line-height: 28px;
`;

export const SubSectionHeader = styled.h4`
  ${fontSemiBold};
  font-size: 16px;
  line-height: 24px;
`;

export const Body = styled.p`
  ${fontRegular};
  font-size: 14px;
  line-height: 20px;
`;

export const FormLabel = styled.label`
  ${fontSemiBold};
  font-size: 14px;
  line-height: 20px;
`;
