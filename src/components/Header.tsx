import React, { useState } from "react";

interface Props {
    items: string[];

    onSelectItem: (item: string) => void;
}

function Header({ items, onSelectItem }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const message = () => {
        items.length === 0 && <h1>No header items found</h1>;
    };

    return (
        <div>
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    {items.map((item, index) => (
                        <li
                            className="nav-item px-3"
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
                            <a href="#" className={selectedIndex === index ? "nav-link active" : "nav-link"} key={item} aria-current="page">
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
