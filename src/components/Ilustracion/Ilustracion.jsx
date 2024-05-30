import React from 'react';

const Ilustracion = ({ src, width = 300, height = 300, speed = 1 }) => {
  return (
    <dotlottie-player
      src={src}
      background="transparent"
      speed={speed}
      style={{ width: `${width}px`, height: `${height}px` }}
      loop
      autoplay
    ></dotlottie-player>
  );
};

export default Ilustracion;