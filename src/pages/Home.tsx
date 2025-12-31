import { Link } from "react-router";
import { PageData, ValidSiteData } from "../../declarations";
import { useState } from "react";
import "../styles/Home.css";
import HomeImage from "../assets/home-image.jpg";
export default function Home({ data }: { data: ValidSiteData }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [imgSrc, setImgSrc] = useState("/home-image.jpg");
    return (
        <div>
            <section className="d-flex">
                <div className="w-50 d-flex flex-column justify-content-center align-items-center">
                    <h1 className="fw-bolder center" id="hero-title">
                        {data.motto || data.siteTitle}
                    </h1>
                    <span>{data.siteDescription}</span>
                </div>
                <div className="w-50 p-2">
                    <img
                        src={imgSrc}
                        onError={() => {
                            setImgSrc(HomeImage);
                        }}
                        alt="Eye-catcher image"
                        className="w-100"
                    />
                </div>
            </section>
            <br />
            <section>
                <div className="form-group w-50 d-inline-block me-3">
                    <input
                        type="search"
                        id="search"
                        list="searchdata"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="form-control"
                        placeholder="Search for content"
                    />
                </div>
                <Link
                    to={{ pathname: "/search", search: `?q=${searchQuery}` }}
                    className="d-inline-block"
                >
                    <button className="btn btn-primary p-2">Search</button>
                </Link>
                <datalist id="searchdata">
                    {Object.values(data.pages).map((page, index) => (
                        <option key={index} value={page.title}>
                            {page.title}
                        </option>
                    ))}
                </datalist>
            </section>
            <hr />
            <section>
                <h2>We answer these questions and more: </h2>
                <ul>
                    {data.answeredQuestions?.map((question, index) => (
                        <li key={index}>{question}</li>
                    ))}
                </ul>
                <Link to="all-content">Discover more content</Link>
            </section>
            <hr />
            <section>
                <h2>Dive in with those pages:</h2>
                <ul>
                    {data.startUpPages?.map((page, index) => {
                        const pageData: PageData | undefined = Object.values(
                            data.pages
                        ).find((p) => p.title === page);
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
