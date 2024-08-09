"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { episodeDatabase } from "../../../../../../../services/data";

export default function Page({ slug }) {
  const router = useRouter();

  if (!slug) {
    return <div>Loading...</div>; // Xử lý trường hợp không có slug
  }

  const getEmbedUrl = (url) => {
    const youtubeRegex =
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/;
    const match = url.match(youtubeRegex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  return (
    <div>
      <h3>Episodes:</h3>
      <ul>
        {episodeDatabase.map((episode) => (
          <li key={episode.id}>
            {episode.link.includes("youtube.com") ||
            episode.link.includes("youtu.be") ? (
              <iframe
                width="320"
                height="240"
                src={getEmbedUrl(episode.link)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Episode ${episode.id}`}
              ></iframe>
            ) : (
              <video width="320" height="240" controls>
                <source src={episode.link} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
