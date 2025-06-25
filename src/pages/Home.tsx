import { Link } from "react-router-dom";
import { SiteData } from "../declarations";
import "../styles/Home.css";
export default function Home({ data }: { data: SiteData }) {
    return (
        <div>
            <div className="d-flex">
                <div className="w-50 d-flex flex-column justify-content-center align-items-center">
                    <h1
                        className="fw-bolder center"
                        id="hero-title"
                        dangerouslySetInnerHTML={{
                            __html: data.motto || data.siteTitle,
                        }}
                    ></h1>
                    <span>{data.siteDescription}</span>
                </div>
                <div className="w-50 p-2">
                    <img
                        src="/home-image.jpg"
                        alt="Eye-catcher"
                        className="w-100"
                    />
                </div>
            </div>
            <div>
                <ul>
                    {data.answeredQuestions?.map((question, index) => (
                        <li key={index}>{question}</li>
                    ))}
                </ul>
            </div>
            <div className="text-center">
                <Link to="all-content">Descover more content</Link>
            </div>
        </div>
    );
}
