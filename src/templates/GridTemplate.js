import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from './UserPageTempalte';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import withContext from '../HOC/withContext';

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  padding: 3rem 8rem 3rem 3rem;
`;

const StyledPageHeader = styled.div`
  padding: 3rem;
`;

const StyledHeading = styled(Heading)`
  ::first-letter {
    text-transform: uppercase;
  }
`;

const GridTemplate = ({ children, pageContext }) => (
  <UserPageTemplate>
    <StyledPageHeader>
      <Input placeholder="Search" search />
      <StyledHeading as="h1">{pageContext}</StyledHeading>
      <StyledHeading small>12 {pageContext}</StyledHeading>
    </StyledPageHeader>
    <StyledGridWrapper>{children}</StyledGridWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};
export default withContext(GridTemplate);
