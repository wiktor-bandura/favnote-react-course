import styled, { css } from 'styled-components';

const Heading = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.black};

  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
    `}
`;

export default Heading;
