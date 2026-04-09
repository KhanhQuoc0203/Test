import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axiosClient from '../../api/axiosClient';
import './Register.css';
import travelImg from '../../assets/travel.png';

export default function Register() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'CUSTOMER' // Mặc định là khách hàng
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Kiểm tra mật khẩu khớp nhau
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }

    try {
      const response = await axiosClient.post('users/register/', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        role: formData.role
      });
      
      alert("Đăng ký thành công!");
      navigate('/login'); // Chuyển hướng sang trang đăng nhập
    } catch (error) {
      console.error("Lỗi đăng ký:", error.response?.data);
      alert("Đăng ký thất bại: " + JSON.stringify(error.response?.data));
    }
  };

  return (
    <div className="register-container">
      <div className="register-image-section">
        <img src={travelImg} alt="Travel Illustration" className="illustration" />
      </div>

      <div className="register-form-section">
        <div className="reg-form-wrapper">
          <h2 className="reg-form-title">ĐĂNG KÝ</h2>
          
          <form className="register-form" onSubmit={handleSubmit}>
            {/* Username (Bắt buộc cho Backend) */}
            <div className="reg-input-group">
              <label>Tên đăng nhập: <span>*</span></label>
              <input 
                type="text" 
                name="username"
                placeholder="Nhập tên đăng nhập" 
                value={formData.username}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="reg-input-group">
              <label>Số điện thoại: <span>*</span></label>
              <input 
                type="text" 
                name="phone"
                placeholder="Nhập số điện thoại" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="reg-input-group">
              <label>Email: <span>*</span></label>
              <input 
                type="email" 
                name="email"
                placeholder="Nhập địa chỉ email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Vai trò (Role) */}
            <div className="reg-input-group">
              <label>Bạn là:</label>
              <div className="role-options">
                <label className="radio-label">
                  <input 
                    type="radio" 
                    name="role" 
                    value="CUSTOMER"
                    checked={formData.role === 'CUSTOMER'} 
                    onChange={handleChange}
                  />
                  Khách du lịch
                </label>
                <label className="radio-label">
                  <input 
                    type="radio" 
                    name="role" 
                    value="PROVIDER"
                    checked={formData.role === 'PROVIDER'} 
                    onChange={handleChange}
                  />
                  Nhà cung cấp
                </label>
              </div>
            </div>

            <div className="reg-input-group">
              <label>Mật khẩu: <span>*</span></label>
              <input 
                type="password" 
                name="password"
                placeholder="Ít nhất 8 ký tự (chữ và số)" 
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="reg-input-group">
              <label>Nhập lại mật khẩu: <span>*</span></label>
              <input 
                type="password" 
                name="confirmPassword"
                placeholder="Xác nhận mật khẩu" 
                value={formData.confirmPassword}
                onChange={handleChange}
                required 
              />
            </div>

            <button type="submit" className="btn-finish">HOÀN TẤT</button>

            <div className="login-footer">
              <p>Đã có tài khoản?</p>
              <Link to="/login" className="login-now-link">Đăng nhập ngay</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}