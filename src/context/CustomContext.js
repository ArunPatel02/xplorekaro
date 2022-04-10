import React, { createContext, useState } from "react";

export const CustomMakeContext = createContext();

const CustomContext = (props) => {
  const [customAlert, setcustomAlert] = useState({
    open: false,
    msg: "",
    severity: "success",
  });

  const [loginActiveStep, setloginActiveStep] = useState(0);
  const [logintoggle, setlogintoggle] = useState(false);

  return (
    <CustomMakeContext.Provider
      value={{
        customAlert,
        setcustomAlert,
        loginActiveStep,
        setloginActiveStep,
        logintoggle,
        setlogintoggle
      }}
    >
      {props.children}
    </CustomMakeContext.Provider>
  );
};

export default CustomContext;
