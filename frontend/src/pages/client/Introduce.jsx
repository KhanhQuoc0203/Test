import React, { useState } from 'react';
import './Introduce.css';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header/Header'; 

export default function Introduce() {
  // Quản lý mục đang được chọn trong Sidebar
  const [activeTab, setActiveTab] = useState('introduce');

  // Dữ liệu nội dung dựa trên file docx bạn cung cấp
  const renderContent = () => {
    switch (activeTab) {
      case 'introduce':
        return (
          

          <div className="content-section">
            <h2 className="main-title">Giới thiệu Hệ thống Đặt Tour Du Lịch (H2KT)</h2>
            
            <h3>I. Về chúng tôi</h3>
            <p>
              Được ra đời với khát vọng số hóa ngành du lịch, Tour 2HKT là nền tảng trực tuyến uy tín kết nối trực tiếp giữa những người đam mê xê dịch và các đơn vị, cá nhân tổ chức tour chuyên nghiệp. [cite: 3]
              Chúng tôi cung cấp một hệ sinh thái đa dạng bao gồm: Tour khám phá, tour nghỉ dưỡng, tour mạo hiểm và các dịch vụ trải nghiệm địa phương độc đáo. [cite: 4]
            </p>
            
            <div className="contact-info">
              <p><strong>Thông tin liên hệ hệ thống:</strong></p>
              <p>Đơn vị quản lý: Công ty Cổ phần Công nghệ Du lịch H2KT</p>
              <p>Địa chỉ: IUH, Quận Gò Vấp, TP. Hồ Chí Minh</p>
              <p>Hotline hỗ trợ: 1900 XXXX (Hỗ trợ 24/7) </p>
              <p>Email: contact@2hkt.com </p>
            </div>

            <h3>II. Sứ mệnh của chúng tôi</h3>
            <p>Từ khi bắt đầu dự án, Tour 2HKT đã đặt ra sứ mệnh trở thành người bạn đồng hành đáng tin cậy trên mỗi hành trình của khách hàng.</p>
            <ul>
              <li><strong>Kết nối giá trị:</strong> Giúp các nhà tổ chức tour dễ dàng tiếp cận khách hàng và giúp khách hàng tìm thấy chuyến đi mơ ước chỉ với vài cú click.</li>
              <li><strong>Nâng tầm trải nghiệm:</strong> Không ngừng cải thiện công nghệ để quy trình tìm kiếm, đặt tour và thanh toán trở nên nhanh chóng, an toàn và minh bạch nhất.</li>
              <li><strong>Đồng hành bền vững:</strong> Thúc đẩy du lịch địa phương phát triển thông qua việc quảng bá các tour du lịch chất lượng và tử tế.</li>
            </ul>

            <h3>III. Giá trị cốt lõi</h3>
            <p>Hệ thống Tour 2HKT hoạt động dựa trên sự tin tưởng của cộng đồng du lịch, cam kết phục vụ theo 3 tiêu chí vàng:</p>
            <ul>
              <li><strong>Minh bạch & Rõ ràng:</strong> Tất cả thông tin về lịch trình, giá cả, số lượng chỗ trống và dịch vụ đi kèm đều được hiển thị công khai, không chi phí ẩn. </li>
              <li><strong>An toàn tuyệt đối:</strong> Tích hợp các cổng thanh toán hàng đầu và chính sách bảo mật thông tin khách hàng nghiêm ngặt theo tiêu chuẩn quốc tế. </li>
              <li><strong>Chất lượng kiểm định:</strong> Mọi tour du lịch đăng tải đều được đội ngũ quản trị viên kiểm duyệt kỹ lưỡng về uy tín của người tổ chức và tính thực tế của hành trình.</li>
            </ul>
          </div>
        );
      case 'guide':
        return (
          <div className="content-section">
            <h2>Hướng dẫn Đặt Tour &amp; Thanh toán Online</h2>
            <p>Chào mừng bạn đến với hệ thống đặt tour trực tuyến. Để có một chuyến đi trọn vẹn, hãy thực hiện theo các bước đơn giản sau:</p>
            <ol>
              <li><strong>Bước 1: Tìm kiếm tour</strong>: Sử dụng thanh tìm kiếm hoặc danh mục để chọn điểm đến, thời gian và loại hình tour mong muốn.</li>
              <li><strong>Bước 2: Kiểm tra chi tiết</strong>: Xem kỹ lịch trình, giá tour (bao gồm và không bao gồm những gì), chính sách trẻ em và các lưu ý đặc biệt.</li>
              <li><strong>Bước 3: Nhập thông tin</strong>: Chọn số lượng người đi, ngày khởi hành và điền thông tin liên hệ (Họ tên, Số điện thoại, Email).</li>
              <li><strong>Bước 4: Chọn phương thức thanh toán</strong>:
                <ul>
                  <li><strong>Chuyển khoản ngân hàng</strong>: Quý khách chuyển khoản vào số tài khoản chỉ định với nội dung: [Mã đơn hàng] - [Số điện thoại].</li>
                  <li><strong>Thanh toán thẻ/Ví điện tử</strong>: Kết nối qua cổng thanh toán an toàn (VNPay, Momo, Visa/Mastercard).</li>
                </ul>
              </li>
              <li><strong>Bước 5: Xác nhận</strong>: Sau khi thanh toán thành công, hệ thống sẽ gửi Voucher điện tử/Xác nhận đặt dịch vụ qua Email và SMS trong vòng 10-30 phút.</li>
            </ol>
          </div>
        );
      case 'policy':
        return (
          <div className="content-section">
            <h2>Chính sách Hủy tour &amp; Hoàn tiền</h2>
            <p>Vì đặc thù ngành du lịch phụ thuộc vào các dịch vụ đi kèm (vận chuyển, lưu trú), chúng tôi áp dụng chính sách đổi trả/hủy tour như sau:</p>
            <h3>A. Điều kiện thay đổi (Đổi tour/Đổi ngày)</h3>
            <ul>
              <li><strong>Trước 15 ngày khởi hành</strong>: Miễn phí thay đổi (tùy thuộc vào tình trạng chỗ trống và sự chênh lệch giá tour mới).</li>
              <li><strong>Từ 7 - 14 ngày trước khởi hành</strong>: Phí thay đổi là 10% tổng giá trị tour.</li>
              <li><strong>Dưới 7 ngày</strong>: Không hỗ trợ thay đổi, áp dụng theo chính sách hủy tour.</li>
            </ul>
            <h3>B. Chính sách Hủy tour (Hoàn tiền)</h3>
            <ul>
              <li><strong>Sau khi đặt cọc/thanh toán đến 15 ngày trước ngày đi</strong>: Phí hủy 10% giá tour.</li>
              <li><strong>Từ 8 đến 14 ngày trước ngày đi</strong>: Phí hủy 30% giá tour.</li>
              <li><strong>Từ 3 đến 7 ngày trước ngày đi</strong>: Phí hủy 50% giá tour.</li>
              <li><strong>Trong vòng 48 giờ trước ngày đi</strong>: Phí hủy 100% giá tour.</li>
            </ul>
            <h3>C. Quy định hoàn tiền</h3>
            <ul>
              <li>Số tiền hoàn lại sẽ được gửi trả về phương thức thanh toán ban đầu của quý khách.</li>
              <li>Thời gian xử lý hoàn tiền từ 3 - 7 ngày làm việc (tùy thuộc vào ngân hàng).</li>
              <li>Trong trường hợp bất khả kháng (thiên tai, dịch bệnh, hoãn chuyến bay), chúng tôi sẽ hỗ trợ quý khách dời lịch hoặc hoàn phí theo thực tế thỏa thuận với các bên đối tác cung cấp dịch vụ.</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="introduce-container">
      {/* Breadcrumb phía trên */}
      <div className="breadcrumb">
        Trang chủ / Giới thiệu hệ thống
      </div>

      <div className="introduce-layout">
        {/* Sidebar bên trái */}
        <aside className="sidebar">
          <h3>Tất cả bài viết</h3>
          <ul>
            <li 
              className={activeTab === 'introduce' ? 'active' : ''} 
              onClick={() => setActiveTab('introduce')}
            >
              Giới thiệu hệ thống 
            </li>
            <li 
              className={activeTab === 'guide' ? 'active' : ''} 
              onClick={() => setActiveTab('guide')}
            >
              Hướng dẫn đặt tour Online
            </li>
            <li 
              className={activeTab === 'policy' ? 'active' : ''} 
              onClick={() => setActiveTab('policy')}
            >
              Chính sách đổi trả
            </li>
            {/* <li>Chính sách thanh toán</li>
            <li>Chính sách đổi trả, bảo hành</li>
            <li>Chính sách bảo mật</li>
            <li>Thể lệ tích điểm thành viên</li> */}
          </ul>
        </aside>

        {/* Nội dung bên phải */}
        <main className="main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}