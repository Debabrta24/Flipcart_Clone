import React from "react";
import { Box, Button, Dialog, TextField, Typography,styled } from "@mui/material";

const Component=styled(Box)`
    height: 70vh;
    width: 90vh;
`
const Image=styled(Box)`
    background: #2874F0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center no-repeat ;
    height: 100%;
    width:40% ;
    padding: 45px;
`
const LoginDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <Component>
            <Box></Box>
           
          <Box style={{display:'flex',height:'100%'}}>
             <Image>
                <Typography variant="h5">login</Typography>
                <Typography style={{marginTop:20}} >Get access to your orders , wishlist and recomendations</Typography>
             </Image>
            <TextField
              variant="standard"
              label="Enter Email/Phone number"
            ></TextField>
            <TextField variant="standard" label="Enter Password"></TextField>
            <TextField>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</TextField>
            <Button>Login</Button>
            <Typography>OR</Typography>
            <Button>Request otp</Button>
            <Typography>New To flipcart ? create an account</Typography>
          </Box>
        </Component>
      </Dialog>
    </>
  );
};

export default LoginDialog;
