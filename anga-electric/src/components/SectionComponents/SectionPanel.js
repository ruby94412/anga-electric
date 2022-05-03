import Model from './Model';
import {Row, Col} from 'antd';
import {
    UpCircleOutlined as Icon1,
    DownCircleOutlined as Icon2,
    RightCircleOutlined as Icon3,
    LeftCircleOutlined as Icon4,
} from '@ant-design/icons';

export default () => {
    const titles = [
        {title: 'test1', icon: props => <Icon1 {...props} />},
        {title: 'test2', icon: props => <Icon2 {...props} />},
        {title: 'test3', icon: props => <Icon3 {...props} />},
        {title: 'test4', icon: props => <Icon4 {...props} />}
    ];
    return (
        <Row style={{backgroundColor: 'beige'}}>
            {titles.map(element => (
                <Col span={6} key={element.title}>
                    <Model {...element} />
                </Col>
            ))}
        </Row>
    );
}