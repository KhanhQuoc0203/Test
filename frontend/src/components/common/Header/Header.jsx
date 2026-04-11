import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../../assets/logo.png'; // Cập nhật lại đường dẫn cho đúng
import Search from '../../../assets/search.png';
import User from '../../../assets/user.png';
import './Header.css';

export default function Header() {
  const location = useLocation();

  // Hàm để kiểm tra xem link có đang active hay không
  const isActive = (path) => location.pathname === path;

  return (
    <header className="header-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="Travela Logo" />
          <span>H2KT</span>
        </div>
        
        <ul className="navbar-links">
          <li className={isActive('/') ? 'active' : ''}>
            <Link to="/">Trang Chủ</Link>
          </li>
          <li className={isActive('/introduce') ? 'active' : ''}>
            <Link to="/introduce">Giới Thiệu</Link>
          </li>
          <li className={isActive('/tours') ? 'active' : ''}>
            <Link to="/tours">Tours</Link>
          </li>
          <li className={isActive('/destinations') ? 'active' : ''}>
            <Link to="/destinations">Điểm Đến</Link>
          </li>
          <li className={isActive('/contact') ? 'active' : ''}>
            <Link to="/contact">Liên Hệ</Link>
          </li>
        </ul>

        <div className="navbar-actions">
          <button className="btn-search">
            <img src={Search} alt="search" />
          </button>
          <Link to="/bookings" className="btn-book">Book Now ↗</Link>
          <Link to="/login" className="btn-user">
            <img src={User} alt="user" />
          </Link>
        </div>
      </nav>
    </header>
  );
}