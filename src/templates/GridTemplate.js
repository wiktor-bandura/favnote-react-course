import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from './UserPageTempalte';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';

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

const GridTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledPageHeader>
      <Input placeholder="Search" search />
      <StyledHeading as="h1">{pageType}</StyledHeading>
      <StyledHeading small>12 {pageType}</StyledHeading>
    </StyledPageHeader>
    <StyledGridWrapper>{children}</StyledGridWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageType: 'notes',
};
export default GridTemplate;
