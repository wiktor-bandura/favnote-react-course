import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from './UserPageTempalte';
import Button from '../components/atoms/Button/Button';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import withContext from '../HOC/withContext';

const StyledTwitterImage = styled.img`
  display: block;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7rem;
`;

const StyledButton = styled(Button)`
  display: block;
  text-decoration: underline;
  font-weight: ${({ theme }) => theme.bold};
  margin-top: 2rem;
  background-color: transparent;
  text-align: left;
`;

const StyledCreatedParagraph = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1rem;
`;
const StyledLink = styled.a`
  display: block;
  padding: 1rem;
  color: ${({ theme }) => theme.black};
`;

const DetailsTemplate = ({ pageContext, title, content, twitterURL, articleURL, created }) => (
  <UserPageTemplate pageType={pageContext}>
    <StyledWrapper>
      <Heading>{title}</Heading>
      <StyledCreatedParagraph>{created}</StyledCreatedParagraph>
      {pageContext === 'twitters' ? (
        <StyledTwitterImage alt="twitter account avatar" src={twitterURL} />
      ) : null}

      <Paragraph>{content}</Paragraph>

      {pageContext !== 'notes' ? (
        <StyledLink target="_blank" href={pageContext === 'articles' ? articleURL : twitterURL}>
          Open this {pageContext.replace('s', '')}{' '}
        </StyledLink>
      ) : null}
      <Button>Edit / Save</Button>
      <StyledButton>Remove note </StyledButton>
    </StyledWrapper>
  </UserPageTemplate>
);

UserPageTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string,
  content: PropTypes.string,
  twitterURL: PropTypes.string,
  articleURL: PropTypes.string,
  created: PropTypes.string,
};

UserPageTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(DetailsTemplate);
