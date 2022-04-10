import { Box, Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import title_seperator from "../../../asserts/logo/title-seperator.png";

const useStyle = makeStyles({
  right_desc: {
    fontSize: "2rem",
    marginTop: "40px",
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

const Banner = () => {
  const classes = useStyle();

  return (
    <div id="banner_container">
      <div className="app_container">
        <Box sx={{ padding: "15rem 0px 40rem 0px" }}>
          <Grid container marginBottom={"3rem"} textAlign={"center"}>
            <Grid item sm={12} sx={{ padding: "0px 10%" }}>
              <Box>
                <Typography
                  variant="h2"
                  fontSize={"5.5rem"}
                  fontFamily={"lora"}
                >
                  The Most Awarded Adventure Tour Company in Europe
                </Typography>
                <img
                  src={title_seperator}
                  alt="___"
                  style={{ marginTop: "20px" }}
                />
              </Box>
            </Grid>
            <Grid item sm={12} sx={{ padding: "0px 15%" }}>
              <div className={classes.right_desc}>
                Orci varius natoque penatibus et magnis dis turient montes
                nascetur ridiculus mus. Cras eleifend tellus sed congue
                consectetur, velit turpis faucibus odio eget volutpat odio
                lectus eu erat.
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={4} justifyContent={"center"}>
            <Grid
              item
              sm={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button disableElevation className={classes.load_btn}>
                LEARN MORE
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Banner;
