import styled, { css } from 'styled-components';
import withContext from '../../../HOC/withContext';

const Button = styled.button`
  background-color: ${({ theme, pageContext }) => theme[pageContext]};
  width: 220px;
  height: 47px;
  border: 0;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: ${({ theme }) => theme.light};
  font-size: 1rem;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(0, 0%, 90%);
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default withContext(Button);
