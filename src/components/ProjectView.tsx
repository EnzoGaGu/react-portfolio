import useSWR from "swr";
import { formatDate } from "../utils/dateTimeUtils";

interface Props {
    link: string;
}

const fetcher = (url: string) =>
    fetch(url, {
        headers: { Accept: "application/vnd.github.v3+json" },
    }).then((res) => {
        if (!res.ok) throw new Error("Error al obtener datos de GitHub");
        return res.json();
    });

function ProjectView({ link }: Props) {
    const { data, error, isLoading } = useSWR(link, fetcher);
    if (error) return error.message;
    if (isLoading || !data) return isLoading;

    if (data) {
        console.log(data);
    }

    const textSection = () => (
        <div className="col p-4 d-flex flex-column position-static">
            <div className="col d-flex flex-row justify-content-between">
                <h3 className="mb-0">{data.name}</h3>
                <strong className="d-inline-block mb-2 ml-5 text-primary-emphasis text-end">{data.language}</strong>
            </div>
            <strong className="d-inline-block mb-2 ml-5 text-secondary">{formatDate(data.updated_at)}</strong>

            <p className="card-text">{data.description}</p>
            <a href={data.html_url} className="icon-link gap-1 icon-link-hover stretched-link">
                {" "}
                Abrir{" "}
            </a>
        </div>
    );

    const positionSelection = () => {
        return (
            <div className="row g-0 shadow-lg border white-background rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                {textSection()}
            </div>
        );
    };

    return <div>{positionSelection()}</div>;
}

export default ProjectView;
