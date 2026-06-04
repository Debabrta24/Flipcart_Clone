import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";

const Component = styled(Box)`
  height: 528px;
  width: 800px;
  display: flex;
  overflow: hidden;
`;

const Image = styled(Box)`
  background: #2874f0
    url("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png")
    center 85% no-repeat;

  width: 40%;
  min-width: 40%;
  color: #fff;
  padding: 45px 35px;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 56px 35px 16px;
  flex: 1;
  overflow-x: hidden;

  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  font-weight: 600;

  &:hover {
    background: #fb641b;
  }
`;

const RequestOtp = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  font-weight: 600;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%);

  &:hover {
    background: #fff;
  }
`;

const TermsText = styled(Typography)`
  font-size: 12px;
  color: #878787;
  line-height: 1.5;
`;

const OrText = styled(Typography)`
  text-align: center;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  margin-top: auto;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const accountIntitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subheading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subheading: "Sign up with your mobile number to get started",
  },
};

const signInitialValues={
    firstname:'',
    lastName:'',
    username:'',
    email:'',
    password:'',
    phone:''
}
const LoginDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  
  
  const [account, toggleAccount] = useState(accountIntitialValues.login);
  const [signup,setSignup]=useState()
  const onInputChange=(e)=>{
    console.log(e.target.value)

  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: "800px",
          maxWidth: "800px",
          overflow: "hidden",
          borderRadius: "8px",
        },
      }}
    >
      <Component>
        <Image>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {account.heading}
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#DBDBDB",
              fontSize: 18,
            }}
          >
            {account.subheading}
          </Typography>
        </Image>

        {account.view == "login" ? (
          <Wrapper>
            <TextField variant="standard" label="Enter Email / Mobile Number" />

            <TextField
              variant="standard"
              type="password"
              label="Enter Password"
            />
            <TermsText>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </TermsText>
            <LoginButton variant="contained">Login</LoginButton>
            <OrText>OR</OrText>
            <RequestOtp>Request OTP</RequestOtp>
            <CreateAccount
              onClick={() => {
                toggleAccount(accountIntitialValues.signup);
              }}
            >
              New to Flipkart? Create an account
            </CreateAccount>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField variant="standard"  onChange={(e)=>{onInputChange(e)}}   label="Enter first name" />
            <TextField variant="standard"  onChange={(e)=>{onInputChange(e)}}   label="Enter lastname" />
            <TextField variant="standard"  onChange={(e)=>{onInputChange(e)}}   label="Enter email" />
            <TextField variant="standard"  onChange={(e)=>{onInputChange(e)}}   label="Enter Password" />
            <TextField variant="standard"  onChange={(e)=>{onInputChange(e)}}   label="Enter phone" />
            <LoginButton variant="contained">Continue</LoginButton>
            <RequestOtp>Request OTP</RequestOtp>
          </Wrapper>
        )}
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
