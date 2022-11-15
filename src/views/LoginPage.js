import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { NavLink, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading/Heading';
import Input from '../components/atoms/Input/Input';
import Button from '../components/atoms/Button/Button';
import { authenticateAction } from '../actions';
import { routes } from '../routes';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.notes};
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5rem;
  background-color: #fff;
  height: 350px;
`;

const SubHeading = styled(Heading)`
  color: #000;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const LoginPage = ({ userID, authenticate }) => (
  <StyledWrapper>
    <Heading>FAV NOTE.</Heading>
    <SubHeading small>Your new favourite online notes experience</SubHeading>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        authenticate(username, password);
      }}
    >
      {() => {
        if (userID) {
          return <Navigate to={routes.home} />;
        }
        return (
          <StyledForm>
            <Input as={Field} name="username" type="text" placeholder="login" />
            <Input as={Field} name="password" type="password" placeholder="password" />
            <Button activeColor="notes" type="submit">
              Log in
            </Button>
            <NavLink to="/register">I want to register</NavLink>
          </StyledForm>
        );
      }}
    </Formik>
  </StyledWrapper>
);

const mapStateToProps = ({ userID = null }) => ({
  userID,
});

const mapDispatchToProps = (dispatch) => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
