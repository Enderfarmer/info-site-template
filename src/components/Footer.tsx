import { SiteData } from "../declarations";
import { useCurrentTheme } from "../theme.ts";

export default function Footer({ data }: { data: SiteData }) {
    const [theme] = useCurrentTheme();
    return (
        <footer
            className="bg-gray-800 text-white py-4 m-0"
            style={
                theme === "light"
                    ? { backgroundColor: data.brandColor }
                    : { backgroundColor: data.brandColorDark }
            }
        >
            <div className="container mx-auto">
                <h3>{data.siteTitle}</h3>
                <p className="sm">{data.siteDescription}</p>
                {data.socialMedia && (
                    <div>
                        Follow us on <br />
                        <ul className="d-flex flex-wrap w-100 mw-100 list-unstyled link-underline-opacity-0 link-underline-opactiy-100">
                            {Object.entries(data.socialMedia).map(
                                ([key, value]) => (
                                    <li className="p-2 m-3" key={key}>
                                        {value.image && value.imageDark && (
                                            <img
                                                src={
                                                    theme === "light"
                                                        ? value.image
                                                        : value.imageDark
                                                }
                                                alt={key}
                                            />
                                        )}
                                        <a href={value.href} className="p-1">
                                            {key}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                )}
                <div className="text-center">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </div>
            </div>
        </footer>
    );
}
