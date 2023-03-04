import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/moleculas/Header';
import { DETAIL_PAGE, FAVORITE, HOME_PAGE } from './constants/path';
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
        </Routes>
      </main>
    </div>
  );
}

export default App;
