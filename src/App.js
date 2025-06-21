import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import data from "./content.json";
import defaults from "./contentDefaults.json";

function App() {
    // loop through the possible site data and set defaults
    let validData = data;
    Object.keys(defaults).forEach((key) => {
        validData[key] = data[key] || defaults[key];
    });
    console.log("Valid Data:", validData);
    return (
        <HashRouter>
            <Routes>
                <Route index element={<Home data={validData} />} />
                {validData.pages.map((page) => (
                    <Route path={page.slug} element={page.content} />
                ))}
            </Routes>
        </HashRouter>
    );
}

export default App;
