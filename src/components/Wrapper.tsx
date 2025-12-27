import { SiteData } from "../../declarations";
import Footer from "./Footer.tsx";
import Navbar from "./Navbar.tsx";

export default function Wrapper({
    data,
    component,
}: {
    data: SiteData;
    component: any;
}) {
    return (
        <>
            <Navbar data={data} />
            <div className="container" id="all-content">
                {component}
            </div>
            <Footer data={data} />
        </>
    );
}
