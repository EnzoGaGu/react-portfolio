import ProjectView from "./ProjectView";

interface Props {
    cathegories: string[];
    names: string[];
    descs: string[];
    links: string[];
    imgs: string[];
    altImgs: string[];
}

function ProjectSection({ cathegories, names, descs, links, imgs, altImgs }: Props) {
    let position: "left" | "right";

    function listViews(index: number, position: "left" | "right") {
        if (index % 2 === 0) {
            position = "left";
        } else {
            console.log(position);
            position = "right";
            console.log(position);
        }
        return position;
    }
    return (
        <div className="mx-1 row mb-2">
            {names.map((n, index) => (
                <ProjectView
                    key={n}
                    cathegory={cathegories[index]}
                    name={n}
                    desc={descs[index]}
                    link={links[index]}
                    img={imgs[index]}
                    altImg={altImgs[index]}
                    position={(position = listViews(index, position))}
                />
            ))}
        </div>
    );
}

export default ProjectSection;
