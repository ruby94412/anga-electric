import {
    useNavigate,
  } from "react-router-dom";
import {Button} from 'antd';
import './section.css';

export default ({
    title,
    icon,
    link,
    abstract,
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
            <h2 className="title">{title}</h2>
            <span className="title" style={{fontSize: '15px'}}>{abstract}</span>
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