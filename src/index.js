import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './features/Header/component';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main/component';
import { SearchedPage } from './pages/searched/component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <main className='wrapper'>
        <Routes>
          <Route path='/github-reps' element={<MainPage/>} />
          <Route path='/github-reps/searched/:search' element={<SearchedPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
