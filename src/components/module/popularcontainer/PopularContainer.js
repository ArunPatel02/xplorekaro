import { Box, Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import title_seperator from "../../../asserts/logo/title-seperator.png";
import TourCard from "./TourCard";
import TourCardData from "./TourCardData";

const useStyle = makeStyles({
  right_desc: {
    fontSize: "2rem",
    paddingLeft: window.innerWidth < 900 ? "0px" : "10%",
    marginTop: window.innerWidth < 900 ? "40px" : "0",
    color: "393c3f",
    fontWeight: "300",
    lineHeight: "3.4rem",
  },
  load_btn: {
    padding: "16px 10rem",
    width: "fit-content",
    borderRadius: "10px",
    fontSize: "1.6rem",
    fontWeight: "600",
    marginTop: "40px",
    color: "white",
    backgroundColor: "var(--yellow)",
    transition: "all .3s",
    "&:hover": {
      color: "var(--yellow)",
      backgroundColor: "white",
      boxShadow: "4px 4px 10px #eee",
    },
  },
});

const PopularContainer = () => {
  const classes = useStyle();
  return (
    <div style={{ background: "aliceblue" }}>
      <div className="app_container">
        <Box sx={{ padding: "15rem 0px" }}>
          <Grid
            container
            marginBottom={window.innerWidth < 900 ? "40px" : "8rem"}
          >
            <Grid item md={6} sm={12} sx={{ padding: "0px 15px" }}>
              <Box>
                <Typography variant="h2" fontSize={"6rem"} fontFamily={"lora"}>
                  Most Popular Tours
                </Typography>
                <img
                  src={title_seperator}
                  alt="___"
                  style={{ marginTop: "10px" }}
                />
              </Box>
            </Grid>
            <Grid item md={6} sm={12} sx={{ padding: "0px 15px" }}>
              <div className={classes.right_desc}>
                Orci varius natoque penatibus et magnis dis turient montes
                nascetur ridiculus mus. Cras eleifend tellus sed congue
                consectetur, velit turpis faucibus odio eget volutpat odio
                lectus eu erat.
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={4} justifyContent={"center"}>
            {TourCardData &&
              TourCardData.map((tour, index) => {
                return (
                  <Grid
                    item
                    md={4}
                    sm={12}
                    key={index}
                    sx={{ width: "-webkit-fill-available" }}
                  >
                    <TourCard
                      subtitle={tour.subtitle}
                      title={tour.title}
                      image={tour.image}
                    />
                  </Grid>
                );
              })}

            <Grid
              item
              sm={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button disableElevation className={classes.load_btn}>
                LOAD MORE
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default PopularContainer;
