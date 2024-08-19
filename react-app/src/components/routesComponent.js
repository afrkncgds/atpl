import React from "react";
import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";
import HomePage from "../pages/homePage";
import { Route, Routes } from "react-router-dom";
import {ABOUT_US, CONTACT_US, FAQ, HOME_PAGE, TERM_CONDITION,} from "../constants/routePaths";
import AboutUs from "../pages/aboutUs";
import ContactUs from "../pages/contactUs";
import Faq from "../pages/faq";
import TermCondition from "../pages/termCondition";


function RoutesComponent() {
    const user=true;
  return (
    <div>

      <Header />
          <Routes>
            <Route exact path={HOME_PAGE} element={<HomePage />} />
            <Route exact path={ABOUT_US} element={<AboutUs/>} />
            <Route exact path={CONTACT_US} element={<ContactUs/>} />
            <Route exact path={FAQ} element={<Faq/>} />
            <Route exact path={TERM_CONDITION} element={<TermCondition/>} />
          </Routes>
      <Footer />
    </div>
  );
}
export default RoutesComponent;
