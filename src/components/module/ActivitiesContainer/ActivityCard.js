import { Box, Fab } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useMemo, useRef, useState } from "react";
// import tour1 from "../../../asserts/tour/tour-thumb01.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Activity.css";

const useStyles = makeStyles({
  action_btn_box : {
    position: "absolute",
    top: "40%",
  },
  left_right_btn : {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    padding: "10px",
    background: 'white',
    color: 'gray',
    "&:hover" : {
      color : "var(--yellow)",
    }
  }

})

const ActivityCard = (props) => {
  const [forward, setforward] = useState(false);
  const [backward, setbackward] = useState(false);
  const [translatex, settranslatex] = useState(0);
  const forwardref = useRef(null);
  const backwardref = useRef(null);

  const classes = useStyles()

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: ".75",
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries; //const entry = entries[0]
      setforward(entry.isIntersecting);
    }, options);

    const currentTarget = forwardref.current;
    // console.log("observer", observer);
    // console.log("currentTarget", currentTarget);
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [forwardref, options, translatex]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries; //const entry = entries[0]
      setbackward(entry.isIntersecting);
    }, options);

    const currentTarget = backwardref.current;
    // console.log("observer", observer);
    // console.log("currentTarget", currentTarget);
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [backwardref, options, translatex]);

  const handlebackward = () => {
    console.log("clicking");
    const activity = document.querySelector(".activity_container");
    if (window.innerWidth < 850) {
      console.log(translatex - 60);
      activity.style.transform = `translateX(${translatex - 60}vw)`;
      settranslatex((prev) => prev - 60);
    } else {
      console.log(translatex - 395);
      activity.style.transform = `translateX(${translatex - 395}px)`;
      settranslatex((prev) => prev - 395);
    }
  };

  const handleforward = () => {
    console.log("handleforward");
    const activity = document.querySelector(".activity_container");
    if (window.innerWidth < 850) {
      console.log(translatex + 60);
      activity.style.transform = `translateX(${translatex + 60}vw)`;
      settranslatex((prev) => prev + 60);
    } else {
      console.log(translatex + 395);
      activity.style.transform = `translateX(${translatex + 395}px)`;
      settranslatex((prev) => prev + 395);
    }
  };

  return (
    <>
      <div style={{position : "relative"}}>
        <div className="activity_container">
          <div className="activity_card" ref={forwardref}>
            <img src="http://gfxpartner.com/Frolic/images/attractions01-3x.jpg" alt="" />
            <div className="card_title">
              <div className="title">Camping in vally</div>
              <div className="line"></div>
            </div>
          </div>
          <div className="activity_card">
            <img src="http://gfxpartner.com/Frolic/images/attractions02-3x.jpg" alt="" />
            <div className="card_title">
              <div className="title">UnderWater Tour</div>
              <div className="line"></div>
            </div>
          </div>
          <div className="activity_card">
            <img src="http://gfxpartner.com/Frolic/images/attractions03-3x.jpg" alt="" />
            <div className="card_title">
              <div className="title">Lake View</div>
              <div className="line"></div>
            </div>
          </div>
          <div className="activity_card">
            <img src="http://gfxpartner.com/Frolic/images/attractions04-3x.jpg" alt="" />
            <div className="card_title">
              <div className="title">Ice Treking</div>
              <div className="line"></div>
            </div>
          </div>
          <div className="activity_card">
            <img src="http://gfxpartner.com/Frolic/images/attractions05-3x.jpg" alt="" />
            <div className="card_title">
              <div className="title">Climb the Ice</div>
              <div className="line"></div>
            </div>
          </div>
          <div className="activity_card" ref={backwardref}>
            <img src="http://gfxpartner.com/Frolic/images/attractions06-3x.jpg" alt="" />
            <div className="card_title">
              <div className="title">Boat Enjoy</div>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Fab
              size="medium"
              color="white"
              aria-label="forward"
              onClick={handleforward}
              className={classes.action_btn_box}
              style={{visibility : forward?"hidden":"visible" , left : "0"}}
            >
              <ArrowBackIcon className={classes.left_right_btn}/>
            </Fab>
          {!backward && (
            <Fab
              size="medium"
              color="white"
              aria-label="backward"
              onClick={handlebackward}
              className={classes.action_btn_box}
              style={{right : "0"}}
            >
              <ArrowForwardIcon className={classes.left_right_btn}/>
            </Fab>
          )}
        </Box>
      </div>
      {/* {!forward && <Button onClick={handleforward}>forward</Button>}
      {!backward && <Button onClick={handlebackward}>we can move</Button>} */}
    </>
  );
};

export default ActivityCard;
