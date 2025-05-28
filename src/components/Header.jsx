import React from 'react';
import './Header.css';
import avatar from '../assets/avatar.png'

const Header = () => {
  return (
    <div className="header">
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <span className="search-icon">🔍</span>
      </div>
      <div className="header-right">
        <span className="bell">🔔</span>
        <img
          className="avatar"
          src={avatar}
          alt="user"
        />
        <button className="add-btn">＋</button>
      </div>
    </div>
  );
};

export default Header;
