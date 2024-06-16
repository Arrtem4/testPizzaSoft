import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function ScreenMessage({ text = "" }) {
    const navigate = useNavigate();
    return (
        <section className="screen-message">
            <p className="screen-message-text">{text}</p>;
            <button
                className="button button__message"
                onClick={() => navigate("/")}
            >
                Go main
            </button>
        </section>
    );
}

ScreenMessage.propTypes = {
    text: PropTypes.string,
};
