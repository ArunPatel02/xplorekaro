// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesPath from "./routes/routes";
import Header from "./components/navbar/Header";
import Footer from "./components/footer/Footer";
import SidebarWrapper from "./components/navbar/SidebarWrapper";
import { useContext, useState } from "react";
import CustomContext, { CustomMakeContext } from "./context/CustomContext";
import LoginSignup from "./components/Loginsignup/LoginSignup";
import AlertHelper from "./helper/customAlert/AlertHelper";

function App() {
  const [sidebarOpen, setsidebarOpen] = useState(false);

  return (
    <CustomContext>
      <BrowserRouter>
        <AlertHelper />
        <Header sidebarOpen={sidebarOpen} setsidebarOpen={setsidebarOpen} />
        <LoginSignup />
        <RoutesPath />
        <Footer />
        <SidebarWrapper
          sidebarOpen={sidebarOpen}
          setsidebarOpen={setsidebarOpen}
        />
      </BrowserRouter>
    </CustomContext>
  );
}

export default App;
