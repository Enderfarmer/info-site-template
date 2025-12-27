import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SiteData } from "../../declarations";

export default function Search({ data }: { data: SiteData }) {
    const searchParams = new URLSearchParams(useLocation().search);
    const query = searchParams.get("q") || "";
    const [searchQuery, setSearchQuery] = useState(query);
    return (
        <div>
            <h1>Search</h1>
            <div className="form-group w-50 d-inline-block me-3">
                <input
                    type="search"
                    id="search"
                    list="search-data"
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
            <datalist id="search-data">
                {data.pages?.map((page, index) => (
                    <option key={index} value={page.title}>
                        {page.title}
                    </option>
                ))}
            </datalist>
            <hr />
            <h2>Results for "{query}"</h2>
            {data.pages?.map((page, index) => {
                if (
                    page.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
                    return (
                        <div key={index} className="mb-3">
                            <h3>
                                <Link to={page.slug}>{page.title}</Link>
                            </h3>
                            <p>{page.description}</p>
                        </div>
                    );
            })}
        </div>
    );
}
