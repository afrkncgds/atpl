import React from "react";
import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";
import HomePage from "../pages/homePage";
import { Route, Routes } from "react-router-dom";
import { HOME_PAGE, } from "../constants/routePaths";


function RoutesComponent() {
  return (
    <div>
      <Header />
          <Routes>
            <Route exact path={HOME_PAGE} element={<HomePage />} />
          </Routes>
      <Footer />
    </div>
  );
}
export default RoutesComponent;
