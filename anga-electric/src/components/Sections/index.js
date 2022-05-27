/* eslint-disable import/no-anonymous-default-export */
import {useContext} from 'react';
import {Row, Col} from 'antd';
import {
    FormOutlined as Icon1,
    SelectOutlined as Icon2,
    ApiOutlined as Icon3,
    DashboardOutlined as Icon4,
} from '@ant-design/icons';
import Model from './Model';
import {TextData} from '../../App';
import './section.css';

export default () => {
    const data = useContext(TextData);
    const titles = [
        {
            title: data.design.title,
            icon: props => <Icon1 {...props} />,
            link: data.design.path,
            abstract: data.design.abstract,
            description: '让电尽享其能'
        },
        {
            title: data.procurment.title,
            icon: props => <Icon2 {...props} />,
            link: data.procurment.path,
            abstract: data.procurment.abstract,
            description: '成功案例'
        },
        {
            title: data.services.title,
            icon: props => <Icon3 {...props} />,
            link: data.services.path,
            abstract: data.services.abstract,
            description: '解决方案服务'
        },
        {
            title: data.debug.title,
            icon: props => <Icon4 {...props} />,
            link: data.debug.path,
            abstract: data.debug.abstract,
            description: 'When you’re ready to upgrade, we’re here to make the trans'
        },
    ];
    return (
        <Row className="section-panel" justify="space-around">
            {titles.map(element => (
                <Col
                    xl={6}
                    lg={12}
                    xs={24}
                    key={element.title}
                    style={{maxWidth: '400px'}}
                >
                    <Model {...element} />
                </Col>
            ))}
        </Row>
    );
}