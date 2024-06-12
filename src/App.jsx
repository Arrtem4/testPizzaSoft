import { Routes, Route, HashRouter } from "react-router-dom";
import List from "./pages/List";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <HashRouter>
            <section className="app">
                <Routes>
                    <Route path="/" element={<List />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </section>
        </HashRouter>
    );
}
