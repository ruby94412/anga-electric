import Model from './Model';
import {Row, Col} from 'antd';
import {
    UpCircleOutlined as Icon1,
    DownCircleOutlined as Icon2,
    RightCircleOutlined as Icon3,
    LeftCircleOutlined as Icon4,
} from '@ant-design/icons';
import './section.css';

export default () => {
    const titles = [
        {title: 'Design', icon: props => <Icon1 {...props} />, link: 'design'},
        {title: 'Procurement', icon: props => <Icon2 {...props} />, link: 'procurement'},
        {title: 'Services', icon: props => <Icon3 {...props} />, link: 'services'},
        {title: 'Deposition', icon: props => <Icon4 {...props} />, link: 'deposition'},
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