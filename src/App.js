import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import data from "./contentDefaults.json";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route index element={<Home data={data} />} />
                {data.pages.map((page) => (
                    <Route path={page.slug} element={page.content} />
                ))}
            </Routes>
        </HashRouter>
    );
}

export default App;
