import React from "react";

interface Props {
  index: number;
}
const GalleryItem: React.FC<Props> = ({ index }) => {
  return (
    <figure className={`gallery__item gallery__item--${index}`}>
      <img
        src={require(`../assets/img/gal-${index}.jpeg`)}
        alt={`Gallery Item ${index}`}
        className="gallery__img"
      />
    </figure>
  );
};

export default GalleryItem;
