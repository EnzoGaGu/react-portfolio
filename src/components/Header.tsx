import React, { useState } from "react";
import "../css/Style.css";

interface Props {
    items: string[];

    onSelectItem: (item: string) => void;
}

function Header({ items, onSelectItem }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const message = () => {
        items.length === 0 && <h1>No header items found</h1>;
    };

    const navLinkProperties = "nav-link fw-bold fs-5 ";

    return (
        <div className="shadow-lg mb-5 white-background">
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills flex-column flex-lg-row">
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
                            onClick={() => {
                                onSelectItem(item);
                            }}
                        >
                            <a
                                href="#"
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
        </div>
    );
}

export default Header;
