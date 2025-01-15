import { Helmet } from "react-helmet-async";
function AboutHero() {
    return (
        <>
            <Helmet>
                <title>À propos de nous</title>
                <meta name="description" content="À propos de nous" />
            </Helmet>
            <div className="about-hero">
                <h1 className="about-hero-title">À propos de nous</h1>
                <p className="about-hero-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque, nunc ac vehicula
                    ultricies,
                    <br />
                </p>
            </div>
        </>
    );
}

export default AboutHero;
