import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Search from '../../assets/search.png';
import User from '../../assets/user.png';
import './Navbar.css';

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<img src={Logo} alt="Travela Logo" />
				<span>H2KT</span>
			</div>
      
			<ul className="navbar-links">
				<li className="active"><Link to="/">Trang Chủ</Link></li>
				<li><Link to="/introduce">Giới Thiệu</Link></li>
				<li><Link to="/tours">Tours</Link></li>
				<li><Link to="/destinations">Điểm Đến</Link></li>
				<li><Link to="/contact">Liên Hệ</Link></li>
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
	);
}