import { styled } from "@mui/material";
import React from "react";
import CarouselModule from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Carousel = CarouselModule.default;

const Image = styled("img")`
  width: 100%;
  height: 180px;
`;

const bannerData = [
  {
    id: 1,
    url: "https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50",
  },
  {
    id: 2,
    url: "https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50",
  },
  {
    id: 3,
    url: "https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50",
  },
  {
    id: 4,
    url: "https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50",
  },
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Banner = () => {
  return (
    <>
      <Carousel
        responsive={responsive}
        swipeable={false} // not swipe
        draggable={false} // not for draggable
        dotListClass="custom-dot-list-style" // dot based on ohtot number
        infinite={true} // never stop showing slider
        containerClass="carousel-container"
        autoPlay={true}
        keyBoardControl={true}
        
        autoPlaySpeed={1000}
        itemClass="carousel-item-padding-40-px"
      >
        {bannerData.map((data) => (
          <Image src={data.url} alt="banner" />
        ))}
      </Carousel>
    </>
  );
};

export default Banner;
