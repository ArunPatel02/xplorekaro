import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  btn: {
    width: "fit-content",
    fontSize: "1.2rem",
    color: "var(--white)",
    backgroundColor: "var(--yellow)",
    cursor: "pointer",
    padding: "8px 35px",
    borderRadius: "5px",
    textTransform: "capitalize",
    margin : "0px auto",
    marginTop : "15px",
    border : "none",
    "&:hover": {
      color: "var(--yellow)",
      backgroundColor: "white",
      boxShadow: "4px 4px 10px #eee",
    },
  },
});

const Button = ({ btn_text, btn_link, ...rest }) => {
  const classes = useStyle();

  return (
    <>
      {btn_link ? (
        <Link to={btn_link}>
          <button className={classes.btn} {...rest}>
            {btn_text}
          </button>
        </Link>
      ) : (
        <button className={classes.btn} {...rest}>
          {btn_text}
        </button>
      )}
    </>
  );
};

export default Button;
