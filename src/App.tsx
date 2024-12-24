import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { RankingsPage } from './pages/RankingsPage';
import { SourcesPage } from './pages/SourcesPage';
import { LanguagePage } from './pages/languages/LanguagePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rankings" element={<RankingsPage />} />
        <Route path="/sources" element={<SourcesPage />} />
        <Route path="/languages/:language" element={<LanguagePage />} />
      </Routes>
    </Router>
  );
}

export default App;