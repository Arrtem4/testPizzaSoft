import { useParams } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { useEffect, useState } from "react";
import ScreenMessage from "../components/ScreenMessage";

export default function Profile() {
    const { id } = useParams();
    const [fetchStatus, setFetchStatus] = useState("loading");
    const [errorMessage, setErrorMessage] = useState("");
    const [profile, setProfile] = useState({});

    useEffect(() => {
        async function fetchDataProfile(id) {
            try {
                setFetchStatus("loading");
                const response = await fetch("/testPizzaSoft/employees.json");
                const data = await response.json();
                const profile = data.find((profile) => profile.id === +id);
                if (profile) {
                    setFetchStatus("");
                    setProfile(profile);
                } else {
                    throw new Error("Profile not found");
                }
            } catch (error) {
                setFetchStatus("error");
                setErrorMessage(error.message);
            }
        }
        fetchDataProfile(id);
    }, [id]);

    if (fetchStatus === "loading") {
        return <ScreenMessage text="Loading..." />;
    }
    if (fetchStatus === "error") {
        return <ScreenMessage text={errorMessage} />;
    }

    return (
        <section className="profile-page-wrapper">
            <section className="profile-page">
                <section className="profile-page-photo">
                    <BsPersonCircle className="profile-card-photo" />
                    <button disabled className="button button__profile_photo">
                        Upload
                    </button>
                </section>
                <section className="profile-page_settings-element profile-page-name">
                    <p className="profile-page-titles">Name</p>
                    <input
                        type="text"
                        value={profile.name}
                        onChange={(event) =>
                            setProfile({ ...profile, name: event.target.value })
                        }
                    />
                </section>
                <section className="profile-page_settings-element profile-page-phone"></section>
                <section className="profile-page_settings-element profile-page-date"></section>
                <section className="profile-page_settings-element profile-page-position"></section>
                <section className="profile-page_settings-element profile-page-archive"></section>
            </section>
        </section>
    );
}
