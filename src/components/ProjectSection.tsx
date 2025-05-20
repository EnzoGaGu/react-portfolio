import ProjectView from "./ProjectView";

interface Props {
    links: string[];
}

function ProjectSection({ links }: Props) {
    return links.map((n, index) => (
        <div key={index} className="mx-1 row mb-2">
            <ProjectView link={n} />
        </div>
    ));
}

export default ProjectSection;
