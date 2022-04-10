import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
// import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DateRangePicker from "@mui/lab/DateRangePicker";
// import { DateRangePicker } from "rsuite";
// import 'rsuite/styles/index.less';
// import "rsuite/dist/rsuite.min.css";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const usestyle = makeStyles({
  searchbox: {
    padding: "14rem 0px",
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
    padding: "12px",
    border: "1px solid gray",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    gap: "7px",
  },
  searchbtn: {
    padding: "16px 0",
    width: "100%",
    borderRadius: "10px",
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "white",
    backgroundColor: "var(--yellow)",
    transition: "all .3s",
    "&:hover": {
      color: "var(--yellow)",
      backgroundColor: "white",
      boxShadow: "4px 4px 10px #eee",
    },
  },
  datePicker: {
    width: "100%",
  },
});

const SearchPlanning = () => {
  const classes = usestyle();
  const [value, setValue] = React.useState([null, null]);
  const [daterange, setdaterange] = React.useState("")

  React.useEffect(()=>{
    let range;
    if (value[0]!==null && value[1]!==null) {
      range = `${new Date(value[0]).toLocaleDateString()} - ${new Date(value[1]).toLocaleDateString()}`;
    }else{
      range = ""
    }
    setdaterange(range)
  }, [value])

  return (
    <>
      <Box
        sx={{ width: "100%", backgroundColor: "white" }}
        className={classes.searchbox}
      >
        <Grid container alignItems={"center"}>
          <Grid item xs={12}>
            <Typography
              fontSize={"4rem"}
              fontFamily={"lora"}
              fontWeight={"500"}
            >
              Find Your Next Advanture!
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems={"center"} spacing={2} marginTop={"10px"}>
          <Grid item sm={5} xs={12}>
            <Box className={classes.searchinput}>
              <SearchIcon className={classes.searchicon} />
              <InputBase
                sx={{ ml: 1, flex: 1, fontSize: "2rem" }}
                placeholder="Search Activities, Themes or Tours"
                inputProps={{
                  "aria-label": "Search Activities, Themes or Tours",
                }}
              />
            </Box>
          </Grid>
          <Grid item sm={5} xs={12}>
            <Box className={classes.searchinput}>
              <CalendarTodayIcon className={classes.searchicon} />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateRangePicker
                  label="Advanced keyboard"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      {/* <input ref={startProps.inputRef} {...startProps.inputProps} /> */}
                      <InputBase
                        ref={startProps.inputRef}
                        {...startProps.inputProps}
                        sx={{ ml: 1, flex: 1, fontSize: "2rem" }}
                        placeholder="select date range"
                        inputProps={{ "aria-label": "Choose Date" }}
                        value={daterange}
                      />
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>
              {/* <DateRangePicker appearance="subtle" placeholder="Choose Date" className={classes.datePicker} character="-" format="dd-MM-yyyy"/> */}
            </Box>
          </Grid>
          <Grid item sm={2} xs={12} textAlign={"right"}>
            <Button disableElevation className={classes.searchbtn}>
              Search
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems={"center"} marginTop={"5px"}>
          <Grid item>
            <Typography variant="p" fontSize={"1.4rem"} fontWeight={700}>
              Suggestion
            </Typography>
          </Grid>
          <Grid item>
            <ArrowRightAltIcon className={classes.arrowicon} />
          </Grid>
          <Grid item>
            <Typography
              variant="p"
              fontSize={"1.4rem"}
              color={"gray"}
              sx={{
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Adventure
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="p"
              fontSize={"1.4rem"}
              color={"gray"}
              sx={{
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Nothern Lights
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="p"
              fontSize={"1.4rem"}
              color={"gray"}
              sx={{
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Waterfalls
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="p"
              fontSize={"1.4rem"}
              color={"gray"}
              sx={{
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Winter Tours
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="p"
              fontSize={"1.4rem"}
              color={"gray"}
              sx={{
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Glaciar Walk
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SearchPlanning;
