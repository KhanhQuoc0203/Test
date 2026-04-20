import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axiosClient from '../../../api/axiosClient';
import Navbar from '../../../components/layout/Navbar';
import './SearchResult.css';

export default function SearchResult() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSearchResults = async () => {
            setLoading(true);
            try {
                const response = await axiosClient.get(`/tours/?search=${query}`);
                setResults(response.data);
            } catch (error) {
                console.error("Lỗi tìm kiếm:", error);
            } finally {
                setLoading(false);
            }
        };
        if (query) fetchSearchResults();
    }, [query]);

    return (
        <div className="search-result-page">
            {/* Thêm div search-container để căn giữa nội dung */}
            <div className="search-container">
                <header className="search-header">
                    <h2>Kết quả tìm kiếm cho: "<span>{query}</span>"</h2>
                    <p className="result-count">Tìm thấy <strong>{results.length}</strong> tour phù hợp</p>
                </header>

                {loading ? (
                    <div className="loading-state">
                        <div className="spinner"></div>
                        <p>Đang tìm kiếm tour tốt nhất cho bạn...</p>
                    </div>
                ) : (
                    <div className="search-results-grid">
                        {results.length > 0 ? (
                            results.map((tour) => (
                                <div key={tour.id} className="search-tour-card">
                                    <div className="card-image">
                                        <img src={tour.image || 'default-image.jpg'} alt={tour.name} />
                                    </div>
                                    <div className="card-content">
                                        <h3>{tour.title}</h3>
                                        <p className="location">{tour.address}</p>
                                        {/* <p className="location">Test</p> */}
                                        <p className="description">{tour.description?.substring(0, 100)}...</p>
                                        <div className="card-footer">
                                            <span className="price">{Number(tour.price).toLocaleString()} VNĐ</span>
                                            <Link to={`/tours/${tour.id}`} className="btn-view">Xem chi tiết</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-results">
                                <div className="no-results-icon"></div>
                                <h3>Rất tiếc, không tìm thấy tour nào!</h3>
                                <p>Hãy thử tìm kiếm với từ khóa khác như "Phú Quốc", "Đà Lạt"...</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}