import { makeStyles } from "@mui/styles";
import {Field , ErrorMessage, FastField} from 'formik';
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
    border: "0.5px solid gray",
    borderRadius: "5px",
    padding: "10px 6px",
  },
  error : {
    color: "red",
    marginTop: "-6px",
    fontSize: "12px"
  }
});

const Input = (props) => {
  const { name, label, ...rest } = props;
  const classes = useStyle()
  return (
    <div className={classes.inputBox}>
      <label htmlFor={name} className={classes.label}>{label}</label>
      <FastField type="text" name={name} id={name} {...rest} className={classes.input}/>
      <ErrorMessage className={classes.error} name={name} component="div" />
    </div>
  );
};

export default Input;
