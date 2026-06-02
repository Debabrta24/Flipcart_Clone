import * as React from "react";
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import Search from "./Search";
import CoustomButton from "./CoustomButton";

const Styledheader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const Component = styled(Box)`
  margin-left: 12%;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PlusImage = styled('img')`
  width: 10px;
  height: 10px;
  margin-left:3px ;
`;

const CostomButton=styled(Box)`
  margin-left: 10px;
`
function Header() {
  const logoURl = `https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png`;
  const subUrl = `https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png`;
  return (
    <Styledheader>
      <Toolbar style={{minHeight:55}} >
        <Component>
          <img src={logoURl} alt="logo" style={{ width: 75 }} />
          <Box style={{display:'flex'}} >
            <SubHeading>
              Eplore{" "}
              <Box component="span" style={{ color: "yellow" }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImage src={subUrl} alt="sub-logo" />
          </Box>
        </Component>
        <Search/>
        <CostomButton>
          <CoustomButton/>
        </CostomButton>
      </Toolbar>
    </Styledheader>
  );
}

export default Header;
