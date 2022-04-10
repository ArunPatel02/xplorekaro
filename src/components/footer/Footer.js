import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const useStyles = makeStyles({
  linkHead: {
    marginBottom: "40px",
    color: "black",
    marginTop: "20px",
    fontSize: "1.8rem",
  },
  subLinks: {
    padding: "6px 0",
    color: "#7c838b",
    cursor: "pointer",
    fontSize: "1.6rem",
    "&:hover": {
      color: "var(--yellow)",
    },
  },
  footer_selecter: {
    width: "100%",
    height: "46px",
    float: "left",
    position: "relative",
    border: "1px solid #dee0e2",
    marginBottom: "15px",
    borderRadius: "6px",
    // display : "flex" ,
    // justifyContent : "space-between",
    alignItems: "center",
    padding: "0px 0px 0px 6px",
    cursor: "pointer",
    overflow: "hidden",
  },
  footer_selecter_icon: {
    borderLeft: "1px solid #dee0e2",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
      fontSize: "1.7rem",
      color: "var(--yellow)",
    },
    "&:hover": {
      background: "var(--yellow)",
    },
    "&:hover svg": {
      color: "white",
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  // const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    // setAnchorEl(event.currentTarget);
    // setOpen((previousOpen) => !previousOpen);
  };

  return (
    <div style={{ background: "#ecf4f8", marginTop: "40px" }}>
      <div className="app_container">
        <Grid container padding={"12rem 0px"} spacing={2}>
          <Grid item md={3} sm={6} xs={12}>
            <Box>
              <Typography variant="h5" className={classes.linkHead}>
                ABOUT US
              </Typography>
              <Grid container>
                <Grid item xs={12} className={classes.subLinks}>
                  About us
                </Grid>
                <Grid item xs={12} className={classes.subLinks}>
                  Training & Safety
                </Grid>
                <Grid item xs={12} className={classes.subLinks}>
                  Our Guides
                </Grid>
                <Grid item xs={12} className={classes.subLinks}>
                  Office Team
                </Grid>
                <Grid item xs={12} className={classes.subLinks}>
                  Blog
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box>
              <Typography variant="h5" className={classes.linkHead}>
                USEFUL INFO
              </Typography>
              <Grid container>
                <Grid item xs={12} className={classes.subLinks}>
                  Pickup Locations
                </Grid>
                <Grid item xs={12} className={classes.subLinks}>
                  Terms of Payment
                </Grid>
                <Grid item xs={12} className={classes.subLinks}>
                  Privacy Policy
                </Grid>
                <Grid item xs={12} className={classes.subLinks}>
                  Difficulty Levels
                </Grid>
                <Grid item xs={12} className={classes.subLinks}>
                  Where to Find Us
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box>
              <Typography variant="h5" className={classes.linkHead}>
                CONTACT US
              </Typography>
              <div>
                GFXPARTNER INC.
                <br />
                30 Aarhus, Denmark
                <br />
                Phone: 123 456 7890
                <br />
                info@gfxpartner.com
              </div>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box>
              <Typography variant="h5" className={classes.linkHead}>
                LANGUAGE & CURRENCY
              </Typography>
              <Grid container>
                <Grid item xs={12}>
                  <Box sx={{ width: "100%" }}>
                    <Grid
                      container
                      className={classes.footer_selecter}
                      onClick={handleClick}
                    >
                      <Grid item xs={10}>
                        English
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        className={classes.footer_selecter_icon}
                      >
                        <KeyboardArrowDownIcon />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12} className={classes.subLinks}>
                  <Box sx={{ width: "100%" }}>
                    <Grid
                      container
                      className={classes.footer_selecter}
                      onClick={handleClick}
                    >
                      <Grid item xs={10}>
                        INR
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        className={classes.footer_selecter_icon}
                      >
                        <KeyboardArrowDownIcon />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <div className="icons" style={{ display: "flex", gap: "10px" }}>
                <FacebookSharpIcon
                  style={{
                    fontSize: "4rem",
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": { color: "blue" },
                  }}
                />
                <TwitterIcon
                  style={{
                    fontSize: "4rem",
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": { color: "blue" },
                  }}
                />
                <InstagramIcon
                  style={{
                    fontSize: "4rem",
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": { color: "orange" },
                  }}
                />
                <YouTubeIcon
                  style={{
                    fontSize: "4rem",
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": { color: "red" },
                  }}
                />
              </div>
            </Box>
          </Grid>
          <Grid item xs={12}>
            © GFXPARTNER
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
