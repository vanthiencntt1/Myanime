"use client";
import React, { useState, useEffect } from "react";
import {
  animeDatabase,
  episodeDatabase,
  findAnimeById,
  findEpisodesByAnimeId,
  movies,
} from "../../../../../services/data";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Butterfly_Kids } from "next/font/google";

export default function Page({ params: { slug } }) {
  const [dataEpisodeDatabase, setEpisodeDatabase] = useState<Episode[]>([]);
  const router = useRouter();
  interface Episode {
    idmovies: number;
    id: number;
    link: string;
  }
  interface PageProps {
    params: {
      slug: string;
    };
  }
  // useEffect(() => {
  //   const movie = movies.find((movie) => movie.title === slug);
  //   if (movie) {
  //     const episodes = episodeDatabase.filter(
  //       (episode) => episode.idmovies === movie.id
  //     );
  //     setEpisodeDatabase(episodes);
  //   }
  // }, [slug]);

  useEffect(() => {
    // Fetch or set the episode database here
    setEpisodeDatabase(episodeDatabase);
  }, []);

  console.log(movies[slug]);
  console.log(dataEpisodeDatabase);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            src={movies[slug].image}
            alt={movies[slug].title}
            className="w-full"
          />
        </div>
        <div className="md:w-2/3 md:pl-4">
          <h1 className="text-2xl font-bold">{movies[slug].title}</h1>
          <p></p>
          <div className="flex mt-4">
            <div className="mr-4">
              <span className="font-bold">Diễn viên:</span>{" "}
              {movies[slug].rating}
            </div>
            <div>
              <span className="font-bold">Thể loại:</span>{" "}
              {movies[slug].episode}
            </div>
          </div>
          <h2 className="text-xl font-bold mt-4">Tập</h2>
          <ul className="list-disc pl-5">
            {dataEpisodeDatabase.map((index) => (
              <span
                key={index.id}
                className="mb-2 mx-4"
                // onClick={() => {
                //   router.push(`../movie/episode/${index.id}`);
                // }}
                onClick={() => {
                  router.push(`/anime/${slug}/episode/${index.id}`);
                }}
              >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {index.id}
                </button>
              </span>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
