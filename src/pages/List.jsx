import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/slices/dataSlice";
import Header from "../components/Header";
import { useEffect } from "react";
export default function List() {
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.dataSlice);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchData());
        }
    }, [status, dispatch]);

    return (
        <section className="list">
            <Header />
            {status === "loading" && (
                <div className="list-loading">Loading...</div>
            )}
            {status === "failed" && (
                <div className="list-error">Error: {error}</div>
            )}
            {status === "succeeded" && (
                <section className="list-container"></section>
            )}
        </section>
    );
}
