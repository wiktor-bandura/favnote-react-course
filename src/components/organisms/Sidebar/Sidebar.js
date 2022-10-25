import styled from 'styled-components';
import BulbIcon from '../../../assets/icons/bulb.svg';
import LogoutIcon from '../../../assets/icons/logout.svg';
import PenIcon from '../../../assets/icons/pen.svg';
import TwitterIcon from '../../../assets/icons/twitter.svg';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';

const Sidebar = () => (
  <div>
    <p>logo</p>
    <div>
      <ButtonIcon icon={BulbIcon} />
      <ButtonIcon icon={PenIcon} />
      <ButtonIcon icon={TwitterIcon} />
    </div>
  </div>
);

export default Sidebar;
