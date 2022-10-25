import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  width: 67px;
  height: 67px;
  border: none;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: 40%;
  background-position: 50% 50%;
  background-color: transparent;
  outline: none;

  ${({ active }) =>
    active &&
    css`
      background-color: #fff;
    `}
`;
export default ButtonIcon;
