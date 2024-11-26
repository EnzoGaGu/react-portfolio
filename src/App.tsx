import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./assets/profile.jpg";
import CV from "./assets/CV.pdf";
import Title from "./components/Title";
import Carousel from "./components/Carousel";
import ProjectSection from "./components/ProjectSection";
import TinDog from "./assets/TinDog.png";
import ProjectZero from "./assets/Project_Zero.png";
import NoSQL from "./assets/NoSQL.png";
import PSaving from "./assets/Saving.png";
import Footer from "./components/Footer";
import HeaderData from "./Data/Header.json";
import HeroData from "./Data/Hero.json";
import ProjectSectionD from "./Data/ProjectSection.json";
import CarouselData from "./Data/CarouselData.json";
import FooterData from "./Data/FooterData.json";
//import { useRef } from "react";

document.body.style.backgroundColor = "#393E46";

function App() {
    const cathegories: string[] = HeaderData.map((item) => item.option);

    //const conocimientosRef = useRef<HTMLDivElement>(null);

    const pCath = ProjectSectionD.map((item) => item.cathegory);
    const names = ProjectSectionD.map((item) => item.name);
    const descs = ProjectSectionD.map((item) => item.desc);
    const links = ProjectSectionD.map((item) => item.link);
    const imgs = [TinDog, ProjectZero, NoSQL, PSaving];
    const altImgs = ProjectSectionD.map((item) => item.altImg);

    const handleNavBarClick = console.log("Yo puedo hacerlo");

    const lastPhrase = "¡Gracias!";
    const imgLink = [import.meta.env.BASE_URL + "/github-mark-white.svg", import.meta.env.BASE_URL + "/linkedin.svg", import.meta.env.BASE_URL + "/gmail.svg"];

    return (
        <div className="container-fluid p-0">
            <Header items={cathegories} onSelectItem={() => handleNavBarClick} />
            <Hero
                name={HeroData.name}
                title={HeroData.title}
                buttonText={HeroData.buttonText}
                buttonTextEng={HeroData.buttonTextEng}
                imgLink={Profile}
                buttonLink={CV}
                text={HeroData.text}
            />

            <div id="Conocimientos">
                <Title>Conocimientos</Title>
            </div>

            <Carousel
                listItemsList={CarouselData.map((item) => item.tech)}
                listProgressList={CarouselData.map((item) => item.barPercentage)}
                sliderTitles={CarouselData.map((item) => item.sliderTitle)}
            />

            <div id="Proyectos">
                <Title>Proyectos</Title>
            </div>

            <ProjectSection cathegories={pCath} names={names} descs={descs} links={links} imgs={imgs} altImgs={altImgs} />

            <div id="¡Contáctame!">
                <Footer
                    contact={FooterData.map((item) => item.contact)}
                    link={FooterData.map((item) => item.contactLink)}
                    lastPhrase={lastPhrase}
                    imgLink={imgLink}
                />
            </div>
        </div>
    );
}

export default App;
