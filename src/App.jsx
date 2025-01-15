import "./assets/css/styles.css";
import { Route, Routes } from "react-router-dom";
import AboutHero from "./composantes/accueil/AboutHero";
import Footer from "./composantes/global/Footer";
import Header from "./composantes/global/Header";
import AccueilHero from "./composantes/accueil/AccueilHero";
import Page404 from "./composantes/global/Page404";

function App() {
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
