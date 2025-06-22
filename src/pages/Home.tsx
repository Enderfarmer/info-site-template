import Navbar from "../components/Navbar.tsx";
import { SiteData } from "../declarations";

export default function Home({ data }: { data: SiteData }) {
    return (
        <div>
            <Navbar data={data} />
            data.siteDescription + " " + data.siteTitle
        </div>
    );
}
