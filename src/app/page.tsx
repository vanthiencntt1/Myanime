"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./page.css";
import Movelist from "./page/movelist/Movelist";

export default function Home() {
  const images = [
    {
      url: "https://wutheringwaves.kurogames.com/website-preface/assets/super_lingyang-699f1f98.png",
      name: "Lingyang",
      description:
        "Lingyang is a sincere, compassionate foreign visitor of the human community.",
    },
    {
      url: "https://wutheringwaves.kurogames.com/website-preface/assets/super_weilinai-fb41e537.png",
      name: "Verina",
      description:
        "Formerly a member of a Pioneer Association expedition team from the New Federation, Verina is a humble and determined plant breeder.",
    },
    {
      url: "https://wutheringwaves.kurogames.com/website-preface/assets/super_jianxin-7ae51570.png",
      name: "Jianxin",
      description:
        "Born in the wilderness and raised in a Taoist sect, Jianxin has been imparted the martial arts of Fengyiquan.",
    },
    {
      url: "https://wutheringwaves.kurogames.com/website-preface/assets/super_anke-968ed264.png",
      name: "Encore",
      description:
        "She always has two Woolies with her, who are Encore's best friends and protectors.",
    },
    {
      url: "https://wutheringwaves.kurogames.com/website-preface/assets/super_kakaluo-19b02a23.png",
      name: "Calcharo",
      description:
        'Leader of the "Ghost Hounds", an international mercenary group. Ruthless, vengeful, unforgiving. A potential client must be mindful of the price to pay before making him an offer.',
    },
  ];

  const [items, setItems] = useState(images);

  const nextSlide = () => {
    setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
  };

  const prevSlide = (e: any) => {
    e.preventDefault();
    setItems((prevItems) => [
      prevItems[prevItems.length - 1],
      ...prevItems.slice(0, prevItems.length - 1),
    ]);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="slide">
          {items.map((item, index) => (
            <div
              className="item"
              key={index}
              style={{ backgroundImage: `url(${item.url})` }}
            >
              <div className="content">
                <div className="name">{item.name}</div>
                <div className="des">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button className="prev" id="buttonss" onClick={prevSlide}></button>
          <button className="next" onClick={nextSlide}></button>
        </div>
      </div>
      <Movelist />
    </div>
  );
}
