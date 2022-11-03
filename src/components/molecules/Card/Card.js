import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import LinkIcon from '../../../assets/icons/link.svg';
import { removeItem } from '../../../actions';
import withContext from '../../../HOC/withContext';

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
  border: 5px solid ${({ theme }) => theme.twitters};
  border-radius: 50%;
  position: absolute;
  right: 25px;
  top: 25px;
  z-index: 1;
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

class Card extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () =>
    this.setState({
      redirect: true,
    });

  render() {
    const { pageContext, title, created, articleUrl, content, id, remove } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Navigate to={`/${pageContext}/${id}`} replace />;
    }

    return (
      <StyledWrapper onClick={this.handleCardClick}>
        <InnerWrapper activeColor={pageContext}>
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>
          {pageContext === 'twitters' && (
            <StyledAvatar src="https://pbs.twimg.com/profile_images/1583787461968289792/Dg_ZwGgU_400x400.jpg" />
          )}
          {pageContext === 'articles' && <StyledLinkButton href={articleUrl} />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>
            {content}
            <StyledNoteLink>Read more</StyledNoteLink>
          </Paragraph>
          <Button onClick={() => remove(pageContext, id)} secondary>
            REMOVE
          </Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

Card.defaultProps = {
  pageContext: 'notes',
  articleUrl: null,
};
const mapDispatchToProps = (dispatch) => ({
  remove: (itemType, id) => dispatch(removeItem(itemType, id)),
});

export default connect(null, mapDispatchToProps)(withContext(Card));
