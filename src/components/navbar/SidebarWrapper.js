import React, { useEffect } from "react";
import SideNavbar from "./SideNavbar";

const SidebarWrapper = ({ sidebarOpen, setsidebarOpen }) => {
  useEffect(() => {
    if (sidebarOpen === true) {
      document.querySelector(".sidebar_container").classList.add("active");
      document.body.classList.add("overFlow_hidden");
    } else {
      document.querySelector(".sidebar_container").classList.remove("active");
      document.body.classList.remove("overFlow_hidden");
    }
  }, [sidebarOpen]);

  return (
    <div className="sidebar_container">
      <SideNavbar
        optionhead="Home"
        options={["DENMARK", "NORWAY", "FINLAND", "SWEDEN", "ICELAND"]}
      />
      <SideNavbar
        optionhead="Pages"
        options={["DENMARK", "NORWAY", "FINLAND", "SWEDEN", "ICELAND"]}
      />
      <SideNavbar
        optionhead="Attraction"
        options={["DENMARK", "NORWAY", "FINLAND", "SWEDEN", "ICELAND"]}
      />
      <SideNavbar
        optionhead="Checkout"
        options={["DENMARK", "NORWAY", "FINLAND", "SWEDEN", "ICELAND"]}
      />
      <SideNavbar
        optionhead="Contact"
        options={["DENMARK", "NORWAY", "FINLAND", "SWEDEN", "ICELAND"]}
      />
    </div>
  );
};

export default SidebarWrapper;
