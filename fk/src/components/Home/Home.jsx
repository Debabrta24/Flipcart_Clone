import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  padding: 20px 10px;
background: #F2F2F2;
`;

const Home = () => {
  return (
    <>
      {/* <div className="">home</div> */}
      <NavBar />
      <Container>
        <Banner />
      </Container>
    </>
  );
};

export default Home;

// 29.30
