"use client";

import "./movelist.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  animeDatabase,
  episodeDatabase,
  findAnimeById,
  findEpisodesByAnimeId,
  movies,
} from "../../../services/data";

import React, { useEffect, useState } from "react";

export default function Movelist() {
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
  }

  const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const router = useRouter();

    const handleClick = () => {
      router.push(`movelist/movie/${movie.id}`);
    };

    return (
      <div className="movie-card" onClick={handleClick}>
        <img src={movie.image} alt={movie.title} className="movie-image" />
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

  return (
    <div className="movelist">
      <h1 className="text-3xl font-bold text-center mb-4">DANH SÁCH ANIME</h1>
      <div className="movie-list">
        {movies.slice(0, 10).map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}
