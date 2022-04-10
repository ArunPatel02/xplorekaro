import React, { useRef } from "react";
// import { data } from './sliderData'
import slide1 from "../../asserts/sliderImage/slide01.jpg";
import slide2 from "../../asserts/sliderImage/slide02.jpg";
import slide3 from "../../asserts/sliderImage/slide03.jpg";
import slide4 from "../../asserts/sliderImage/slide04.jpg";
import arrowlink from "../../asserts/sliderImage/arrow-link.png";
import "./Carousel.css";
import Slider from "react-slick";

const Carousel = () => {
  const ref = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      {/* <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
        data-bs-pause={false}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          >
            <div className="btn_upper_text">WHO WE ARE</div>
            <div className="btn_main_text">OUR PASSION</div>
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
            <div className="btn_upper_text">NORTHERN LIGHTS</div>
            <div className="btn_main_text">SPECIAL OFFER</div>
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          >
            <div className="btn_upper_text">BEST SELLING</div>
            <div className="btn_main_text">ICE CLIMBING</div>
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          >
            <div className="btn_upper_text">THE FAMOUS</div>
            <div className="btn_main_text">HIKING TRAILS</div>
          </button>
        </div>
      */}
      <div
        className="carousel-inner"
        ref={ref}
        onMouseDown={() => (ref.current.style.cursor = "grabbing")}
        onMouseUp={() => (ref.current.style.cursor = "grab")}
      >
        <Slider {...settings}>
          <div
            className="carousel-item slide1"
            style={{ background: `url(${slide1})` }}
          >
            <div className="carousel_contenet">
              <div className="carousel_inner_contenet">
                your adventure <br />
                travel experts in <br />
                europe !
              </div>
              <div className="learn_more_btn">
                <img src={arrowlink} alt="arrow" />
                learn More
              </div>
            </div>
          </div>
          <div
            className="carousel-item slide2"
            style={{ backgroundImage: `url(${slide2})` }}
          >
            <div className="carousel_contenet">
              <div className="carousel_inner_contenet">
                3 point secrets
                <br />
                to maintaining <br />
                traveling
              </div>
              <div className="learn_more_btn">
                <img src={arrowlink} alt="arrow" />
                learn More
              </div>
            </div>
          </div>
          <div
            className="carousel-item slide3"
            style={{ backgroundImage: `url(${slide3})` }}
          >
            <div className="carousel_contenet">
              <div className="carousel_inner_contenet">
                sensation ice <br />
                trip is coming <br />
                for kids
              </div>
              <div className="learn_more_btn">
                <img src={arrowlink} alt="arrow" />
                learn More
              </div>
            </div>
          </div>
          <div
            className="carousel-item slide4"
            style={{ backgroundImage: `url(${slide4})` }}
          >
            <div className="carousel_contenet">
              <div className="carousel_inner_contenet">
                sensation ice <br />
                trip is coming <br />
                for kids
              </div>
              <div className="learn_more_btn">
                <img src={arrowlink} alt="arrow" />
                learn More
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* // </div> */}
    </>
  );
};

export default Carousel;
