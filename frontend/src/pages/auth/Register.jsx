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
    role: 'CUSTOMER'
  });

  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg(''); // clear lỗi khi user nhập lại
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ❌ Validate mật khẩu
    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("Mật khẩu xác nhận không khớp!");
      return;
    }

    if (formData.password.length < 8) {
      setErrorMsg("Mật khẩu phải có ít nhất 8 ký tự!");
      return;
    }

    try {
      await axiosClient.post('users/register/', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        role: formData.role
      });

      setErrorMsg('');
      navigate('/login');
    } catch (error) {
      console.error("Lỗi đăng ký:", error.response?.data);

      // lấy lỗi backend nếu có
      const backendMsg =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Đăng ký thất bại!";

      setErrorMsg(backendMsg);
    }
  };

  return (
    <div className="register-container">
      {/* IMAGE */}
      <div className="register-image-section">
        <img src={travelImg} alt="Travel Illustration" className="illustration" />
      </div>

      {/* FORM */}
      <div className="register-form-section">
        <div className="reg-form-wrapper">
          <h2 className="reg-form-title">ĐĂNG KÝ</h2>

          <form className="register-form" onSubmit={handleSubmit}>

            {/* USERNAME */}
            <div className="reg-input-group">
              <label>Tên đăng nhập: <span>*</span></label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={errorMsg ? "input-error" : ""}
                required
              />
            </div>

            {/* PHONE */}
            <div className="reg-input-group">
              <label>Số điện thoại: <span>*</span></label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errorMsg ? "input-error" : ""}
                required
              />
            </div>

            {/* EMAIL */}
            <div className="reg-input-group">
              <label>Email: <span>*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errorMsg ? "input-error" : ""}
                required
              />
            </div>

            {/* ROLE */}
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

            {/* PASSWORD */}
            <div className="reg-input-group">
              <label>Mật khẩu: <span>*</span></label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errorMsg ? "input-error" : ""}
                required
              />
            </div>

            {/* CONFIRM */}
            <div className="reg-input-group">
              <label>Nhập lại mật khẩu: <span>*</span></label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errorMsg ? "input-error" : ""}
                required
              />
            </div>

            {/* ERROR */}
            {errorMsg && <p className="error-message">{errorMsg}</p>}

            {/* BUTTON */}
            <button type="submit" className="btn-finish">
              HOÀN TẤT
            </button>

            {/* FOOTER */}
            <div className="login-footer">
              <p>Đã có tài khoản?</p>
              <Link to="/login" className="login-now-link">
                Đăng nhập ngay
              </Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}