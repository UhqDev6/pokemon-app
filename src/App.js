import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DETAIL_PAGE, HOME_PAGE } from './constants/path';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import './style/index.css';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path={HOME_PAGE} element={<HomePage />} />
          <Route path={DETAIL_PAGE} element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
