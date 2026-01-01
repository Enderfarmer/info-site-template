import ArrowBack from "../components/ArrowBack";
import { PageData } from "../../declarations";

export default function PageGen({
    page,
    data,
}: {
    page?: React.ReactElement;
    data: PageData;
}) {
    return (
        <div className="container mt-3">
            <ArrowBack />
            <h2>{data.title}</h2>
            <blockquote>
                {data.shortTitle || data.title} - {data.description}
            </blockquote>
            <hr />
            <br />
            {page || data.content}
        </div>
    );
}
