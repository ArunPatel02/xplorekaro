import React, { useContext } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { CustomMakeContext } from "../../context/CustomContext";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertHelper = () => {
    const {customAlert , setcustomAlert} = useContext(CustomMakeContext)

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setcustomAlert({
        open : false,
        msg : "",
        severity : ""
      })
    };
  

  return (
        <Snackbar
          open={customAlert.open}
          autoHideDuration={3000}
          anchorOrigin={{vertical : "bottom" , horizontal : "center"}}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={customAlert.severity}
            sx={{ width: "100%" , fontSize : "16px" , "& button svg" : {fontSize : "2rem"} }}
          >
            {customAlert.msg}
          </Alert>
        </Snackbar>
  );
};

export default AlertHelper;
