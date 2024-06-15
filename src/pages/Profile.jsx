import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsPersonCircle } from "react-icons/bs";

export default function Profile() {
    const { id } = useParams();

    const profile = useSelector((state) => state.dataSlice.profilesList).find(
        (el) => el.id === +id
    );

    return (
        <section className="profile-wrapper">
            <section className="profile">
                <BsPersonCircle className="profile-card-photo" />
            </section>
        </section>
    );
}
