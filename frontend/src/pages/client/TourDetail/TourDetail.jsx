import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import './TourDetail.css';

export default function TourDetail() {
  // Giả sử đây là dữ liệu mẫu, sau này Tân sẽ đổ API vào đây
  const tourData = {
    title: "Khám Phá Đảo Phú Quốc",
    price: "5.500.000 VNĐ",
    image: "https://via.placeholder.com/800x400", // Thay bằng ảnh tour thật
    duration: "3 Ngày 2 Đêm",
    schedule: [
      { day: "Ngày 1", content: "Đón khách tại sân bay, nhận phòng và ăn tối hải sản." },
      { day: "Ngày 2", content: "Lặn ngắm san hô tại Nam Đảo, tham quan nhà tù Phú Quốc." },
      { day: "Ngày 3", content: "Mua sắm đặc sản và tiễn khách ra sân bay." }
    ]
  };

  return (
    <div className="tour-detail-container">
      <Navbar />
      
      <div className="tour-detail-content">
        {/* Phần Ảnh lớn */}
        <div className="tour-header-image">
          <img src={tourData.image} alt={tourData.title} />
        </div>

        <div className="tour-info-layout">
          {/* Cột trái: Thông tin chính */}
          <div className="tour-main-info">
            <h1>{tourData.title}</h1>
            <p className="tour-duration">⏱ Thời gian: {tourData.duration}</p>
            
            <div className="tour-schedule">
              <h3>Lịch trình chi tiết</h3>
              {tourData.schedule.map((item, index) => (
                <div key={index} className="schedule-item">
                  <strong>{item.day}:</strong> {item.content}
                </div>
              ))}
            </div>
          </div>

          {/* Cột phải: Box đặt tour (Sticky) */}
          <aside className="tour-booking-card">
            <p className="price-label">Giá từ:</p>
            <h2 className="tour-price">{tourData.price}</h2>
            <button className="btn-book-now">ĐẶT NGAY</button>
            <p className="contact-help">Hỗ trợ trực tuyến 24/7</p>
          </aside>
        </div>
      </div>
    </div>
  );
}