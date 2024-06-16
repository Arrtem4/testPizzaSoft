// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import { BsPersonCircle } from "react-icons/bs";
// import { useState } from "react";

export default function Profile() {
    // const { id } = useParams();

    // const [name, setName] = useState(profile?.name || "");
    // const [birthday, setBirthday] = useState(profile?.birthday || "");
    // const [phone, setPhone] = useState(profile?.phone || "");
    // const [isArchive, setIsArchive] = useState(profile?.isArchive || false);
    // const [role, setRole] = useState(profile?.role || "all");

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
                    {/* <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    /> */}
                </section>
                <section className="profile-page_settings-element profile-page-phone"></section>
                <section className="profile-page_settings-element profile-page-date"></section>
                <section className="profile-page_settings-element profile-page-position"></section>
                <section className="profile-page_settings-element profile-page-archive"></section>
            </section>
        </section>
    );
}
