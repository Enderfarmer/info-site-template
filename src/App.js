import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import data from "./content.json";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route index element={<Home data={data} />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
