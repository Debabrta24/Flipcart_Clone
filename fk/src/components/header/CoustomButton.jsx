import React from "react";
import {
  Box,
  Button,
  Typography,
  styled,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 32px;
`;

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  text-transform: none;
  font-size: 15px;
  font-weight: 600;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  min-width: 120px;

  &:hover {
    background: #f5f5f5;
    box-shadow: none;
  }
`;

const MenuItem = styled(Typography)`
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.9;
  }
`;

const CartWrapper = styled(Box)`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 6px;
`;

const CartText = styled(Typography)`
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
`;

const CustomButton = () => {
  return (
    <Wrapper>
      <LoginButton variant="contained">
        Login
      </LoginButton>

      <MenuItem>
        Become a Seller
      </MenuItem>

      <MenuItem>
        More
      </MenuItem>

      <CartWrapper>
        <ShoppingCartIcon
          sx={{
            color: "#ffffff",
            fontSize: 22,
          }}
        />
        <CartText>Cart</CartText>
      </CartWrapper>
    </Wrapper>
  );
};

export default CustomButton;