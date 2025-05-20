//import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./assets/profile.jpg";
import CV from "./assets/CV.pdf";
//import CVE from "./assets/CVE.pdf";
import Title from "./components/Title";
//import Carousel from "./components/Carousel";
import ProjectSection from "./components/ProjectSection";
//import TinDog from "./assets/TinDog.png";
//import ProjectZero from "./assets/Project_Zero.png";
//import NoSQL from "./assets/NoSQL.png";
//import PSaving from "./assets/Saving.png";
import Footer from "./components/Footer";
//import ProjectSectionD from "./Data/ProjectSection.json";
import { useTranslation } from "react-i18next";
//import { List } from "@mui/material";
//import { useRef } from "react";

document.body.style.backgroundColor = "#393E46";

function App() {
    const { t } = useTranslation();
    //const categories = (t("header", { returnObjects: true }) as { option: string }[]).map((item) => item.option);
    const contact = (t("footer", { returnObjects: true }) as { contact: string }[]).map((item) => item.contact);
    const contactLink = (t("footer", { returnObjects: true }) as { contactLink: string }[]).map((item) => item.contactLink);
    const projectLinks = (t("projects", { returnObjects: true }) as { link: string }[]).map((item) => item.link);

    //const conocimientosRef = useRef<HTMLDivElement>(null);

    //const handleNavBarClick = console.log("Yo puedo hacerlo");

    const lastPhrase = "¡Gracias!";
    const imgLink = [import.meta.env.BASE_URL + "/github-mark-white.svg", import.meta.env.BASE_URL + "/linkedin.svg", import.meta.env.BASE_URL + "/gmail.svg"];

    return (
        <div className="container-fluid p-0">
            {/*<Header items={categories} onSelectItem={() => handleNavBarClick} />*/}
            <Hero name={t("hero.name")} title={t("hero.title")} buttonText={t("hero.buttonText")} imgLink={Profile} buttonLink={CV} text={t("hero.text")} />

            {/*
            <div id="Conocimientos">
                <Title>Conocimientos</Title>
            </div>

            <Carousel
                listItemsList={CarouselData.map((item) => item.tech)}
                listProgressList={CarouselData.map((item) => item.barPercentage)}
                sliderTitles={CarouselData.map((item) => item.sliderTitle)}
            />
            */}

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
