import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import data from "./content.json";
import defaults from "./contentDefaults.json";
import { ThemeContext } from "./theme.ts";
import Wrapper from "./components/Wrapper.tsx";
import { SiteData } from "./declarations";

function App() {
    // loop through the possible site data and set defaults
    let validData: SiteData = data;
    Object.keys(defaults).forEach((key) => {
        validData[key] = data[key] || defaults[key];
    });
    console.log("Valid Data:", validData);
    return (
        <ThemeContext.Provider value={localStorage.getItem("theme") || "light"}>
            <HashRouter>
                <Routes>
                    <Route index element={<Home data={validData} />} />
                    {validData.pages?.map((page) => (
                        <Route
                            element={
                                <Wrapper
                                    data={validData}
                                    component={page.content}
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
