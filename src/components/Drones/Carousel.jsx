import React from "react";

function Carousel({ images }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {images.map((img, index) => (
          <div
            key={img.id}
            className="shadow-lg rounded-lg overflow-hidden hover:transform hover:transition-transform duration-300 hover:scale-110"
            data-aos="fade-up" 
            data-aos-delay={index * 100} 
          >
            <img
              src={img.image}
              alt={`Drone ${img.id}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Carousel;
