import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle = makeStyles({
  inputBox: {
      display : "flex",
      flexDirection : "column",
      gap : "10px"
  },
  label: {
    fontSize: "1rem",
  },
  input: {
    outline: "none",
    border: "none",
    padding: "10px 6px",
    width : "65%"
  },
  inputCompo : {
    border: "0.5px solid var(--boder-color)",
    borderRadius: "5px",
    display : "flex",
    width : "100%",
    alignItems: "center",
  }
});

const InputWithSelect = (props) => {
  const { name, label, component ,...rest } = props;
  const classes = useStyle()
  return (
    <div className={classes.inputBox}>
      <label htmlFor={name} className={classes.label}>{label}</label>
      <div className={classes.inputCompo}>
        {component}
      <input type="text" name={name} id={name}  className={classes.input }{...rest}/>
      </div>
    </div>
  );
};

export default InputWithSelect;
