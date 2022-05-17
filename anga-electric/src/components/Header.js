import {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {Menu} from 'antd';
import {TextData} from '../App';
const Header = () => {
    const data = useContext(TextData);
    const navigate = useNavigate();
    const items = [
        { label: '主页', key: ''},
        { label: data.design.title, key: data.design.path },
        { label: data.procurment.title, key: data.procurment.path },
        { label: data.services.title, key: data.services.path },
        { label: data.debug.title, key: data.debug.path },
    ];
    const onMenuClick = ({key}) => {
        navigate(`/${key}`);
    };
    return (
        <Menu items={items} mode="horizontal" onClick={onMenuClick}/>
    );
};

export default Header;