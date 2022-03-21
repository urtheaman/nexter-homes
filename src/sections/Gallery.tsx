import React from "react";
import GalleryItem from "../components/GalleryItem";

const Gallery: React.FC = () => {
  const array = new Array(14)
  array.fill(1)
  return (
    <section className="gallery">
      {array.map((_, index) => {
        return <GalleryItem index={index+1} />;
      })}
    </section>
  );
};

export default Gallery;
