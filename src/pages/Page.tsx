import ArrowBack from "../components/ArrowBack.tsx";
import { Page } from "../../declarations";

export default function PageGen({ page }: { page: Page }) {
    return (
        <div className="container mt-3">
            <ArrowBack />
            <h2>{page.title}</h2>
            <blockquote>
                {page.shortTitle || page.title} - {page.description}
            </blockquote>
            <hr />
            <br />
            {page.content || page}
        </div>
    );
}
