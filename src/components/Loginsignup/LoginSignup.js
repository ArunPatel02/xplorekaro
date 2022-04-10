import React, { useContext, useEffect, useState } from "react";
import { Avatar, Box } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import Signup from "./Signup";
import { CustomMakeContext } from "../../context/CustomContext";
import InputOtp from "../../helper/otpinput/InputOtp";
import Login from "./Login";
import { Form, Formik } from "formik";
import initialValues from "../../formControllers/formInitialValue";
import formValidationSchema from "../../formControllers/formSchema";
import ServerApi from "../../Api/ApiService";

const useStyles = makeStyles({
  loginToggle: {
    position: "fixed",
    zIndex: 1000,
    bottom: "20px",
    right: "20px",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    background: "linear-gradient(315deg,#999faa 0,#344055 100%)",
    cursor: "pointer",
    "& svg": {
      fontSize: "28px",
      color: "white",
    },
  },
  signUpcontainer: {
    position: "fixed",
    zIndex: 100,
    background: "white",
    bottom: "30px",
    right: "30px",
    borderRadius: "8px",
    overflow: "hidden",
    width: "0px",
    height: "0px",
    transition: "all .6s",
    opacity: 0,
    "&.active": {
      width: "320px",
      height: "fit-content",
      bottom: "80px",
      right: "50px",
      opacity: 1,
      boxShadow: "0px 0px 10px #80808078",
    },
  },
  signUpWrapper: {
    minWidth: "320px",
    height: "fit-content",
    padding: "30px 40px",
    opacity: 0,
    transition: "all .2s",
    transitionDelay: ".6s",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "&.active": {
      opacity: 1,
    },
  },
});

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const LoginSignup = () => {
  const classes = useStyles();
  const {
    loginActiveStep,
    setloginActiveStep,
    setlogintoggle,
    logintoggle,
    setcustomAlert,
  } = useContext(CustomMakeContext);

  const [IsLogin, setIsLogin] = useState(false);
  const [userName, setuserName] = useState("");
  const [userImage, setuserImage] = useState(null);

  const handleActiveState = (step) => {
    switch (step) {
      case 0:
        return <Login />;
      case 1:
        return <Signup />;
      case 2:
        return <InputOtp />;
      default:
        break;
    }
  };

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:8000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          console.log(resObject.user);
          setuserName(resObject.user.displayName);
          setuserImage(resObject.user.photos[0].value);
          setIsLogin(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setlogintoggle(true);
    }, 3000);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    ServerApi.validUser().then((res) => {
      // console.log(res.data.data , "token is valid");
      if (!res.data.data.verified) {
        setloginActiveStep(2);
        setlogintoggle(true);
      } else {
        setIsLogin(true);
        setuserName(res.data.data.name);
        setlogintoggle(false);
      }
    });
  }, []);

  const handleLogin = (values) => {
    try {
      ServerApi.login(values)
        .then((res) => {
          console.log(res.data);
          if (!res.data.data.verified) {
            setloginActiveStep(2);
            setcustomAlert({
              open: true,
              msg: "Type Otp To verify your account",
              severity: "success",
            });
          } else {
            setIsLogin(true);
            setuserName(res.data.data.name);
            setlogintoggle(false);
            setcustomAlert({
              open: true,
              msg: "Login Successfully",
              severity: "success",
            });
          }
          localStorage.setItem("token", res.data.token);
        })
        .catch((error) => {
          console.log(error.response);
          setcustomAlert({
            open: true,
            msg: error.response?.data?.error || "server error",
            severity: "error",
          });
        });
    } catch (error) {
      console.log(error);
      setcustomAlert({
        open: true,
        msg: "server error",
        severity: "error",
      });
    }
  };

  const handleSignup = (values) => {
    try {
      ServerApi.signup(values)
        .then((res) => {
          console.log(res.data);
          setloginActiveStep(2);
          localStorage.setItem("token", res.data.token);
          setcustomAlert({
            open: true,
            msg: "otp is sent to your email",
            severity: "success",
          });
        })
        .catch((error) => {
          console.log(error.response);
          setcustomAlert({
            open: true,
            msg: error.response?.data?.error || "server error",
            severity: "error",
          });
        });
    } catch (error) {
      console.log(error);
      setcustomAlert({
        open: true,
        msg: "server error",
        severity: "error",
      });
    }
  };

  const handleOtpVerification = (values) => {
    ServerApi.verifyOtp(values)
      .then((res) => {
        console.log(res.data);
        setcustomAlert({
          open: true,
          msg: res.data.error,
          severity: "success",
        });
        setIsLogin(true);
        setuserName(res.data.data.name);
        setlogintoggle(false);
      })
      .catch((error) => {
        setcustomAlert({
          open: true,
          msg: error.response?.data?.error || "server error",
          severity: "error",
        });
      });
  };

  const handleSubmit = (values) => {
    switch (loginActiveStep) {
      case 0:
        return handleLogin(values);
      case 1:
        return handleSignup(values);
      case 2:
        return handleOtpVerification(values);
      default:
        break;
    }
  };

  return (
    <>
      {IsLogin && userName ? (
        <div className={classes.loginToggle}>
          {userImage ? (
            <Avatar style={{ height: "100%", width: "100%" }} src={userImage} />
          ) : (
            <Avatar style={{ height: "100%", width: "100%" }} />
          )}
        </div>
      ) : (
        <>
          <div
            className={classes.loginToggle}
            onClick={() => setlogintoggle((pre) => !pre)}
          >
            {!logintoggle ? <ExitToAppIcon /> : <CloseIcon />}
          </div>
          <div
            className={
              logintoggle
                ? `${classes.signUpcontainer} active`
                : classes.signUpcontainer
            }
          >
            <Formik
              initialValues={initialValues[loginActiveStep]}
              validationSchema={formValidationSchema[loginActiveStep]}
              enableReinitialize
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              {(props) => {
                console.log(props);
                return (
                  <Form
                    className={
                      logintoggle
                        ? `${classes.signUpWrapper} active`
                        : classes.signUpWrapper
                    }
                  >
                    {handleActiveState(loginActiveStep)};
                  </Form>
                );
              }}
            </Formik>
          </div>
        </>
      )}
    </>
  );
};

export default LoginSignup;
