import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from './UserPageTempalte';
import Button from '../components/atoms/Button/Button';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';

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
  text-decoration: underline;
`;

const DetailsTemplate = ({ pageType, title, content, twitterURL, articleURL, created }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>
      <Heading>{title}</Heading>
      <StyledCreatedParagraph>{created}</StyledCreatedParagraph>
      {pageType === 'twitters' ? <StyledTwitterImage src={twitterURL} /> : null}

      <Paragraph>{content}</Paragraph>

      {pageType !== 'notes' ? (
        <StyledLink href={articleURL}>Open this {pageType.replace('s', '')} </StyledLink>
      ) : null}
      <Button pageType={pageType}>Edit / Save</Button>
      <StyledButton>Remove note </StyledButton>
    </StyledWrapper>
  </UserPageTemplate>
);

UserPageTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string,
  content: PropTypes.string,
  twitterURL: PropTypes.string,
  articleURL: PropTypes.string,
  created: PropTypes.string,
};

UserPageTemplate.defaultProps = {
  pageType: 'notes',
};

export default DetailsTemplate;
