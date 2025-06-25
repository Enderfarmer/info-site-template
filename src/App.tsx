import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import data from "./content.json";
import defaults from "./contentDefaults.json";
import { ThemeContext } from "./theme.ts";
import Wrapper from "./components/Wrapper.tsx";
import { SiteData } from "./declarations";
import "./index.css";
import Content from "./pages/Content.tsx";
import PageGen from "./pages/Page.tsx";

function App() {
    // loop through the possible site data and set defaults
    let dataSecond = data;
    Object.keys(defaults).forEach((key) => {
        dataSecond[key] = data[key] || defaults[key];
    });
    let validData: SiteData = dataSecond as SiteData;
    validData.pages?.forEach((page) => {
        page.withLink = page.withLink ?? true;
    });
    console.log("Valid Data:", validData);
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

export default App;
