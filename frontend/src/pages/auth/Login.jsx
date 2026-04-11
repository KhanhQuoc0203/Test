import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosClient from '../../api/axiosClient';
import './Login.css';
import travelImg from '../../assets/travel.png';

export default function Login() {
  const navigate = useNavigate();
  
  const [loginData, setLoginData] = useState({
    username: '', // Số điện thoại hoặc username
    password: ''
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosClient.post('users/login/', loginData);
      
      // Lưu token vào localStorage để dùng cho các trang sau
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      alert("Đăng nhập thành công!");
      navigate('/'); // Về trang chủ
    } catch (error) {
      console.error("Lỗi đăng nhập:", error.response?.data);
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-image-section">
        <img src={travelImg} alt="Travel Illustration" className="illustration" />
      </div>

      <div className="login-form-section">
        <div className="form-wrapper">
          <h2 className="form-title">ĐĂNG NHẬP</h2>
          
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              {/* Số điện thoại hoặc tên đăng nhập */}
              <label>Tên đăng nhập: <span>*</span></label>
              <input 
                type="text"
                name="username" 
                placeholder="Nhập tên đăng nhập" 
                value={loginData.username}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="input-group">
              <label>Mật khẩu: <span>*</span></label>
              <input 
                type="password" 
                name="password" 
                placeholder="Nhập mật khẩu" 
                value={loginData.password}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" name="remember" />
                <span>Nhớ mật khẩu</span>
              </label>
              <Link to="/forgot-password" className="forgot-link">
                Quên mật khẩu
              </Link>
            </div>

            <button type="submit" className="btn-login">ĐĂNG NHẬP</button>

            <div className="register-footer">
              <p>Chưa có tài khoản?</p>
              <Link to="/register" className="register-link">Đăng ký ngay</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}