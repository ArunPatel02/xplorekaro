import { Box, Divider, Typography } from "@mui/material";
import React, { useContext } from "react";
import Button from "../../helper/buttons/Button";
import Input from "../../helper/input/Input";
import { makeStyles } from "@mui/styles";
import GoogleIcon from "@mui/icons-material/Google";
import { CustomMakeContext } from "../../context/CustomContext";

const useStyles = makeStyles({
  SignUpHeading: {
    textAlign: "center",
    fontSize: "2.6rem",
    color: "var(--yellow)",
  },
  SignsubUpHeading: {
    textAlign: "center",
    fontSize: "1.5rem",
  },
  GoogleIcon: {
    width: "30px",
    height: "30px",
    margin: "10px auto",
    borderRadius: "50%",
    border: "1px solid gray",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
      fontSize: "2.2rem",
    },
  },
  alredy: {
    fontSize: "1.5rem",
    fontWeight: "600",
    textAlign: "center",
  },
  login: {
    color: "var(--yellow)",
    cursor: "pointer",
  },
});

const Login = () => {
  const classes = useStyles();
  const { setloginActiveStep, logintoggle } = useContext(CustomMakeContext);

  return (
    <>
        <Typography variant="h3" className={classes.SignUpHeading}>
          Login
        </Typography>
        <Typography variant="h6" className={classes.SignsubUpHeading}>
          login with
        </Typography>
        <Box className={classes.GoogleIcon}>
          <GoogleIcon />
        </Box>
        <Typography variant="h6" className={classes.SignsubUpHeading}>
          or use your email for login
        </Typography>
        <Input placeholder="Enter your email" name="email" type="email" />
        <Input placeholder="Enter Password" name="password" type="password" />
        <Button btn_text="Login" />
        <Divider sx={{ margin: "10px 0px" }}>OR</Divider>
        <div className={classes.alredy}>
          Don't Have Account{" "}
          <span className={classes.login} onClick={() => setloginActiveStep(1)}>
            Register Now
          </span>
        </div>
    </>
  );
};

export default Login;
