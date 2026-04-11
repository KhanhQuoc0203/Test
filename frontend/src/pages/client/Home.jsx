// import React from 'react';
// import Navbar from '../../components/layout/Navbar';
// import BackGroundImage from '../../assets/background_home_1.jpg';
// import './Home.css';

// export default function Home() {
//   return (
//     <div className="home-container">
//       <Navbar />
      
//       <header 
//         className="hero-section" 
//         style={{ backgroundImage: `url(${BackGroundImage})` }}
//       >
       
//         <div className="hero-overlay"></div>
        
//         <div className="hero-content">
//           <h1 className="hero-title">TOURS DU LỊCH</h1>
//         </div>
//       </header>
      
      
//     </div>
//   );
// }
import React from 'react';
// Import Header mới từ thư mục Common
import Header from '../../components/common/Header/Header'; 
import BackGroundImage from '../../assets/background_home_1.jpg';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* Thay thế Navbar bằng Header */}
      <Header />
      
      <header 
        className="hero-section" 
        style={{ backgroundImage: `url(${BackGroundImage})` }}
      >
        {/* Lớp phủ tối để làm nổi bật chữ */}
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <h1 className="hero-title">TOURS DU LỊCH</h1>
        </div>
      </header>
      
      {/* Các phần tiếp theo như danh sách tour sẽ code ở đây */}
    </div>
  );
}