interface Props {
    cathegory: string;
    name: string;
    desc: string;
    link: string;
    img: string;
    altImg: string;
    position: "left" | "right";
}

function ProjectView({ cathegory, name, desc, link, img, altImg, position }: Props) {
    const textSection = () => (
        <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary-emphasis text-end">{cathegory}</strong>
            <h3 className="mb-3">{name}</h3>

            <p className="card-text">{desc}</p>
            <a href={link} className="icon-link gap-1 icon-link-hover stretched-link">
                {" "}
                Abrir{" "}
            </a>
        </div>
    );

    const imageSection = () => {
        return (
            <div className="col-auto d-none d-xl-block">
                <img src={img} alt={altImg} width="200px" className="project-images" height="250px" />
            </div>
        );
    };
    const positionSelection = () => {
        if (position === "left") {
            console.log(position);
            return (
                <div className="row g-0 shadow-lg border white-background rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    {textSection()}
                    {imageSection()}
                </div>
            );
        } else {
            console.log(position);
            return (
                <div className="row g-0 shadow-lg border white-background rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    {imageSection()}
                    {textSection()}
                </div>
            );
        }
    };

    return <div className="col-md-6">{positionSelection()}</div>;
}

export default ProjectView;
