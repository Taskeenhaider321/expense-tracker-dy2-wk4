import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Header({ totalIncome, darkMode, toggleDarkMode }) {
  return (
    <header className={darkMode ? 'dark-mode' : ''}>
      <h1>Expense Tracker</h1>
      <div className="total-income">${totalIncome}</div>
    </header>
  );
}

export default Header;