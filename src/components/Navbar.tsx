import { oppositeTheme, useCurrentTheme } from "../theme";
import { ValidSiteData, Theme } from "../../declarations";
import { useState } from "react";
import { Link } from "react-router";
import "../styles/hamburgers.min.css";
import "../styles/navbar.css";
import LightTheme from "../assets/light-theme.svg";
import LightThemeWhite from "../assets/light-theme-white.svg";
import DarkTheme from "../assets/dark-theme.svg";
import DarkThemeWhite from "../assets/dark-theme-white.svg";

export default function Navbar({ data }: { data: ValidSiteData }) {
    const [theme, setTheme]: [Theme, Function] = useCurrentTheme();
    const [active, setActive] = useState(false);
    document.documentElement.setAttribute("data-bs-theme", theme);
    let themeImageSrc;
    if (data.brandColorIsDark) {
        switch (theme) {
            case "light":
                themeImageSrc = LightThemeWhite;
                break;
            default:
                themeImageSrc = DarkThemeWhite;
        }
    } else {
        switch (theme) {
            case "light":
                themeImageSrc = LightTheme;
                break;
            default:
                themeImageSrc = DarkTheme;
        }
    }
    return (
        <nav
            className={`navbar border-bottom border-1 border-dark mb-2 d-flex justify-content-between align-items-center ${
                theme === "dark" && "navbar-dark"
            } `}
            style={
                theme === "light"
                    ? { backgroundColor: data.brandColor }
                    : { backgroundColor: data.brandColorDark }
            }
        >
            <Link
                className={`navbar-brand px-2 text-${
                    data.brandColorIsDark ? "light" : "dark"
                }`}
                to="/"
            >
                {data.siteTitle}
            </Link>
            <span>
                <span>
                    <button
                        className="p-2 border border-0 bg-transparent"
                        id="theme-toggle"
                        type="button"
                        onClick={() => {
                            setTheme(oppositeTheme(theme));
                        }}
                        aria-label="Toggle theme"
                        title="Toggle theme"
                    >
                        <img
                            src={themeImageSrc}
                            className="d-inline"
                            alt={`${theme} theme`}
                        />
                    </button>
                </span>
                <button
                    className={`hamburger hamburger--spin ${
                        active ? "is-active" : ""
                    }`}
                    type="button"
                    onClick={() => setActive(!active)}
                    aria-label="Toggle navigation"
                    title="Toggle navigation"
                    aria-controls="navbarSupportedContent"
                    aria-expanded={active}
                    aria-haspopup="true"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                >
                    <span className="hamburger-box">
                        <span
                            className={`hamburger-inner hamburger-${
                                data.brandColorIsDark ? "light" : "dark"
                            }`}
                        ></span>
                    </span>
                </button>
            </span>
            <div
                className="collapse navbar-collapse border-top border-1 border-dark"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {Object.values(data.pages).map((page) => {
                        return (
                            page.withLink && (
                                <li className="nav-item" key={page.slug}>
                                    <Link
                                        className={`nav-link text-${
                                            data.brandColorIsDark
                                                ? "light"
                                                : "dark"
                                        }`}
                                        to={"/".concat(page.slug)}
                                    >
                                        {page.linkText || page.title}
                                    </Link>
                                </li>
                            )
                        );
                    })}
                    {data.customNavLinks?.map((link) => (
                        <li className="nav-item" key={link.href}>
                            <a
                                className={`nav-link text-${
                                    data.brandColorIsDark ? "light" : "dark"
                                }`}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
