import React, { useEffect, useRef, useState } from "react";
import {useLocation} from "react-router"
import { Link } from "react-router-dom";
import logo from "../../asserts/logo/logo-light.png";
import SearchIcon from "@mui/icons-material/Search";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";
import "./Header.css";
import Dropdown from "./Dropdown";

const Header = ({ sidebarOpen, setsidebarOpen }) => {
  const [searchOpen, setsearchOpen] = useState(false);
  const menu_icon = useRef(null);
  const location = useLocation()
  console.log(location)

  const handleMenu = () => {
    menu_icon.current.classList.toggle("active");
    document.getElementById("line1").classList.toggle("active");
    document.getElementById("line2").classList.toggle("active");
    document.getElementById("line3").classList.toggle("active");
    console.log(sidebarOpen);
    setsidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      // console.log(window.scrollY);
      const dx = window.scrollY;
      if (dx < 56 && location.pathname === "/") {
        document.querySelector(".navBar").classList.remove("navbar_sticky");
        document.querySelector(".navBar").style.padding = `${38 - (dx/2)}px 0px`;
      } else {
        document.querySelector(".navBar").classList.add("navbar_sticky");
      }
    });
  }, [location.pathname]);

  return (
    <>
      <div className={location.pathname === "/"?"navBar":"navBar navbar_sticky"}>
        <div className="navbar_cotainer">
          <div className="left_nav">
            <div className="logo">
              <img src={logo} alt="Frolic" />
            </div>
          </div>
          <div className="right_nav">
            <ul className="nav_links">
              <li className="links">
                <Link to="/">Home</Link>
                <Dropdown
                  options={[
                    "DENMARK",
                    "NORWAY",
                    "FINLAND",
                    "SWEDEN",
                    "ICELAND",
                  ]}
                />
              </li>
              <li className="links">
                <Link to="/pages">Pages</Link>
                <Dropdown
                  options={[
                    "DENMARK",
                    "NORWAY",
                    "FINLAND",
                    "SWEDEN",
                    "ICELAND",
                  ]}
                />
              </li>
              <li className="links">
                <Link to="/attraction">Attraction</Link>
                <Dropdown
                  options={[
                    "DENMARK",
                    "NORWAY",
                    "FINLAND",
                    "SWEDEN",
                    "ICELAND",
                  ]}
                />
              </li>
              <li className="links">
                <Link to="/checkout">Checkout</Link>
                <Dropdown
                  options={[
                    "DENMARK",
                    "NORWAY",
                    "FINLAND",
                    "SWEDEN",
                    "ICELAND",
                  ]}
                />
              </li>
              <li className="links">
                <Link to="/contact">Contact</Link>
                <Dropdown
                  options={[
                    "DENMARK",
                    "NORWAY",
                    "FINLAND",
                    "SWEDEN",
                    "ICELAND",
                  ]}
                />
              </li>
            </ul>
            <div className="search_ico">
              <SearchIcon onClick={() => setsearchOpen(true)} />
            </div>
            <div className="menu_icon" ref={menu_icon} onClick={handleMenu}>
              <div className="line_menu_icon" id="line1"></div>
              <div className="line_menu_icon" id="line2"></div>
              <div className="line_menu_icon" id="line3"></div>
            </div>
          </div>
        </div>
      </div>
      <SwipeableTemporaryDrawer
        anchor="top"
        state={searchOpen}
        setState={setsearchOpen}
      />
    </>
  );
};

export default Header;
