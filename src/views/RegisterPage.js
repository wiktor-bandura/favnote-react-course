import React from 'react';
import { Formik, Form, Field } from 'formik';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Heading from '../components/atoms/Heading/Heading';
import Input from '../components/atoms/Input/Input';
import Button from '../components/atoms/Button/Button';

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

const StyledLink = styled(NavLink)``;

const RegisterPage = () => (
  <StyledWrapper>
    <Heading>FAV NOTE.</Heading>
    <SubHeading small>Your new favourite online notes experience</SubHeading>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        axios
          .post('http://localhost:9000/api/user/register', {
            username,
            password,
          })
          .then(() => console.log('Registration successful'))
          .catch((err) => console.log(err));
      }}
    >
      {() => (
        <StyledForm>
          <SubHeading>Sign in</SubHeading>
          <Input as={Field} name="username" type="text" placeholder="login" />
          <Input as={Field} name="password" type="password" placeholder="password" />
          <Button activeColor="notes" type="submit">
            Register
          </Button>
          <NavLink to="/login">I want to log in</NavLink>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

export default RegisterPage;
