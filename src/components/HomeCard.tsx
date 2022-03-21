import React from "react";
import CustomButton from "../custom-elements/CustomButton";

interface Props {
  imageSource: string;
  name: string;
  location: string;
  rooms: number;
  area: number;
  price: number;
}

const HomeCard: React.FC<Props> = ({
  name,
  imageSource,
  location,
  area,
  price,
  rooms,
}) => {
  return (
    <div className="home">
      <img className="home__img" src={require(`../assets/img/${imageSource}`)} alt={name} />
      <svg className="home__like">
        <use xlinkTitle="heart"></use>
      </svg>
      <h5 className="home__name">{name}</h5>
      <div className="home__location">
        <svg>
          <use xlinkTitle="map-pin"></use>
        </svg>
        <p>{location}</p>
      </div>
      <div className="home__rooms">
        <svg>
          <use xlinkTitle="profile-male"></use>
        </svg>
        <p>{rooms}</p>
      </div>
      <div className="home__area">
        <svg>
          <use xlinkTitle="expand"></use>
        </svg>
        <p>{area}</p>
      </div>
      <div className="home__price">
        <svg>
          <use xlinkTitle="key"></use>
        </svg>
        <p>{price}</p>
      </div>
      <CustomButton className="home__btn" content="Contact Realtor" />
    </div>
  );
};

export default HomeCard;
