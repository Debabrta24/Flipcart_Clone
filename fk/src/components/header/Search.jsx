import { Box, InputBase, styled } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const SerachContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;
const InputSeracgBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const SearchIconRaper=styled(Box)`
    color: blue;
    padding: 5px;
`

const Search = () => {
  return (
    <>
      <SerachContainer>
        <InputSeracgBase placeholder="Search for products ,brands and more " />
        <SearchIconRaper>
          <SearchIcon />
        </SearchIconRaper>
      </SerachContainer>
    </>
  );
};

export default Search;
