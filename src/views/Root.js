import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Notes from './Notes';
import Articles from './Articles';
import Twitters from './Twitters';
import DetailsPage from './DetailsPage';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Routes>
        <Route exact path="/notes" element={<Notes />} />
        <Route path="/notes/:id" element={<DetailsPage />} />
        <Route exact path="/articles" element={<Articles />} />
        <Route exact path="/twitters" element={<Twitters />} />
        <Route path="*" element={<Navigate to="/notes" replace />} />
      </Routes>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
