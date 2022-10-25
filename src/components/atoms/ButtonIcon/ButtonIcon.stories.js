import styled from 'styled-components';
import BulbIcon from '../../../assets/icons/bulb.svg';
import LogoutIcon from '../../../assets/icons/logout.svg';
import PenIcon from '../../../assets/icons/pen.svg';
import PlusIcon from '../../../assets/icons/plus.svg';
import TwitterIcon from '../../../assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  background-color: ${({ theme }) => theme.note};
`;

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
  decorators: [
    (Story) => (
      <YellowBackground>
        <Story />
      </YellowBackground>
    ),
  ],
};

export const bulbIcon = () => <ButtonIcon icon={BulbIcon} />;
export const logoutIcon = () => <ButtonIcon icon={LogoutIcon} />;
export const penIcon = () => <ButtonIcon icon={PenIcon} />;
export const plusIcon = () => <ButtonIcon icon={PlusIcon} />;
export const twitterIcon = () => <ButtonIcon icon={TwitterIcon} />;
