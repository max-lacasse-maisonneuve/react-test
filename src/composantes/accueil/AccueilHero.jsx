// import animation from "../../assets/animation/loader.json";
import Scene from "../3d/Scene";
import { Helmet } from "react-helmet-async";
function AccueilHero() {
    return (
        <>
            <Helmet>
                <title>Accueil</title>
                <meta name="description" content="Accueil" />
            </Helmet>
            <div className="hero">
                <h1>Accueil</h1>
                <Scene />
            </div>
        </>
    );
}

export default AccueilHero;
