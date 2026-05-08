import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RetroBio } from './components/RetroBio';
import { ArchiveRoot } from './pages/ArchiveRoot';
import { ThreadView } from './pages/ThreadView';
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RetroBio />} />
        <Route path="/archive" element={<ArchiveRoot />} />
        <Route path="/archive/:threadId" element={<ThreadView />} />
      </Routes>
    </BrowserRouter>);

}