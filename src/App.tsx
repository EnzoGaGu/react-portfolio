import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

document.body.style.backgroundColor = "#bfcfe7";

function App() {
    const [count, setCount] = useState(0);

    let navBarOptions = ["Presentación", "Conocimientos", "Proyectos", "¡Contáctame!"];

    const handleNavBarClick = console.log("Me gusta el pan");

    return (
        <div>
            <Header items={navBarOptions} onSelectItem={() => handleNavBarClick} />
            <Hero />
            <h1>Hello, you MF</h1>
        </div>
    );
}

export default App;
