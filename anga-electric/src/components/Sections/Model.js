import {
    useNavigate,
  } from "react-router-dom";
import {RightCircleOutlined} from '@ant-design/icons';  
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
        <div style={{paddingTop: '20px', paddingBottom: '20px', color: '#204619'}}>
            {icon({
                className: "icon",
                onClick: iconOnClick,
            })}
            <h2 className="title">{title}</h2>
            <span className="title" style={{fontSize: '15px'}}>{abstract}</span>
            <div>
                <Button
                    type="primary"
                    icon={<RightCircleOutlined />}
                    onClick={iconOnClick}
                    style={{marginTop: '20px'}}
                >了解更多</Button>
            </div>
        </div>
    );
}