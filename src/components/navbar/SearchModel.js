import { Button, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const usestyle = makeStyles({
  searchbox: {
    padding: "30px 20px",
    maxWidth: "1100px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    placeContent: "center",
    gap: "20px",
  },
  searchicon: {
    color: "var(--yellow)",
    fontSize: "1.8rem",
  },
  arrowicon: {
    color: "var(--yellow)",
    fontSize: "2.5rem",
  },
  searchinput: {
    padding: "15px",
    border: "1px solid gray",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    gap: "7px",
  },
  searchbtn: {
    padding: "16px 0",
    width: "100%",
    marginLeft: "10px",
    borderRadius: "10px",
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "white",
    backgroundColor: "var(--yellow)",
    transition : "all .3s",
    "&:hover": {
      color: "var(--yellow)",
      backgroundColor: "white",
      boxShadow : "4px 4px 10px #eee"
    },
  },
});

const SearchModel = ({ setState }) => {
  const classes = usestyle();
  return (
    <Box
      sx={{ width: "100%", height: "50vh", backgroundColor: "white" }}
      className={classes.searchbox}
    >
      <Grid container alignItems={"center"}>
        <Grid item xs={10}>
          <Typography fontSize={"4rem"} fontFamily={"lora"}>
            Make Quick Search to Find!
          </Typography>
        </Grid>
        <Grid item xs={2} textAlign={"right"}>
          <IconButton onClick={() => setState(false)}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container alignItems={"center"} sx={{ margin: "10px auto" }}>
        <Grid item sm={10} xs={9} className={classes.searchinput}>
          <SearchIcon className={classes.searchicon} />
          <InputBase
            sx={{ ml: 1, flex: 1, fontSize: "1.5rem" }}
            placeholder="Search Activities, Themes or Tours"
            inputProps={{ "aria-label": "Search Activities, Themes or Tours" }}
          />
        </Grid>
        <Grid item sm={2} xs={3} textAlign={"right"}>
          <Button disableElevation className={classes.searchbtn}>
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems={"center"}>
        <Grid item>
          <Typography variant="p" fontSize={"1.4rem"} fontWeight={700}>
            Suggestion
          </Typography>
        </Grid>
        <Grid item>
          <ArrowRightAltIcon className={classes.arrowicon} />
        </Grid>
        <Grid item>
          <Typography variant="p" fontSize={"1.4rem"} color={"gray"} sx={{cursor : "pointer" , "&:hover" : {textDecoration : "underline"}}}>
            Adventure
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="p" fontSize={"1.4rem"} color={"gray"} sx={{cursor : "pointer" , "&:hover" : {textDecoration : "underline"}}}>
            Nothern Lights
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="p" fontSize={"1.4rem"} color={"gray"} sx={{cursor : "pointer" , "&:hover" : {textDecoration : "underline"}}}>
            Waterfalls
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="p" fontSize={"1.4rem"} color={"gray"} sx={{cursor : "pointer" , "&:hover" : {textDecoration : "underline"}}}>
            Winter Tours
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="p" fontSize={"1.4rem"} color={"gray"} sx={{cursor : "pointer" , "&:hover" : {textDecoration : "underline"}}}>
            Glaciar Walk
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchModel;
