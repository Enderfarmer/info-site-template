import { Link } from "react-router-dom";
import { SiteData } from "../../declarations";

export default function Content({ data }: { data: SiteData }) {
    return (
        <div className="container">
            <h2>{data.siteTitle} content</h2>
            <div className="row">
                {data.pages.map((page, index) => (
                    <div key={index} className="col-md-4 mb-4 mx-2">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{page.title}</h5>
                                <p className="card-text">{page.description}</p>
                                {page.withLink && (
                                    <Link
                                        to={`/${page.slug}`}
                                        className="btn btn-primary"
                                    >
                                        Read more
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
