import { Avatar, Rating } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Slider from "react-slick";
import React, { useRef } from "react";

import "./ReviewCard.css";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const useStyle = makeStyles({
  reviewbox: {
    background: "#fff",
    padding: "50px 65px",
    textAlign: "center",
    width: "364px",
    position: "relative",
    cursor: "grab",
    "& h4": {
      fontFamily: "Lora",
      fontSize: "2.4rem",
      margin: "20px 0",
      color: "#393c3f",
      zIndex: 100,
    },
    "& p": {
      fontWeight: 300,
      lineHeight: "3rem",
      color: "#393c3f",
      fontSize: "1.8rem",
      marginBottom: "30px",
    },
    "&::before": {
      content: "",
      display: "block",
      background:
        "url(http://gfxpartner.com/Frolic/images/quote.png) no-repeat",
      width: "119px",
      height: "96px",
      position: "absolute",
      left: "15px",
      top: "-10px",
      color: "#f4fbff",
      zindex: 0,
    },
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  useImage: {
    width: "80px",
    height: "80px",
  },
  username: {
    fontWeight: 500,
    color: "#393c3f",
    fontSize: "1.4rem",
  },
});

const ReviewCard = () => {
  const classes = useStyle();

  const css = `
  .slick-slide div{
    margin: 0 8px;
}

.slick-list {
    overflow: visible;
}

.slick-dots{
    bottom: -50px;
}

.slick-dots li{
    width: 16px;
    height: 16px;
    background-color: #dee0e2;
    border-radius: 50%;
}

.slick-dots .slick-active {
    background-color: #53a0ef
}

.slick-dots li button::before{
    content: "";
}
  `;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 610,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reviewRef = useRef(null);

  return (
    <>
      <style>{css}</style>
      <Slider
        {...settings}
        ref={reviewRef}
        onMouseDown={() => (reviewRef.current.style.cursor = "grabbing")}
        onMouseUp={() => (reviewRef.current.style.cursor = "grab")}
      >
        <div className={classes.reviewbox} id="review_box">
          <div>
            <Rating
              value={5}
              readOnly={true}
              sx={{ fontSize: "2.5rem", color: "var(--yellow)" }}
            />
          </div>
          <h4>A truly amazing experience!</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur dese adipiscing helit nullam
            li sodales, nibh quis viverra laotreet mauris jurna sagitis arcu ut
            erdiete metus dolor eget lemi.
          </p>
          <div className={classes.userInfo}>
            <Avatar
              className={classes.useImage}
              alt="Remy Sharp"
              src="http://gfxpartner.com/Frolic/images/guide01.png"
            />
            <div className={classes.username}>JACK,USA</div>
          </div>
        </div>
        <div className={classes.reviewbox} id="review_box">
          <div>
            <Rating
              value={5}
              readOnly={true}
              sx={{ fontSize: "2.5rem", color: "var(--yellow)" }}
            />
          </div>
          <h4>A truly amazing experience!</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur dese adipiscing helit nullam
            li sodales, nibh quis viverra laotreet mauris jurna sagitis arcu ut
            erdiete metus dolor eget lemi.
          </p>
          <div className={classes.userInfo}>
            <Avatar
              className={classes.useImage}
              alt="Remy Sharp"
              src="http://gfxpartner.com/Frolic/images/guide01.png"
            />
            <div className={classes.username}>JACK,USA</div>
          </div>
        </div>
        <div className={classes.reviewbox} id="review_box">
          <div>
            <Rating
              value={5}
              readOnly={true}
              sx={{ fontSize: "2.5rem", color: "var(--yellow)" }}
            />
          </div>
          <h4>A truly amazing experience!</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur dese adipiscing helit nullam
            li sodales, nibh quis viverra laotreet mauris jurna sagitis arcu ut
            erdiete metus dolor eget lemi.
          </p>
          <div className={classes.userInfo}>
            <Avatar
              className={classes.useImage}
              alt="Remy Sharp"
              src="http://gfxpartner.com/Frolic/images/guide01.png"
            />
            <div className={classes.username}>JACK,USA</div>
          </div>
        </div>
        <div className={classes.reviewbox} id="review_box">
          <div>
            <Rating
              value={5}
              readOnly={true}
              sx={{ fontSize: "2.5rem", color: "var(--yellow)" }}
            />
          </div>
          <h4>A truly amazing experience!</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur dese adipiscing helit nullam
            li sodales, nibh quis viverra laotreet mauris jurna sagitis arcu ut
            erdiete metus dolor eget lemi.
          </p>
          <div className={classes.userInfo}>
            <Avatar
              className={classes.useImage}
              alt="Remy Sharp"
              src="http://gfxpartner.com/Frolic/images/guide01.png"
            />
            <div className={classes.username}>JACK,USA</div>
          </div>
        </div>
        <div className={classes.reviewbox} id="review_box">
          <div>
            <Rating
              value={5}
              readOnly={true}
              sx={{ fontSize: "2.5rem", color: "var(--yellow)" }}
            />
          </div>
          <h4>A truly amazing experience!</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur dese adipiscing helit nullam
            li sodales, nibh quis viverra laotreet mauris jurna sagitis arcu ut
            erdiete metus dolor eget lemi.
          </p>
          <div className={classes.userInfo}>
            <Avatar
              className={classes.useImage}
              alt="Remy Sharp"
              src="http://gfxpartner.com/Frolic/images/guide01.png"
            />
            <div className={classes.username}>JACK,USA</div>
          </div>
        </div>
        <div className={classes.reviewbox} id="review_box">
          <div>
            <Rating
              value={5}
              readOnly={true}
              sx={{ fontSize: "2.5rem", color: "var(--yellow)" }}
            />
          </div>
          <h4>A truly amazing experience!</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur dese adipiscing helit nullam
            li sodales, nibh quis viverra laotreet mauris jurna sagitis arcu ut
            erdiete metus dolor eget lemi.
          </p>
          <div className={classes.userInfo}>
            <Avatar
              className={classes.useImage}
              alt="Remy Sharp"
              src="http://gfxpartner.com/Frolic/images/guide01.png"
            />
            <div className={classes.username}>JACK,USA</div>
          </div>
        </div>
        <div className={classes.reviewbox} id="review_box">
          <div>
            <Rating
              value={5}
              readOnly={true}
              sx={{ fontSize: "2.5rem", color: "var(--yellow)" }}
            />
          </div>
          <h4>A truly amazing experience!</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur dese adipiscing helit nullam
            li sodales, nibh quis viverra laotreet mauris jurna sagitis arcu ut
            erdiete metus dolor eget lemi.
          </p>
          <div className={classes.userInfo}>
            <Avatar
              className={classes.useImage}
              alt="Remy Sharp"
              src="http://gfxpartner.com/Frolic/images/guide01.png"
            />
            <div className={classes.username}>JACK,USA</div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default ReviewCard;
