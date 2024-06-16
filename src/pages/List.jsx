import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataProfiles } from "../redux/slices/profilesDataSlice";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";

export default function List() {
    const dispatch = useDispatch();
    const { profilesList, status, error } = useSelector(
        (state) => state.profilesDataSlice
    );
    const roleFilter = useSelector((state) => state.profilesDataSlice.filters.role);
    const isArchiveFilter = useSelector(
        (state) => state.profilesDataSlice.filters.isArchive
    );

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchDataProfiles());
        }
    }, [status, dispatch]);

    const filteredProfiles = profilesList.filter((item) => {
        const roleMatch = roleFilter === "all" || item.role === roleFilter;
        const isArchiveMatch =
            isArchiveFilter === true || item.isArchive === isArchiveFilter;
        return roleMatch && isArchiveMatch;
    });

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
                    {filteredProfiles.map((profile) => (
                        <ProfileCard key={profile.id} profile={profile} />
                    ))}
                </section>
            )}
        </section>
    );
}
