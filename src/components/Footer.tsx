import "../css/Style.css";
import Title from "./Title";

interface Props {
    contact: string[];
    link: string[];
    lastPhrase: string;
    imgLink: string[];
}

function Footer({ contact, link, lastPhrase, imgLink }: Props) {
    return (
        <div className="white-background">
            <Title>Contacto</Title>
            <footer className="pb-5 pt-4 mb-0 mt-0 white-background">
                <ul className="nav justify-content-evenly border-bottom pb-3 mb-3">
                    {contact.map((cont, index) => (
                        <li className="nav-item">
                            <div className="list-group-item lead">
                                <a href={link[index]} className="d-lg-inline-flex flex-lg-row d-flex flex-column align-items-center justify-content-center">
                                    <span className="d-inline-flex align-items-center justify-content-center text-white rounded-circle m-1 me-2 footer-style">
                                        <div>
                                            <img src={imgLink[index]}></img>
                                        </div>
                                    </span>
                                    {cont}
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
                <p className="text-center text-body-secondary">{lastPhrase}</p>
            </footer>
        </div>
    );
}

export default Footer;
