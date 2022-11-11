import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from './UserPageTempalte';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import withContext from '../HOC/withContext';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from '../assets/icons/plus.svg';
import NewItemBar from '../components/organisms/NewItemBar/NewItemBar';

const StyledGridWrapper = styled.div`
  position: relative;
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

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ theme, pageContext }) => theme[pageContext]};
  border-radius: 50%;
  z-index: 3;
`;

class GridTemplate extends React.Component {
  state = {
    isNewItemVisible: false,
  };

  handleNewItemToggle = () =>
    this.setState((prevState) => ({
      isNewItemVisible: !prevState.isNewItemVisible,
    }));

  render() {
    const { children, pageContext } = this.props;
    const { isNewItemVisible } = this.state;

    return (
      <UserPageTemplate>
        <StyledPageHeader>
          <Input placeholder="Search" search />
          <StyledHeading as="h1">{pageContext}</StyledHeading>
          <StyledHeading small>12 {pageContext}</StyledHeading>
        </StyledPageHeader>
        <StyledGridWrapper>
          <>
            {children}
            <StyledButtonIcon
              pageContext={pageContext}
              icon={plusIcon}
              onClick={() => this.handleNewItemToggle()}
            />
          </>
        </StyledGridWrapper>
        <NewItemBar handleClose={this.handleNewItemToggle} isVisible={isNewItemVisible} />
      </UserPageTemplate>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};
export default withContext(GridTemplate);
