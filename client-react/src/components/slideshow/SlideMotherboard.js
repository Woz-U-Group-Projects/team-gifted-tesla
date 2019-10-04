import React from 'react';
import { Slide } from 'react-slideshow-image';

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div>
            <span>Slide 1</span>
          </div>
        </div>
        <div>
          <div>
            <span>Slide 2</span>
          </div>
        </div>
        <div>
          <div>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default Slideshow;