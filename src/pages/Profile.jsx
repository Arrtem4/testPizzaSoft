import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { BsPersonCircle } from "react-icons/bs";
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

    console.log(profile);

    const editName = (event) => {
        const regex = /^[a-zA-Zа-яА-ЯёЁ\s]*$/;
        if (regex.test(event.target.value)) {
            setProfile({ ...profile, name: event.target.value });
        }
    };

    const editPhone = (event) => {
        setProfile({ ...profile, phone: event.target.value });
    };

    const editDate = (event) => {
        setProfile({ ...profile, birthday: event.target.value });
    };

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
                <section className="profile-page_settings-element name">
                    <p className="profile-page-titles">Name:</p>
                    <input
                        className="text-input"
                        type="text"
                        value={profile.name}
                        onChange={editName}
                    />
                </section>
                <section className="profile-page_settings-element phone">
                    <p className="profile-page-titles">Phone:</p>
                    <InputMask
                        mask="+7 (999) 999-99-99"
                        value={profile.phone}
                        onChange={editPhone}
                    >
                        {(inputProps) => (
                            <input
                                className="text-input"
                                {...inputProps}
                                type="phone"
                            />
                        )}
                    </InputMask>
                </section>
                <section className="profile-page_settings-element date">
                    <p className="profile-page-titles">Birthday:</p>
                    <InputMask
                        mask="99.99.9999"
                        value={profile.birthday}
                        onChange={editDate}
                    >
                        {(inputProps) => (
                            <input
                                {...inputProps}
                                className="text-input"
                                type="text"
                            />
                        )}
                    </InputMask>
                </section>
                <section className="profile-page_settings-element position"></section>
                <section className="profile-page_settings-element archive"></section>
            </section>
        </section>
    );
}
