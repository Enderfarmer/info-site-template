import { Link } from "react-router-dom";
import { Page, SiteData } from "../declarations";
import "../styles/Home.css";
export default function Home({ data }: { data: SiteData }) {
    return (
        <div>
            <section className="d-flex">
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
            </section>
            <hr />
            <section>
                <h2>We answer these questions and more: </h2>
                <ul>
                    {data.answeredQuestions?.map((question, index) => (
                        <li key={index}>{question}</li>
                    ))}
                </ul>
                <Link to="all-content">Descover more content</Link>
            </section>
            <hr />
            <section>
                <h2>Dive in with those pages:</h2>
                <ul>
                    {data.startUpPages?.map((page, index) => {
                        const pageData: Page | undefined = data.pages.find(
                            (p) => p.title === page
                        );
                        if (!pageData) {
                            console.warn(
                                `Page with title "${page}" not found in data.pages`
                            );
                            return null;
                        }
                        return (
                            <li key={index}>
                                {
                                    <Link to={`/${pageData.slug}`}>
                                        {pageData.shortTitle || pageData.title}
                                    </Link>
                                }
                            </li>
                        );
                    })}
                </ul>
            </section>
        </div>
    );
}
