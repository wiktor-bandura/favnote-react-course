import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Notes from './Notes';
import Articles from './Articles';
import Twitters from './Twitters';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Notes />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/twitters" element={<Twitters />} />
      </Routes>
      <h1>Notes</h1>
      <h1>Twitter</h1>
      <h1>Articles</h1>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
