import {
    useNavigate,
  } from "react-router-dom";
import {Menu} from 'antd';

const Header = () => {
    const navigate = useNavigate();
    const items = [
        { label: 'Home', key: ''},
        { label: 'Design', key: 'design' },
        { label: 'Procurement', key: 'procurement' },
        { label: 'Services', key: 'services' },
        { label: 'Deposition', key: 'deposition' },
    ];
    const onMenuClick = ({key}) => {
        navigate(`/${key}`);
    };
    return (
        <Menu items={items} mode="horizontal" onClick={onMenuClick}/>
    );
};

export default Header;