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

document.body.style.backgroundColor = "#bfcfe7";

function App() {
    const listOfBars = [
        [100, 50, 25, 10, 70],
        [1, 1, 1, 1, 1],
        [1, 1],
    ];

    const cathegories: string[] = HeaderData.map((item) => item.option);

    const pCath = ProjectSectionD.map((item) => item.cathegory);
    const names = ProjectSectionD.map((item) => item.name);
    const descs = ProjectSectionD.map((item) => item.desc);
    const links = ProjectSectionD.map((item) => item.link);
    const imgs = [TinDog, ProjectZero, NoSQL, PSaving];
    const altImgs = ProjectSectionD.map((item) => item.altImg);

    const handleNavBarClick = console.log("Yo puedo hacerlo");

    const contacts = ["GitHub", "LinkedIn", "GMail"];
    const contactLinks = ["", "", ""];
    const lastPhrase = "¡Gracias!";
    const imgLink = ["", "", ""];

    return (
        <div>
            <Header items={cathegories} onSelectItem={() => handleNavBarClick} />
            <Hero name={HeroData.name} title={HeroData.title} buttonText={HeroData.buttonText} imgLink={Profile} buttonLink={CV} text={HeroData.text} />

            <Title>Conocimientos</Title>

            <Carousel
                listItemsList={CarouselData.map((item) => item.tech)}
                listProgressList={CarouselData.map((item) => item.barPercentage)}
                sliderTitles={CarouselData.map((item) => item.sliderTitle)}
            />

            <Title>Proyectos</Title>

            <ProjectSection cathegories={pCath} names={names} descs={descs} links={links} imgs={imgs} altImgs={altImgs} />

            <Footer contact={contacts} link={contactLinks} lastPhrase={lastPhrase} imgLink={imgLink} />
        </div>
    );
}

export default App;
