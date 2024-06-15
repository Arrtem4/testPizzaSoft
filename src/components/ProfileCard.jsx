import PropTypes from "prop-types";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
export default function ProfileCard({ profile }) {
    const navigate = useNavigate();
    return (
        <section
            className="profile-card"
            onClick={() => navigate(`profile/${profile.id}`)}
        >
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
