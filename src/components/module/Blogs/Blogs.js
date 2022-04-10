import { Box, Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import title_seperator from "../../../asserts/logo/title-seperator.png";
import BlogCard from "./BlogCard";

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
    // marginTop: "40px",
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

const Blogs = () => {
  const classes = useStyle();

  return (
    <div style={{ background: "#ecf4f8" }}>
      <div className="app_container">
        <Box sx={{ padding: "15rem 0px" }}>
          <Grid container marginBottom={"4rem"}>
            <Grid item sm={12} sx={{ padding: "0px 15px" }}>
              <Box>
                <Typography variant="h2" fontSize={"6rem"} fontFamily={"lora"}>
                  Recent Blog Posts
                </Typography>
                <img
                  src={title_seperator}
                  alt="___"
                  style={{ marginTop: "10px" }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={4} sm={12}>
              <BlogCard
                subtitle="BY GFXPARTNER"
                title="Top 10 Best Places to Explore in India"
                image="http://gfxpartner.com/Frolic/images/blog-thumb01.jpg"
                givenlink="blog"
              />
            </Grid>
            <Grid item md={4} sm={12}>
              <BlogCard
                subtitle="BY GFXPARTNER"
                title="Top unexplored places of India "
                image="http://gfxpartner.com/Frolic/images/blog-thumb02.jpg"
                givenlink="blog2"
              />
            </Grid>
            <Grid item md={4} sm={12}>
              <BlogCard
                subtitle="BY GFXPARTNER"
                title="An Enchanted Ice Cave in Midst of Denmark"
                image="http://gfxpartner.com/Frolic/images/blog-thumb03.jpg"
                givenlink="blog"
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={4}
            justifyContent={"center"}
            marginTop="40px"
          >
            <Grid
              item
              sm={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button disableElevation className={classes.load_btn}>
                Visit Our Blog
              </Button>
            </Grid>
            <Grid
              item
              sm={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Link to="/PostYourBlog">
                <Button disableElevation className={classes.load_btn}>
                  Post Your Blog
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Blogs;
