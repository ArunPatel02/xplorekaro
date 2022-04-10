import { Box, Divider, Grid, Typography, Button } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
// import tour1 from "../../../asserts/tour/tour-thumb01.jpg";
import icon_date from "../../../asserts/icon/icon-date.png";
import icon_time from "../../../asserts/icon/icon-time.png";
import icon_tag from "../../../asserts/icon/icon-tag.png";

const useStyles = makeStyles({
  box_flex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text_up: {
    fontSize: "1.1rem",
    textAlign: "center",
    marginTop: "10px",
    textTransform: "uppercase",
  },
  text_down: {
    fontSize: "1.3rem",
    textAlign: "center",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  card_image: {
    width: "100%",
    cursor: "pointer",
    transition: "all .3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  select_dates: {
    padding: "10px 0",
    width: "100%",
    border: "1px solid #dee0e2",
    borderRadius: "8px",
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#7c838b",
    backgroundColor: "white",
    transition: "all .4s ease",
    "&:hover": {
      color: "white",
      backgroundColor: "var(--yellow)",
      boxShadow: "4px 4px 10px #eee",
    },
  },
  tour_Card : {
    background : "white",
    transition : "all .25s ease",
    "&:hover" : {
        boxShadow : "5px 20px 50px 5px rgb(153 153 153 / 20%);"
    }
}
});

const TourCard = ({subtitle , title , image}) => {
  const classes = useStyles();
  return (
    <Grid container direction={"column"} className={classes.tour_Card}>
      <Grid item sx={{width :"100%"}}>
        <Box sx={{ overflow: "hidden" }}>
          <img src={image} alt="tour 1" className={classes.card_image} />
        </Box>
      </Grid>
      <Grid item>
        <Box padding={"40px"}>
          <Typography variant="subtitle1" fontSize={"1.2rem"}>
            {subtitle}
          </Typography>
          <Typography variant="h3" marginTop={"10px"} fontFamily={"lora"}>
            {title}
          </Typography>
          <Grid container sx={{ padding: "27px 0px" }}>
            <Grid item xs>
              <Box className={classes.box_flex}>
                <img src={icon_date} alt="date" style={{ height: "40px" }} />
                <Typography variant="body1" className={classes.text_up}>
                  available
                </Typography>
                <Typography variant="h6" className={classes.text_down}>
                  ALL YEAR
                </Typography>
              </Box>
            </Grid>
            <Divider
              style={{ height: "auto" }}
              orientation="vertical"
              flexItem
            />
            <Grid item xs>
              <Box className={classes.box_flex}>
                <img src={icon_time} alt="date" style={{ height: "40px" }} />
                <Typography variant="body1" className={classes.text_up}>
                  duration
                </Typography>
                <Typography variant="h6" className={classes.text_down}>
                  3-10 days
                </Typography>
              </Box>
            </Grid>
            <Divider
              style={{ height: "auto" }}
              orientation="vertical"
              flexItem
            />
            <Grid item xs>
              <Box className={classes.box_flex}>
                <img src={icon_tag} alt="date" style={{ height: "40px" }} />
                <Typography variant="body1" className={classes.text_up}>
                  from
                </Typography>
                <Typography variant="h6" className={classes.text_down}>
                  $166.750
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item>
            <Button disableElevation className={classes.select_dates}>
              SELECT DATES
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TourCard;
