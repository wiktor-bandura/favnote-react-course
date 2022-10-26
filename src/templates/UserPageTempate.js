import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from '../components/organisms/Sidebar/Sidebar';
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

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    <StyledPageHeader>
      <Input placeholder="Search" search />
      <StyledHeading as="h1">{pageType}s</StyledHeading>
      <StyledHeading small>12 {pageType}s</StyledHeading>
    </StyledPageHeader>
    <StyledGridWrapper>{children}</StyledGridWrapper>
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

UserPageTemplate.defaultProps = {
  pageType: 'note',
};
export default UserPageTemplate;
