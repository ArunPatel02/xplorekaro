import { makeStyles } from "@mui/styles";
import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const useStyle = makeStyles({
  inputBox: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  label: {
    fontSize: "1rem",
  },
  input: {
    outline: "none",
    border: "0.5px solid var(--boder-color)",
    borderRadius: "5px",
    padding: "6px",
    fontSize: "1rem",
    resize : "none"
  },
});

const Textarea = (props) => {
  const { name, label, ...rest } = props;
  const classes = useStyle();
  return (
    <div className={classes.inputBox}>
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={3}
        name={name}
        id={name}
        {...rest}
        className={classes.input}
      />
    </div>
  );
};
export default Textarea;
