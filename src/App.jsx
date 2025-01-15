import "./assets/css/styles.css";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutHero from "./composantes/accueil/AboutHero";
import Footer from "./composantes/global/Footer";
import Header from "./composantes/global/Header";
import AccueilHero from "./composantes/accueil/AccueilHero";
import Page404 from "./composantes/global/Page404";
import ReactGA from "react-ga4";
import { useEffect } from "react";

function App() {
    const location = useLocation();
    ReactGA.initialize("G-S698NH91GB");

    useEffect(() => {
        console.log(location.pathname);

        ReactGA.send({ hitType: "pageview", page: location.pathname, title: location.title });
    }, [location]);

    return (
        <>
            {/* Placer l'entete ici */}
            <Header />
            <Routes>
                <Route path="/" element={<AccueilHero />} />
                <Route path="patate">
                    <Route path="" element={<Page404 />} />
                    <Route path="a-propos" element={<AboutHero />} />
                </Route>
                <Route path="*" element={<Page404 />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
