import React from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header.jsx'; 
import DashboardMainContent from './components/DashboardMainContent';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
