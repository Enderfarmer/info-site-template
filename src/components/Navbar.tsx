import { oppositeTheme, useCurrentTheme } from "../theme.ts";
import { SiteData, Theme } from "../declarations";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hamburgers.min.css";
import "../styles/navbar.css";

export default function Navbar({ data }: { data: SiteData }) {
    const [theme, setTheme]: [Theme, Function] = useCurrentTheme();
    const [active, setActive] = useState(false);
    document.documentElement.setAttribute("data-bs-theme", theme);
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
            <Link className="navbar-brand px-2" to="/">
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
                            src={
                                data.brandColorIsDark || theme === "dark"
                                    ? `/${theme}-theme-white.svg`
                                    : `/${theme}-theme.svg`
                            }
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
                            className={`hamburger-inner ${
                                theme === "dark" && "bg-light"
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
                    {data.navLinks?.map((link, index) => (
                        <li className="nav-item" key={index}>
                            <Link className="nav-link" to={link.href}>
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
