
import React, { useEffect, useState } from 'react';
import BackGroundImage from '../../assets/background_home_1.jpg';
import { getTours } from '../../api/tourApi.js';
import './Home.css';

export default function Home() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const data = await getTours();
        console.log("DATA:", data);

        setTours(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
        setTours([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  return (
    <div className="home-container">
      <header className="hero-section" style={{ backgroundImage: `url(${BackGroundImage})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">TOURS DU LỊCH</h1>
        </div>
      </header>

      <div className="tour-list-container">
        <h2>Danh sách tour</h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          tours.map((tour) => (
            <div key={tour.id}>
              <h3>{tour.name}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
}