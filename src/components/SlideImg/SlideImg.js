import React, { useState } from 'react';
import './style.scss';
import Carousel from 'react-multi-carousel';
import image1 from 'assets/img/image1.png';
import image2 from 'assets/img/image2.png';
import image3 from 'assets/img/image3.png';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

// nhay: 5
// BP: 3
// tia sang: 4

const SlideImg = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="carousel">
      <Carousel
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay
        additionalTransfrom={1}
        autoPlaySpeed={5000}
        transitionDuration={0}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        afterChange={(previousSlide, { currentSlide, onMove }) => {
          setIndex(currentSlide)
        }}
      >
        <img alt="img" src={image1} className={`carousel-img ${index === 5 && 'transform'}`} />
        <img alt="img" src={image2} className={`carousel-img ${(index === 3 || index === 0)  && 'transform'}`} />
        <img alt="img" src={image3} className={`carousel-img ${index === 4 && 'transform'}`} />
      </Carousel>
    </div>
  );
};

export default SlideImg;
