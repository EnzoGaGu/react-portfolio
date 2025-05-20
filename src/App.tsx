import Hero from "./components/Hero";
import Profile from "./assets/profile.jpg";
import CV from "./assets/CV.pdf";
import Title from "./components/Title";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";

document.body.style.backgroundColor = "#393E46";

function App() {
    const { t } = useTranslation();
    const contact = (t("footer", { returnObjects: true }) as { contact: string }[]).map((item) => item.contact);
    const contactLink = (t("footer", { returnObjects: true }) as { contactLink: string }[]).map((item) => item.contactLink);
    const projectLinks = (t("projects", { returnObjects: true }) as { link: string }[]).map((item) => item.link);

    const lastPhrase = "¡Gracias!";
    const imgLink = [import.meta.env.BASE_URL + "/github-mark-white.svg", import.meta.env.BASE_URL + "/linkedin.svg", import.meta.env.BASE_URL + "/gmail.svg"];

    return (
        <div className="container-fluid p-0">
            {/*<Header items={categories} onSelectItem={() => handleNavBarClick} />*/}
            <Hero name={t("hero.name")} title={t("hero.title")} buttonText={t("hero.buttonText")} imgLink={Profile} buttonLink={CV} text={t("hero.text")} />

            <div id="Proyectos">
                <Title>Proyectos</Title>
            </div>

            <ProjectSection links={projectLinks} />

            <div id="¡Contáctame!">
                <Footer contact={contact} link={contactLink} lastPhrase={lastPhrase} imgLink={imgLink} />
            </div>
        </div>
    );
}

export default App;
