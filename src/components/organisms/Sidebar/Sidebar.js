import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import BulbIcon from '../../../assets/icons/bulb.svg';
import LogoutIcon from '../../../assets/icons/logout.svg';
import PenIcon from '../../../assets/icons/pen.svg';
import TwitterIcon from '../../../assets/icons/twitter.svg';
import Logo from '../../../assets/icons/logo.svg';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 8rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.note};
  position: fixed;
  top: 0;
  left: 0;
`;

const IconsWrapper = styled.div`
  margin-top: 10rem;
`;

const StyledLogo = styled.img`
  position: absolute;
  width: 4rem;
  top: 3rem;
`;

const Sidebar = () => (
  <StyledWrapper>
    <StyledLogo src={Logo} />
    <IconsWrapper>
      <ButtonIcon as={NavLink} to="/" icon={PenIcon} />
      <ButtonIcon as={NavLink} to="/twitters" icon={TwitterIcon} />
      <ButtonIcon as={NavLink} to="/articles" icon={BulbIcon} />
    </IconsWrapper>
    <ButtonIcon icon={LogoutIcon} />
  </StyledWrapper>
);

export default Sidebar;
