import Model from './Model';
import {Row, Col} from 'antd';
import {
    PoweroffOutlined as Icon1,
    TrophyOutlined as Icon2,
    PhoneOutlined as Icon3,
    LeftCircleOutlined as Icon4,
} from '@ant-design/icons';
import './section.css';

export default () => {
    const titles = [
        {title: '产品设备', icon: props => <Icon1 {...props} />, link: 'design', description: '让电尽享其能'},
        {title: '销售业绩', icon: props => <Icon2 {...props} />, link: 'procurement', description: '成功案例'},
        {title: '售后服务', icon: props => <Icon3 {...props} />, link: 'services',  description: '解决方案服务'},
        {title: 'Deposition', icon: props => <Icon4 {...props} />, link: 'deposition', description: 'When you’re ready to upgrade, we’re here to make the transition simple and budget friendly. We’ll buy the old to make way for the new.'},
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