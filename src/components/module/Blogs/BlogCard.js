import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card_image: {
    width: "100%",
    cursor: "pointer",
    transition: "all .3s",
  },
  subtitle: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  title: {
    cursor: "pointer",
    fontFamily: "lora",
    fontSize: "2.3rem",
    lineHeight: "4rem",
    marginTop: "10px",
    "&:hover": {
      color: "var(--yellow)",
    },
  },
  read_more: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 0",
    marginTop: "20px",
    width: "100%",
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#7c838b",
    backgroundColor: "white",
    transition: "all .4s ease",
    cursor: "pointer",
    "& svg": {
      height: "30px",
      width: "30px",
      border: "1px solid var(--yellow)",
      borderRadius: "50%",
      marginRight: "10px",
      padding: "5px",
      color: "var(--yellow)",
      background: "white",
      transition: "all .4s ease",
    },
    "&:hover": {
      color: "var(--yellow)",
    },
    "&:hover svg": {
      color: "white",
      background: "var(--yellow)",
    },
  },
  blog_card: {
    background: "white",
    transition: "all .25s ease",
    textAlign: "center",
    "&:hover": {
      boxShadow: "5px 20px 50px 5px rgb(153 153 153 / 20%);",
      transform: "scale(1.05)",
    },
  },
});

const TourCard = ({ subtitle, title, image, givenlink }) => {
  const classes = useStyles();
  return (
    <Grid container direction={"column"} className={classes.blog_card}>
      <Grid item sx={{ width: "100%" }}>
        <Box sx={{ overflow: "hidden" }}>
          <img src={image} alt="tour 1" className={classes.card_image} />
        </Box>
      </Grid>
      <Grid item>
        <Box padding={"40px"}>
          <Typography
            variant="subtitle1"
            fontSize={"1.2rem"}
            className={classes.subtitle}
          >
            03-02-2021
            <Divider orientation="vertical" style={{ height: "auto" }} />
            {subtitle}
          </Typography>
          <Typography variant="h3" className={classes.title}>
            {title}
          </Typography>
          <Grid item>
            <Box className={classes.read_more}>
              <ArrowForwardIcon />
              <Link
                to={givenlink}
                style={{
                  textDecoration: "none",
                  color: "black",
                  "&:hover": {
                    color: "var(--yellow)",
                  },
                }}
              >
                Read More
              </Link>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TourCard;
