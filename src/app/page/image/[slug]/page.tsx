"use client";
import React, { useState } from "react";

export default function page({ params: { slug } }) {
  const [isHovered, setIsHovered] = useState(false);
  const imageData = [
    {
      id: 0,
      url: "https://i.pinimg.com/originals/42/3a/fa/423afad315517beaa4e426f0692cab01.jpg",
      title: "Image 01",
    },
    {
      id: 1,
      url: "https://i.pinimg.com/originals/a5/3b/e7/a53be74177b2e2a0178ea5140cf7fad9.gif",
      title: "Image 02",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/originals/ec/b1/65/ecb165f0798dac86a35540f6b63f71c5.jpg",
      title: "Image 03",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/originals/84/4e/54/844e545359ec8a09e7f8010298b87e95.jpg",
      title: "Image 04",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/originals/05/68/3b/05683b96bbcdfd9ee8ee7d465bb60a82.jpg",
      title: "Image 05",
    },
    {
      id: 5,
      url: "https://i.pinimg.com/originals/5a/d4/9f/5ad49f693fb0476538ff22a5ce5a6f40.jpg",
      title: "Image 06",
    },
    {
      id: 6,
      url: "https://i.pinimg.com/originals/6c/b6/96/6cb69686e5be40366ef732f20ddef4a8.jpg",
      title: "Image 07",
    },
  ];
  console.log(imageData[slug]);

  const photoStyle = {
    width: "100%",
    height: "100%",
    transition: "transform 0.3s ease",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
  };
  const imageContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  };
  return (
    <div style={imageContainerStyle}>
      <img
        className="photo"
        src={imageData[slug].url}
        alt={`Image ${imageData[slug].id}`}
        style={photoStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
}
