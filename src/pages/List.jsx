import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/slices/dataSlice";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";

export default function List() {
    const dispatch = useDispatch();
    const { profilesList, status, error } = useSelector(
        (state) => state.dataSlice
    );

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
                <section className="list-container">
                    {profilesList.map((profile) => (
                        <ProfileCard key={profile.id} profile={profile} />
                    ))}
                </section>
            )}
        </section>
    );
}
