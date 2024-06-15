import { useNavigate } from "react-router-dom";
export default function NotFound() {
    const navigate = useNavigate();

    return (
        <section className="not-found center">
            <section className="not-found-message center">
                <h1 className="not-found-message-title">Page not found</h1>
                <button
                    className="button button__not-found"
                    onClick={() => window.history.back()}
                >
                    Go back
                </button>
                <button
                    className="button button__not-found"
                    onClick={() => navigate("/")}
                >
                    Go main
                </button>
            </section>
        </section>
    );
}
