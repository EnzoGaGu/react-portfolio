import { useState } from "react";
import CarouselSlider from "./CarouselSlider";
import "../css/Style.css";

interface Props {
    listItemsList: string[][];
    listProgressList: number[][];
    sliderTitles: string[];
}

function Carousel({ listItemsList, listProgressList, sliderTitles }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    function sumIndex() {
        if (selectedIndex > 1) {
            setSelectedIndex(0);
        } else {
            var numb: number = selectedIndex + 1;
            setSelectedIndex(numb);
        }
    }

    function restIndex() {
        if (selectedIndex < 1) {
            setSelectedIndex(2);
        } else {
            var numb: number = selectedIndex - 1;
            setSelectedIndex(numb);
        }
    }

    return (
        <div id="myCarousel" className="carousel slide mb-5 shadow-lg" data-bs-ride="carousel">
            <div className="carousel-inner">
                {listItemsList.map((list, index) => (
                    <div className={selectedIndex === index ? "carousel-item active" : "carousel-item"}>
                        <div className="container carousel-background">
                            <CarouselSlider title={sliderTitles[index]} listItems={list} progressNumbers={listProgressList[index]}></CarouselSlider>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev button-background justify-content-lg-start ps-lg-4"
                onClick={restIndex}
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button
                className="carousel-control-next justify-content-lg-end pe-lg-4 button-background"
                onClick={sumIndex}
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;
