import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import LinkIcon from '../../../assets/icons/link.svg';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px 10px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : '#fff')};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.xs};
  margin: 0 0 10px;
`;

const StyledHeading = styled(Heading)`
  font-size: 2rem;
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitter};
  border-radius: 50%;
  position: absolute;
  right: 25px;
  top: 25px;
  z-index: 2;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  background: white url(${LinkIcon});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
`;

const StyledNoteLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.bold};
`;

const Card = ({ cardType, title, created, articleUrl, twitterName, content }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>{title}</StyledHeading>
      <DateInfo>{created}</DateInfo>
      {cardType === 'twitter' && (
        <StyledAvatar src="https://pbs.twimg.com/profile_images/1583787461968289792/Dg_ZwGgU_400x400.jpg" />
      )}
      {cardType === 'article' && <StyledLinkButton href={articleUrl} />}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        {content}
        <StyledNoteLink>Read more</StyledNoteLink>
      </Paragraph>
      <Button secondary>REMOVE</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardType: 'note',
  twitterName: null,
  articleUrl: null,
};

export default Card;
