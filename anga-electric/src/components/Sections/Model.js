import {
    useNavigate,
  } from "react-router-dom";
import {Button} from 'antd';
import './section.css';

export default ({
    title,
    icon,
    link,
    description,
}) => {
    const navigate = useNavigate();
    const iconOnClick = () => {
        navigate(`/${link}`);
    };
    return (
        <div style={{paddingTop: '20px', paddingBottom: '20px', color: '#0e360d'}}>
            {icon({
                className: "icon"
            })}
            <h2 style={{color: '#0e360d'}}>{title}</h2>
            <span>{description}</span>
            <div>
                <Button
                    type="primary"
                    icon={icon()}
                    onClick={iconOnClick}
                    style={{marginTop: '20px'}}
                >learn more</Button>
            </div>
        </div>
    );
}