import React from 'react';
import './Sidebar.css';

const navItems = [
  { icon: '🏠', label: 'Dashboard' },
  { icon: '📜', label: 'History' },
  { icon: '📅', label: 'Calendar' },
  { icon: '📋', label: 'Appointments' },
  { icon: '📊', label: 'Statistics' },
  { icon: '💬', label: 'Chat' },
  { icon: '🛠️', label: 'Support' },
  { icon: '⚙️', label: 'Setting' },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <span className="logo-highlight">Health</span>care.
      </div>
      <div className="section">General</div>
      <ul className="nav">
        {navItems.map((item, index) => (
          <li key={index}>
            <span className="icon">{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
