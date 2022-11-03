import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import withContext from '../../../HOC/withContext';
import { addItem as addNewItem } from '../../../actions';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50rem;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  justify-content: space-evenly;
  border-left: 0.5rem solid ${({ theme, pageContext }) => theme[pageContext]};
  z-index: 2;
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: 0.4s ease;
`;

const StyledTextArea = styled(Input)`
  resize: none;
  height: 20rem;
`;

const NewItemBar = ({ pageContext, isVisible, add }) => (
  <StyledWrapper isVisible={isVisible} pageContext={pageContext}>
    <div>
      <Heading>Add a new note</Heading>
      <Paragraph>A note requires title and description</Paragraph>
    </div>
    <Input placeholder={pageContext === 'twitters' ? 'account name' : 'title'} />
    {pageContext === 'articles' && <Input placeholder="link" />}
    <StyledTextArea as="textarea" placeholder="content" />
    <Button
      onClick={() =>
        add(pageContext, {
          title: 'Hello hello',
          content: 'lorem upsum',
        })
      }
    >
      Add Note
    </Button>
  </StyledWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  add: (itemType, content) => dispatch(addNewItem(itemType, content)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
