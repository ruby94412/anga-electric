import {
    useNavigate,
  } from "react-router-dom";
import {Button} from 'antd';
import './section.css';

export default ({
    title,
    icon,
    link,
}) => {
    const navigate = useNavigate();
    const iconOnClick = () => {
        navigate(`/${link}`);
    };
    return (
        <div>
            {icon({
                className: "icon"
            })}
            <h2>{title}</h2>
            <span>
                Offering a unique combination of 
                new and refurbished hardware with industry-leading
                warranties, we save you money while giving you peace of mind.
            </span>
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