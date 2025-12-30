import { ValidSiteData } from "../../declarations";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Wrapper({
    data,
    component,
}: {
    data: ValidSiteData;
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
