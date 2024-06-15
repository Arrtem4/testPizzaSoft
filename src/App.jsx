import { Routes, Route, BrowserRouter } from "react-router-dom";
import List from "./pages/List";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <section className="app">
            <BrowserRouter basename="testPizzaSoft">
                <Routes>
                    <Route path="/" index element={<List />}></Route>
                    <Route path="/profile/:id" element={<Profile />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </section>
    );
}
