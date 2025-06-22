import { SiteData } from "../declarations";
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
            {component}
        </>
    );
}
