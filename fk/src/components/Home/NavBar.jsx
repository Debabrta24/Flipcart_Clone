import React from "react";
// import { navData } from "../../constants/Data.js";
import { Box, styled, Typography } from "@mui/material";

const Component = styled(Box)`
  display: flex;
  margin: 55px 130px 0 130px;
  justify-content: space-between;
`;

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;

const navData = [
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
    text: "Top Offers",
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
    text: "Top Offers",
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q-100",
    text: "Grocery",
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
    text: "Mobile",
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",
    text: "Fashion",
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q-100",
    text: "Electronics",
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100",
    text: "Home",
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q-100",
    text: "Travel",
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
    text: "Beauty, Toys & More",
  },
];

const Text = styled(Typography)`
  font-size: 14px;
  font-weight:600;
  font-family:inherit ;
`;
const NavBar = () => {
  return (
    <Component>
      {navData.map((data) => {
        return (
          <Container>
            <img src={data.url} alt="new " />
            <Text>{data.text}</Text>
          </Container>
        );
      })}
    </Component>
  );
};

export default NavBar;

// 9.45
