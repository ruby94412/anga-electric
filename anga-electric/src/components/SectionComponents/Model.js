import {
    useNavigate,
  } from "react-router-dom";
import './section.css';

export default ({
    title,
    icon,
}) => {
    const navigate = useNavigate();
    const iconOnClick = () => {
        navigate('/design');
    };
    return (
        <div>
            <h2>{title}</h2>
            {icon({
                className: "icon",
                onClick: iconOnClick,
            })}
        </div>
    );
}