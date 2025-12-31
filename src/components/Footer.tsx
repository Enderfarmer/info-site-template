import { SocialMediaName, ValidSiteData } from "../../declarations.d";
import { useCurrentTheme } from "../theme";
import YouTubeLogo from "../assets/youtube.png";
import XLogo from "../assets/x.png";
import InstaLogo from "../assets/instagram.png";
import TelegramLogo from "../assets/telegram.svg";
import FaceBookLogo from "../assets/facebook.png";

export default function Footer({ data }: { data: ValidSiteData }) {
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
                            {Object.entries<string>(
                                data.socialMedia as { [s: string]: string }
                            ).map(([key, value]) => {
                                let imageSrc = YouTubeLogo;
                                switch (key) {
                                    case "youtube":
                                        break;
                                    case "x":
                                        imageSrc = XLogo;
                                        break;
                                    case "telegram":
                                        imageSrc = TelegramLogo;
                                        break;
                                    case "instagram":
                                        imageSrc = InstaLogo;
                                        break;
                                    case "facebook":
                                        imageSrc = FaceBookLogo;
                                        break;
                                    default:
                                        imageSrc = null;
                                }
                                return (
                                    <a
                                        className="p-2 m-3"
                                        key={key}
                                        href={value}
                                    >
                                        <img
                                            src={imageSrc}
                                            alt={key}
                                            width={40}
                                        />
                                    </a>
                                );
                            })}
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
