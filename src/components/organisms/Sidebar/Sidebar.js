import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem;
`;

const StyledLogo = styled.img`
  width: 4rem;
`;

const Sidebar = ({ pageType }) => (
  <StyledWrapper activeColor={pageType}>
    <StyledLogo src={Logo} />
    <div>
      <ButtonIcon
        as={NavLink}
        to="/notes"
        icon={PenIcon}
        style={({ isActive }) => isActive && 'active'}
        end
      />
      <ButtonIcon
        as={NavLink}
        to="/twitters"
        icon={TwitterIcon}
        style={({ isActive }) => isActive && 'active'}
      />
      <ButtonIcon
        as={NavLink}
        to="/articles"
        icon={BulbIcon}
        style={({ isActive }) => isActive && 'active'}
      />
    </div>
    <ButtonIcon icon={LogoutIcon} />
  </StyledWrapper>
);

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  pageType: 'notes',
};

export default Sidebar;
