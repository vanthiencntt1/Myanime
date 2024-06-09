"use client";

import "./movelist.css";
import Link from "next/link";
import internal from "stream";
//import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

export default function Movelist() {
  const movies: Movie[] = [
    {
      id: 1,
      title: "Girls Band Cry",
      episode: "08",
      views: "140,160",
      rating: "9.7",
      image:
        "https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/photo-1-1585035267743258966442-1.jpg",
    },
    {
      id: 2,
      title: "Vạn Giới Chí Tôn",
      episode: "118",
      views: "576,929",
      rating: "5.4",
      image:
        "https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/06173639-8-anh-anime-nam-ngau-va-ca-tinh.jpeg",
    },
    {
      id: 3,
      title: "Tiên Võ Truyền",
      episode: "63",
      views: "2,311,498",
      rating: "7.8",
      image:
        "https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/anh-3-1579452203870281251510.jpg",
    },
    {
      id: 4,
      title: "Bách Gia Quyết: Gi...",
      episode: "HOÀN TẤT",
      views: "132,225",
      rating: "8.1",
      image:
        "https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/photo-1-15458158314091990061049.jpg",
    },
    {
      id: 5,
      title: "Thái Cổ Tinh Thần Q...",
      episode: "40",
      views: "244,051",
      rating: "5.5",
      image: "https://cdn.9pay.vn/tin-tuc/blobid1691048559736-1691048578.jpg",
    },
    {
      id: 6,
      title: "Đấu Phá Thương Kh...",
      episode: "99",
      views: "12,520,034",
      rating: "9.3",
      image: "https://cdn.9pay.vn/tin-tuc/blobid1691048706701-1691048726.jpg",
    },
    {
      id: 7,
      title: "Tiểu Binh Truyền Kỳ",
      episode: "07",
      views: "7,074",
      rating: "5.5",
      image:
        "https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/anime-top-5-nhan-vat-nu-co-than-hinh-boc-lua-nhat-man-anh_4-1757.jpg",
    },
    {
      id: 8,
      title: "One Piece - Đảo Hải...",
      episode: "1107",
      views: "158,869,794",
      rating: "9.1",
      image: "https://cdn.9pay.vn/tin-tuc/blobid1691049036092-1691049046.jpg",
    },
    {
      id: 9,
      title: "Sasayaku You ni Ko...",
      episode: "08",
      views: "434,952",
      rating: "9.8",
      image: "https://cdn.9pay.vn/tin-tuc/blobid1691049668961-1691049681.jpg",
    },
    {
      id: 10,
      title: "Bất Thường Tại Trườ...",
      episode: "09",
      views: "1,805,271",
      rating: "9.5",
      image:
        "https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/photo-1-1585035267743258966442-1.jpg",
    },
    {
      id: 11,
      title: "Bất Thường Tại Trườ...",
      episode: "09",
      views: "1,805,271",
      rating: "9.5",
      image:
        "https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/photo-1-1585035267743258966442-1.jpg",
    },

    {
      id: 12,
      title: "Bất Thường Tại Trườ...",
      episode: "09",
      views: "1,805,271",
      rating: "9.5",
      image:
        "https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/photo-1-1585035267743258966442-1.jpg",
    },
    {
      id: 13,
      title: "Bất Thường Tại Trườ...",
      episode: "09",
      views: "1,805,271",
      rating: "9.5",
      image:
        "https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/photo-1-1585035267743258966442-1.jpg",
    },
  ];
  // Thêm các bộ phim khác tương tự

  interface Movie {
    id: number;
    title: string;
    episode: string;
    views: string;
    rating: string;
    image: string;
  }

  interface MovieCardProps {
    movie: Movie;
    onClick: () => void; // Add onClick to the props interface
  }

  const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
    // Accept onClick in the component
    return (
      <div className="movie-card">
        {/* Add onClick handler to the div */}
        <img
          src={movie.image}
          alt={movie.title}
          className="movie-image"
          onClick={() => router.push("/page/list-chitiet")}
        />
        <div className="movie-details">
          <div className="movie-title">{movie.title}</div>
          <div className="movie-info">
            <span className="movie-episode">Tập {movie.episode}</span>
            <span className="movie-views">Lượt xem: {movie.views}</span>
            <span className="movie-rating">★{movie.rating}</span>
          </div>
        </div>
      </div>
    );
  };
  const router = useRouter();

  return (
    <div className="movelist">
      <h1 className="text-3xl font-bold text-center mb-4">DANH SÁCH ANIME</h1>
      <div className="movie-list">
        {movies.slice(0, 10).map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
            onClick={() => router.push("/page/list-chitiet")}
          />
        ))}
      </div>
    </div>
  );
}
