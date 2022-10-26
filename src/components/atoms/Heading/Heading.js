import styled, { css } from 'styled-components';

const Heading = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.black};
  margin: 0;
  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
      color: ${({ theme }) => theme.grey300};
    `}
`;

export default Heading;
