import styled, { css } from 'styled-components';
import magnifierIcon from '../../../assets/icons/magnifier.svg';

const Input = styled.input`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  border-radius: 20px;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }

  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      background-image: url(${magnifierIcon});
      background-size: 15px;
      background-position: 10px 50%;
      background-repeat: no-repeat;
      margin-bottom: 2rem;
    `}
`;

export default Input;
