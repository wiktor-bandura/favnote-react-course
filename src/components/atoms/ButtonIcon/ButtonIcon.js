import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 10px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: 50% 50%;
  background-color: transparent;
  outline: none;

  &.active {
    background-color: #fff;
  }
`;
export default ButtonIcon;
