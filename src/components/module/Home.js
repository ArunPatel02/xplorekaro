import React from "react";
import Carousel from "../navbar/Carousel";
import SearchPlanning from "../module/SearchPlanning";
import PopularContainer from "../module/popularcontainer/PopularContainer";
import Activities from "../module/ActivitiesContainer/Activities";
import ReviewContainer from "../module/CustomerReview/ReviewContainer";
import Blogs from "../module/Blogs/Blogs";
import Banner from "../module/Banner/Banner";

const Home = () => {
  return (
    <>
      <div className="app_container">
        <Carousel />
        <SearchPlanning />
      </div>
      <PopularContainer />
      <Activities />
      <ReviewContainer />
      <Blogs />
      <Banner />
    </>
  );
};

export default Home;
