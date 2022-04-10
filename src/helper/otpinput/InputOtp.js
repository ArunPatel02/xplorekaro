import React, { useContext, useState } from "react";
import OtpInput from "react-otp-input";
// import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import Button from "../buttons/Button";
import { makeStyles } from "@mui/styles";
// import CloseIcon from "@mui/icons-material/Close";
import { CustomMakeContext } from "../../context/CustomContext";
import ServerApi from "../../Api/ApiService";
import {useFormikContext} from "formik"

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   padding: "20px 60px",
//   borderRadius: "10px",
//   outline: 0,
// };

const inputStyle = {
  width: "3.5rem",
  height: "4.5rem",
  outline: "none",
  border: "1px solid #707070",
  fontSize: "2rem",
  borderRadius: "10px",
  color: "#707070",
};

const useStyle = makeStyles({
  headDiv: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "12px",
    alignItems: "center",
  },
  resendDiv: {
    display: "flex",
    gap: "10px",
    margin: "12px 0px",
    justifyContent: "space-between",
  },
  closeBtn: {
    position: "absolute",
    top: "20px",
    right: "20px",
    cursor: "pointer",
  },
});

const InputOtp = (props) => {
  const { setloginActiveStep, setcustomAlert } = useContext(CustomMakeContext);

  const {setFieldValue , touched , errors} = useFormikContext()

  const classes = useStyle();
  const { open, handleClose, ...rest } = props;
  const [otp, setotp] = useState("");
  const handleChange = (otp) => {
    console.log(otp);
    setotp(otp);
    setFieldValue("otp" , otp)
  };

  const handleResendOtp = () => {
    ServerApi.resendOtp()
      .then((res) => {
        console.log(res.data);
        setcustomAlert({
          open: true,
          msg: res.data.error,
          severity: "success",
        });
      })
      .catch((error) => {
        setcustomAlert({
          open: true,
          msg: error.response?.data?.error || "server error",
          severity: "error",
        });
      });
  };

  return (
    <>
      <Box>
        <div className={classes.headDiv}>
          <h1 style={{ fontSize: "1.9rem" }}>OTP Verification</h1>
          <p style={{ fontSize: "1.5rem" }}>Phone Verify</p>
        </div>
        <div>
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            separator={<span style={{ margin: "0px 4px" }}></span>}
            inputStyle={inputStyle}
          />
        </div>
        {touched?.otp && errors?.otp && <div style={{color : "red" , fontSize : "15px" , textAlign : "center" , margin : "8px 0px"}}>{errors.otp}</div>}
        <div className={classes.resendDiv}>
          <span
            style={{ fontSize: "1.2rem", color: "#607395", cursor: "pointer" }}
            onClick={() => handleResendOtp()}
          >
            Resend OTP
          </span>
          <span
            style={{
              textDecoration: "underline",
              fontSize: "1.2rem",
              color: "#001D61",
              cursor: "pointer",
            }}
            onClick={() => setloginActiveStep(1)}
          >
            Change Email
          </span>
        </div>
        <Button btn_text="Verify OTP" 
        type="submit"
        // onClick={() => handleOtpVerification()}
         />
      </Box>
    </>
  );
};

export default InputOtp;
