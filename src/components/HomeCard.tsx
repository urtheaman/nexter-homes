import React from "react";
import CustomButton from "../custom-elements/CustomButton";
import {
  IconExpand,
  IconHeart,
  IconHeartFull,
  IconKey,
  IconMapPin,
  IconProfileMale,
} from "../Vectors";

interface Props {
  imageSource: string;
  name: string;
  location: string;
  rooms: number;
  area: number;
  price: number;
  liked?: boolean;
}

const HomeCard: React.FC<Props> = ({
  name,
  imageSource,
  location,
  area,
  price,
  rooms,
  liked = false,
}) => {
  return (
    <div className="home">
      <img
        className="home__img"
        src={require(`../assets/img/${imageSource}`)}
        alt={name}
      />
      <svg viewBox={liked ? "0 0 30 30" : "0 0 40 40"} className="home__like">
        {liked ? <IconHeartFull /> : <IconHeart />}
      </svg>
      <h5 className="home__name">{name}</h5>
      <div className="home__location">
        <svg viewBox="0 0 32 32">
          <IconMapPin />
        </svg>
        <p>{location}</p>
      </div>
      <div className="home__rooms">
        <svg viewBox="0 0 32 32">
          <IconProfileMale />
        </svg>
        <p>{rooms}</p>
      </div>
      <div className="home__area">
        <svg viewBox="0 0 32 32">
          <IconExpand />
        </svg>
        <p>{area}</p>
      </div>
      <div className="home__price">
        <svg viewBox="0 0 32 32">
          <IconKey />
        </svg>
        <p>{price}</p>
      </div>
      <CustomButton className="home__btn" content="Contact Realtor" />
    </div>
  );
};

export default HomeCard;
