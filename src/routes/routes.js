import React from "react";
import { Routes, Route } from "react-router-dom";
import routerdata from "./routesdata.json";
import BlogDetail from "../components/module/Blogs/BlogDetail";
import BlogDetails2 from "../components/module/Blogs/BlogDetails2";
import Home from "../components/module/Home";
import PostYourBlog from "../components/module/PostBlog/PostYourBlog";

const RoutesPath = () => {
  return (
    <Routes>
      <Route exact path={routerdata.home} element={<Home />} />
      <Route exact path={routerdata.blog} element={<BlogDetail />} />
      <Route exact path={routerdata.blog2} element={<BlogDetails2 />} />
      <Route exact path={routerdata.PostYourBlog} element={<PostYourBlog />} />
    </Routes>
  );
};

export default RoutesPath;
