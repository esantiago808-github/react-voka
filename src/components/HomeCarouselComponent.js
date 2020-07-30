import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Col } from 'reactstrap';

const items = [
  {
    src: '/assets/images/kapolei_aerial_9.jpg',
    altText: 'Villages of Kapolei',
    caption: 'Villages of Kapolei'
  },
  {
    src: '/assets/images/easteregghunt.jpg',
    altText: 'Family Friendly Community Events',
    caption: 'Family Friendly Community Events'
  },
  {
    src: '/assets/images/kapolei_playground_9_1.jpg',
    altText: 'Community Playgrounds',
    caption: 'Community Playgrounds'
  },
  {
    src: '/assets/images/uh_west_oahu_9.jpg',
    altText: 'University of Hawaii West Oahu Campus',
    caption: 'University of Hawaii West Oahu Campus'
  },
  {
    src: '/assets/images/kapolei_walking_paths_9.jpg',
    altText: 'Community Walking Paths',
    caption: 'Community Walking Paths'
  },
  {
    src: '/assets/images/kapolei_elementary_9.jpg',
    altText: 'Kapolei Elementary School',
    caption: 'Kapolei Elementary School'
  },
  {
    src: '/assets/images/kapolei_state_bldg_9.jpg',
    altText: 'Kapolei State Building',
    caption: 'Kapolei State Building'
  },
  {
    src: '/assets/images/kapolei_hale_9.jpg',
    altText: 'Kapolei Hale',
    caption: 'City and County of Honolulu - Kapolei Hale'
  },
  {
    src: '/assets/images/kamakana_alii_9.jpg',
    altText: 'Kamakana Alii',
    caption: 'Shopping at Kamakana Alii'
  },
  {
    src: '/assets/images/kapolei_golf_course_9.jpg',
    altText: 'Kapolei Golf Course',
    caption: 'Kapolei Golf Course'
  }
];

const HomeCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} height="300" width="600" />
        <CarouselCaption captionText={item.caption} className="carouselCaption" />
      </CarouselItem>
    );
  });

  return (
    <Col>  
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        
      >
        <CarouselIndicators 
          items={items} 
          activeIndex={activeIndex} 
          onClickHandler={goToIndex} 
        />

        {slides}

        <CarouselControl 
          direction="prev" 
          directionText="Previous" 
          onClickHandler={previous} 
          />

        <CarouselControl 
          direction="next" 
          directionText="Next" 
          onClickHandler={next} 
        />

      </Carousel>
    </Col>
  );
}

export default HomeCarousel;