import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Error404 from './components/atoms/Error404';
import Header from './components/moleculas/Header';
import {
  ALL,
  DETAIL_PAGE, FAVORITE, HOME_PAGE, NOTFOUND,
} from './constants/path';
import DetailPage from './pages/DetailPage';
import Favorite from './pages/Favorite';
import HomePage from './pages/HomePage';
import './style/index.css';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path={HOME_PAGE} element={<HomePage />} />
          <Route path={DETAIL_PAGE} element={<DetailPage />} />
          <Route path={FAVORITE} element={<Favorite />} />
          <Route path={NOTFOUND} element={<Error404 />} />
          <Route path={ALL} element={<Navigate to={NOTFOUND} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
