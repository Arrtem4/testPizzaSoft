export default function NotFound() {
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
            </section>
        </section>
    );
}
