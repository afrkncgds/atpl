import React from "react";
import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";
import HomePage from "../pages/homePage";
import { Route, Routes } from "react-router-dom";
import {ABOUT_US, CONTACT_US, DASHBOARD, FAQ, HOME_PAGE, LOGIN, TERM_CONDITION,} from "../constants/routePaths";
import AboutUs from "../pages/aboutUs";
import ContactUs from "../pages/contactUs";
import Faq from "../pages/faq";
import TermCondition from "../pages/termCondition";
import LoginPage from "../dsPages/loginPage";
import DashboardHeader from "./dashboard/dashboardHeader";
import LoginHeader from "./login/loginHeader";
import LoginFooter from "./login/loginFooter";




function RoutesComponent() {
    const user=true;
  return (
    <div>
        <Routes>
            <Route path={LOGIN} element={
                <>
                    <LoginHeader/>
                    <LoginPage />
                    <LoginFooter/>
                </>
                } />
            <Route
                path={DASHBOARD}
                element={
                    <>
                        <DashboardHeader />
                        <DASHBOARD />
                        <Footer />
                    </>
                }
            />
            <Route
                path="*"
                element={
                    <>
                        <Header />
                        <Routes>
                            <Route exact path={HOME_PAGE} element={<HomePage/>}/>
                            <Route exact path={ABOUT_US} element={<AboutUs/>}/>
                            <Route exact path={CONTACT_US} element={<ContactUs/>}/>
                            <Route exact path={FAQ} element={<Faq/>}/>
                            <Route exact path={TERM_CONDITION} element={<TermCondition/>}/>
                        </Routes>
                        <Footer/>
                    </>
                }
            />
        </Routes>
    </div>
  );
}

export default RoutesComponent;
