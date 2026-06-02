import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";

// const Container=styled(Box)``

const Home = () => {
  return (
    <>
      {/* <div className="">home</div> */}
      <NavBar />
      <Box>
        <Banner />
      </Box>
    </>
  );
};

export default Home;

// 29.30