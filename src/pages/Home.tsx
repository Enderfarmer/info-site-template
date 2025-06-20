import { SiteData } from "../declarations";

export default function Home({ data }: { data: SiteData }) {
    return data.siteDescription + " " + data.siteTitle;
}
