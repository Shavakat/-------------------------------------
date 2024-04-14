import React, { useRef } from 'react';
import './SliderGal.css';

const SliderGal = () => {
  const sliderGalRef = useRef(null);

  const preventScroll = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="sliderGal"
      onWheel={(e) => {
        e.preventDefault();
        sliderGalRef.current.scrollLeft += e.deltaY;
      }}
      onMouseEnter={() => {
        document.body.style.overflow = 'hidden';
      }}
      onMouseLeave={() => {
        document.body.style.overflow = 'auto';
      }}
    >
      <div className="sliderGal-wrapper" ref={sliderGalRef}>
        <div className="sliderGal-item">
          <img src="https://via.placeholder.com/300" alt="Slide 1" />
        </div>
        <div className="sliderGal-item">
          <img src="https://via.placeholder.com/300" alt="Slide 2" />
        </div>
        <div className="sliderGal-item">
          <img src="https://via.placeholder.com/300" alt="Slide 3" />
        </div>
        <div className="sliderGal-item">
          <img src="https://via.placeholder.com/300" alt="Slide 3" />
        </div>
        <div className="sliderGal-item">
          <img src="https://via.placeholder.com/300" alt="Slide 3" />
        </div>
        <div className="sliderGal-item">
          <img src="https://via.placeholder.com/300" alt="Slide 3" />
        </div>
        <div className="sliderGal-item">
          <img src="https://via.placeholder.com/300" alt="Slide 3" />
        </div>
        {/* Добавьте остальные слайды */}
      </div>
    </div>
  );
}

export default SliderGal;
