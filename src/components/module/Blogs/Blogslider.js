import React from "react";
import Slider from "react-slick";
// import slide1 from "../../../asserts/sliderImage/slide01.jpg";
// import slide2 from "../../../asserts/sliderImage/slide02.jpg";
// import slide3 from "../../../asserts/sliderImage/slide03.jpg";
// import slide4 from "../../../asserts/sliderImage/slide04.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { makeStyles } from "@mui/styles";
const usestyle = makeStyles({
  forward: {
    "& div svg": {
      position: "absolute",
      top: "225px",
      right: "30px",
      color: "gray",
      background: "white",
      borderRadius: "50%",
      fontSize: "40px",
      zIndex: "1000",
    },
    "& div svg.slick-prev": {
      left: "30px",
    },
    "& div svg:hover": {
      color: "var(--yellow)",
      background: "white",
      borderRadius: "50%",
    },
  },
  backward: {
    "& div .slick-prev": {
      position: "absolute",
      top: "225px",
      left: "30px",
      color: "gray",
      background: "white",
      borderRadius: "50%",
      fontSize: "40px",
    },
    "& div svg:hover": {
      color: "var(--yellow)",
    },
  },
});

const Blogslider = ({ imagearray }) => {
  const classes = usestyle();
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: (
      <ArrowForwardIcon
        style={{
          position: "absolute",
          top: "225px",
          right: "30px",
          color: "var(--yellow)",
          background: "white",
          borderRadius: "50%",
          fontSize: "40px",
        }}
      />
    ),
    prevArrow: <ArrowBackIcon className={classes.backward} />,
  };
  return (
    <div
      style={{ marginTop: "60px", overflow: "hidden", height: "500px" }}
      className={classes.forward}
    >
      <Slider {...settings}>
        {imagearray &&
          imagearray.map((data) => {
            return (
              <div>
                <img
                  src={data}
                  alt="----"
                  style={{ width: "100%", height: "500px" }}
                />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Blogslider;
