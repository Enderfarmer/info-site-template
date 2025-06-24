import { SiteData } from "../declarations";

export default function Home({ data }: { data: SiteData }) {
    return (
        <div className="d-flex">
            <div className="container w-50">
                <h1 className="text-info">{data.siteTitle}</h1>
            </div>
            <div></div>
        </div>
    );
}
