import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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
  border-left: 0.5rem solid ${({ theme, pageContext }) => theme[pageContext]};
  z-index: 2;
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: 0.4s ease;
`;

const StyledTextArea = styled(Input)`
  resize: none;
  height: 20rem;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > * {
    margin-bottom: 2rem;
  }
`;

const NewItemBar = ({ pageContext, isVisible, add }) => (
  <StyledWrapper isVisible={isVisible} pageContext={pageContext}>
    <div>
      <Heading>Add a new note</Heading>
      <Paragraph>A note requires title and description</Paragraph>
    </div>
    <Formik
      initialValues={{
        title: '',
        content: '',
        articleURL: '',
        created: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        add(pageContext, values);
        setSubmitting(false);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <StyledForm>
          <Input
            type="text"
            name="title"
            placeholder={pageContext === 'twitters' ? 'account name' : 'title'}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {pageContext === 'articles' && (
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.articleURL}
              type="text"
              name="articleURL"
              placeholder="link"
            />
          )}
          <StyledTextArea
            as="textarea"
            placeholder="content"
            name="content"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <Button type="submit">Add Note</Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  add: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  add: (itemType, content) => dispatch(addNewItem(itemType, content)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
