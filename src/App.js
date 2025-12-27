import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "info-site-generator/src/pages/Home.tsx";
import defaults from "info-site-generator/src/contentDefaults.json";
import { ThemeContext } from "info-site-generator/src/theme.ts";
import Wrapper from "info-site-generator/src/components/Wrapper.tsx";
import { SiteData } from "info-site-generator/declarations";
import "./index.css";
import Content from "info-site-generator/src/pages/Content.tsx";
import PageGen from "info-site-generator/src/pages/Page.tsx";
import Search from "info-site-generator/src/pages/Search.tsx";

/**
 * The info site generator
 * @param {SiteData} data The data of the site in SiteData format
 * @returns A ready app based on the data provided
 */
function SiteGen({ data }) {
    // loop through the possible site data and set defaults
    let dataSecond = data;
    Object.keys(defaults).forEach((key) => {
        dataSecond[key] = data[key] || defaults[key];
    });
    let validData = dataSecond;
    validData.pages?.forEach((page) => {
        page.withLink = page.withLink ?? true;
        // page.withLink = page.withLink === undefined ? false : page.withLink;
    });
    return (
        <ThemeContext.Provider value={localStorage.getItem("theme") || "light"}>
            <HashRouter>
                <Routes>
                    <Route
                        index
                        element={
                            <Wrapper
                                data={validData}
                                component={<Home data={validData} />}
                            />
                        }
                    />
                    <Route
                        path="all-content"
                        element={
                            <Wrapper
                                data={validData}
                                component={<Content data={validData} />}
                            />
                        }
                    />
                    <Route
                        path="search"
                        element={
                            <Wrapper
                                data={validData}
                                component={<Search data={validData} />}
                            />
                        }
                    />
                    {validData.pages?.map((page) => (
                        <Route
                            element={
                                <Wrapper
                                    data={validData}
                                    component={<PageGen page={page} />}
                                />
                            }
                            path={page.slug}
                        />
                    ))}
                </Routes>
            </HashRouter>
        </ThemeContext.Provider>
    );
}

export default SiteGen;
