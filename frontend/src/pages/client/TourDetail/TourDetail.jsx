import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTourById } from '../../../api/tourApi';
import Navbar from '../../../components/layout/Navbar';
import './TourDetail.css';

export default function TourDetail() {
    const { id } = useParams(); // Lấy ID từ URL (ví dụ: /tours/1)
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const data = await getTourById(id);
                setTour(data);
            } catch (error) {
                console.error("Lỗi lấy chi tiết tour:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchDetail();
    }, [id]);

    if (loading) return <div className="loading">Đang tải thông tin tour...</div>;
    if (!tour) return <div className="error">Không tìm thấy tour này!</div>;

    return (
        <div className="tour-detail-page">
            {/* <Navbar /> */}
            <div className="tour-detail-container">
                {/* Phần 1: Ảnh tiêu đề lớn */}
                <div className="tour-hero">
                    <img src={tour.image || 'https://via.placeholder.com/1200x500'} alt={tour.name} />
                    <div className="tour-title-overlay">
                        <h1>{tour.name}</h1>
                    </div>
                </div>

                <div className="tour-content-layout">
                    {/* Phần 2: Nội dung bên trái (Mô tả, Lịch trình) */}
                    <main className="tour-main">
                        <section className="description">
                            <h3>Giới thiệu tour</h3>
                            <p>{tour.description}</p>
                        </section>

                        <section className="schedule">
                            <h3>Lịch trình chuyến đi</h3>
                            {/* Giả sử schedule là một chuỗi văn bản có xuống dòng */}
                            <div className="schedule-text">
                                {tour.schedule || "Lịch trình đang được cập nhật..."}
                            </div>
                        </section>
                    </main>

                    {/* Phần 3: Sidebar bên phải (Giá và Nút Đặt) */}
                    <aside className="tour-sidebar">
                        <div className="booking-card">
                            <p className="price-tag">Giá từ:</p>
                            <h2 className="price-amount">{Number(tour.price).toLocaleString()} VNĐ</h2>
                            <button className="btn-book-now">ĐẶT NGAY</button>
                            
                            {/* Thông tin người tạo (Mới thêm) */}
                            <div className="creator-info">
                                <p><strong>Người tổ chức:</strong> {tour.creator_name}</p>
                                <p><strong>Liên hệ:</strong> {tour.creator_phone}</p>
                            </div>

                            <div className="trust-badges">
                                <span>Xác nhận tức thì</span>
                                <span>Hỗ trợ 24/7</span>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}