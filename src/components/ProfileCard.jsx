import PropTypes from "prop-types";
import { BsPersonCircle } from "react-icons/bs";
export default function ProfileCard({ profile }) {
    return (
        <section className="profile-card">
            <BsPersonCircle className="profile-card-photo" />
            <section className="profile-card-info">
                <p className="profile-card-info-name">{profile.name}</p>
                <p className="profile-card-info-phone">{profile.phone}</p>
                <p className="profile-card-info-position">{profile.role}</p>
                <p className="profile-card-info-birthday">{profile.birthday}</p>
            </section>
        </section>
    );
}

ProfileCard.propTypes = {
    profile: PropTypes.object,
};
