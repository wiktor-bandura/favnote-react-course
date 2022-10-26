import { withRouter } from 'storybook-addon-react-router-v6';
import Sidebar from './Sidebar';

export default {
  title: 'Sidebar',
  component: Sidebar,
  decorators: [withRouter],
};

export const sidebarExample = () => <Sidebar />;
