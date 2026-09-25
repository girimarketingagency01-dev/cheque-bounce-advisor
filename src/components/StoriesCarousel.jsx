"use client";

import { useRef, useState } from "react";

const videos = [
  {
    id: "sWWM6crHTIU",
    title: "Real Cheque Bounce Experience",
  },
  {
    id: "5AsMzmuwHVg",
    title: "Real Cheque Bounce Experience",
  },
  {
    id: "-P_FlsA1gNc",
    title: "Real Cheque Bounce Experience",
  },
  {
    id: "V19-5jjGYdw",
    title: "Real Cheque Bounce Experience",
  },
  {
    id: "tzwI4z6m5-Y",
    title: "Real Cheque Bounce Experience",
  },
];

export default function StoriesCarousel() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const container = carouselRef.current;

    if (!container) return;

    const cards = container.querySelectorAll(".story-video");

    if (!cards.length) return;

    const firstCard = cards[0];

    const cardWidth =
      firstCard.getBoundingClientRect().width + 22;

    const index = Math.round(
      container.scrollLeft / cardWidth
    );

    setActiveIndex(
      Math.min(index, videos.length - 1)
    );
  };

  return (
    <>
      <div
        ref={carouselRef}
        className="stories-carousel"
        onScroll={handleScroll}
      >
        {videos.map((video, index) => (
          <div className="story-video" key={video.id}>

            <div className="story-video-frame">

              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

            </div>

            <div className="story-video-info">

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {video.title}
              </h3>

            </div>

          </div>
        ))}
      </div>

      <div className="stories-scroll-hint">

        <div className="stories-dots">

          {videos.map((_, index) => (
            <span
              key={index}
              className={
                index === activeIndex
                  ? "active"
                  : ""
              }
            />
          ))}

        </div>

      </div>
    </>
  );
}