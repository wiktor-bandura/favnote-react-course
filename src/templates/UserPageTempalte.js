import PropTypes from 'prop-types';
import Sidebar from '../components/organisms/Sidebar/Sidebar';
import withContext from '../HOC/withContext';

const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default withContext(UserPageTemplate);
