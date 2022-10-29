import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import MainTemplate from '../templates/MainTemplate';
import Notes from './Notes';
import Articles from './Articles';
import Twitters from './Twitters';
import DetailsPage from './DetailsPage';
import { routes } from '../routes';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route path={routes.notes} element={<Notes />} />
          <Route path={routes.note} element={<DetailsPage />} />
          <Route path={routes.articles} element={<Articles />} />
          <Route path={routes.article} element={<DetailsPage />} />
          <Route path={routes.twitters} element={<Twitters />} />
          <Route path={routes.twitter} element={<DetailsPage />} />
          <Route path={routes.home} element={<Navigate to={routes.notes} replace />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
