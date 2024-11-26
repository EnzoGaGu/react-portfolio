import { useState } from "react";
import "../css/Style.css";
//import Switch from "./Switch.tsx";

interface Props {
    items: string[];

    onSelectItem: (item: string) => void;

    //checkHandle: boolean;
}

function Header({ items, onSelectItem /*checkHandle = false*/ }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const navLinkProperties = "nav-link fw-bold fs-5 ";

    //const response = () => console.log("Hello");

    const handleNavClick = (item: string) => {
        // Desplazamiento suave a la sección correspondiente
        onSelectItem(item);

        // Aquí puedes llamar a la lógica para desplazar el contenido si lo estás manejando
        const section = document.getElementById(item); // Asegúrate de que el id coincida
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="shadow-lg mb-5 white-background col-12 d-flex justify-content-center">
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills flex-column align-items-center flex-lg-row">
                    {items.map((item, index) => (
                        <li
                            className="nav-item px-xl-5 px-3"
                            key={item}
                            onMouseEnter={() => {
                                setSelectedIndex(index);
                            }}
                            onMouseLeave={() => {
                                setSelectedIndex(-1);
                            }}
                            onClick={() => handleNavClick(item)}
                        >
                            <a
                                href={"#" + item}
                                className={selectedIndex === index ? navLinkProperties + "active background-black" : navLinkProperties + "inactive"}
                                key={item}
                                aria-current="page"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </header>
            {/*<div className="d-flex justify-content-end">
                <Switch leftTag="Esp" rightTag="Eng" onChange={() => checkHandle} />
            </div>*/}
        </div>
    );
}

export default Header;
