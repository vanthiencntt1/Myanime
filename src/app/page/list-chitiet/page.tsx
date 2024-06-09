import React from "react";
import "./page.css";
export default function page() {
  return (
    <div className="page">
      <div className="header">
        <h1>Oshi No Ko Season 2</h1>
        <p>[Oshi No Ko] Season 3, My Star Season 3</p>
      </div>
      <div className="content">
        <div className="video-section">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg"
            alt="PV"
          />
          <button className="watch-button">XEM PHIM</button>
        </div>
        <div className="info-section">
          <p>
            Rating: <strong>91%</strong> (Đánh giá 9.1/10 từ 292 thành viên)
          </p>
          <p>
            Lượt Xem: <strong>218,110</strong>
          </p>
          <div className="details">
            <div className="detail-item">
              <span>Trạng thái:</span> Tập PV
            </div>
            <div className="detail-item">
              <span>Thể loại:</span> Anime sắp chiếu, Supernatural, Drama
            </div>
            <div className="detail-item">
              <span>Đạo diễn:</span> Hiramaki Daisuke
            </div>
            <div className="detail-item">
              <span>Quốc gia:</span> Nhật Bản
            </div>
            <div className="detail-item">
              <span>Số người theo dõi:</span> 0
            </div>
            <div className="detail-item">
              <span>Thời lượng:</span> ??
            </div>
            <div className="detail-item">
              <span>Chất lượng:</span> HD
            </div>
            <div className="detail-item">
              <span>Rating:</span> PG-13 - Teens 13 tuổi trở lên
            </div>
            <div className="detail-item">
              <span>Ngôn ngữ:</span> VietSub
            </div>
            <div className="detail-item">
              <span>Studio:</span> Doga Kobo
            </div>
            <div className="detail-item">
              <span>Season:</span> Mùa Xuân - 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
