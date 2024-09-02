import React from "react";
import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";
import HomePage from "../pages/homePage";
import { Route, Routes, useLocation } from "react-router-dom";
import {
    ABOUT_US,
    CONTACT_US,
    DASHBOARD,
    DASHBOARD_INSTRUCTORS,
    FAQ,
    HOME_PAGE,
    LOGIN, NOTIFICATIONS,
    TERM_CONDITION,
} from "../constants/routePaths";
import AboutUs from "../pages/aboutUs";
import ContactUs from "../pages/contactUs";
import Faq from "../pages/faq";
import TermCondition from "../pages/termCondition";
import LoginPage from "../dsPages/loginPage";
import DsHeader from "./dsLayout/dsHeader";
import Dashboard from "../dsPages/dashboard";
import DashboardInstructors from "../dsPages/dashboardInstructors";
import Notifications from "../dsPages/notifications";




function RoutesComponent() {
    const loc = useLocation();
    return (
        <div>
            {
                loc?.pathname.includes("/dashboard") ?
                    <>
                        <DsHeader />
                        <Routes>
                            <Route exact path={LOGIN} element={<LoginPage />} />
                            <Route exact path={DASHBOARD} element={<Dashboard />} />
                            <Route exact path={NOTIFICATIONS} element={<Notifications />} />
                            <Route exact path={DASHBOARD_INSTRUCTORS} element={<DashboardInstructors />} />

                        </Routes>
                        <Footer />
                    </>
                    :
                    <>
                        <Header />
                        <Routes>
                            <Route exact path={HOME_PAGE} element={<HomePage />} />
                            <Route exact path={ABOUT_US} element={<AboutUs />} />
                            <Route exact path={CONTACT_US} element={<ContactUs />} />
                            <Route exact path={FAQ} element={<Faq />} />
                            <Route exact path={TERM_CONDITION} element={<TermCondition />} />
                        </Routes>
                        <Footer />
                    </>
            }
        </div>
    );
}

export default RoutesComponent;
