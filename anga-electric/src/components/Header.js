/* eslint-disable no-empty-pattern */
import {
    useContext,
    useState,
    forwardRef,
    useImperativeHandle
} from 'react';
import {useNavigate} from "react-router-dom";
import {Menu, Modal} from 'antd';
import {TextData} from '../App';
import Contact from './Contact';
const Header = forwardRef(({}, ref) => {
    const [visible, setVisible] = useState(false);
    const data = useContext(TextData);
    const navigate = useNavigate();
    const items = [
        { label: '主页', key: ''},
        { label: data.design.title, key: data.design.path },
        { label: data.procurment.title, key: data.procurment.path },
        { label: data.services.title, key: data.services.path },
        { label: data.debug.title, key: data.debug.path },
        { label: '联系我们', key: 'contact'}
    ];
    useImperativeHandle(ref, () => ({
        openModal: () => {setVisible(true);}
    }));
    const onMenuClick = ({key}) => {
        if (key !== 'contact') {
            navigate(`/${key}`);
        } else {
            setVisible(true);
        }
    };
    const onCancel = () => {
        setVisible(false);
    }
    return (
        <div>
            <Menu items={items} mode="horizontal" onClick={onMenuClick}/>
            <Modal
                visible={visible}
                closable
                centered
                onCancel={onCancel}
                footer={null}
                title="联系我们"
            >
                <Contact onCancel={onCancel} />
            </Modal>
        </div>
    );
});

export default Header;