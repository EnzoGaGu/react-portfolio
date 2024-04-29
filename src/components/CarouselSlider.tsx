import "../css/Style.css";
import ProgressBar from "react-bootstrap/ProgressBar";

interface Props {
    title: string;
    listItems: string[];
    progressNumbers: number[];
}

function CarouselSlider({ title, listItems, progressNumbers }: Props) {
    return (
        <div className="tech-list d-flex justify-content-center row p-5 white-background text-center text-xl-start rounded-3">
            <h1 className="text-body-emphasis text-center pb-3 px-0">{title}</h1>
            <div className="d-xl-block pb-3 col-xl-8 gap-4 col-10 px-5 pt-3">
                <ul className="p-0 px-5">
                    {listItems.map((item, index) => (
                        <div className="list-group-item d-block pb-5 lead" key={item}>
                            {item}

                            <ProgressBar className="d-flex align-self-end col-xl-12 mt-2" animated={true} now={progressNumbers[index]} variant="dark" />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CarouselSlider;
