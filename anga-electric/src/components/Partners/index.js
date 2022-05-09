import schneiderLogo from './logo1.png';
import abbLogo from './logo2.png';
import simensLogo from './logo3.png'
import {Row, Col} from 'antd';
import './brand.css';
export default () => {
    return (
        <Row style={{backgroundColor: '#364d79', color: 'white', padding: '20px 0 20px 0'}}>
            <Col style={{padding: '20px 0 20px 0'}} xxl={4} lg={8} xs={24}><img src={schneiderLogo} className="brand"/></Col>
            <Col style={{padding: '20px 0 20px 0'}} xxl={4} lg={8} xs={24}><img src={abbLogo} className="brand" /></Col>
            <Col style={{padding: '20px 0 20px 0'}} xxl={4} lg={8} xs={24}><img src={simensLogo} className="brand" /></Col>
            <Col style={{padding: '20px 0 20px 0'}} xxl={4} lg={8} xs={24}><img src={schneiderLogo} className="brand"/></Col>
            <Col style={{padding: '20px 0 20px 0'}} xxl={4} lg={8} xs={24}><img src={abbLogo} className="brand" /></Col>
            <Col style={{padding: '20px 0 20px 0'}} xxl={4} lg={8} xs={24}><img src={simensLogo} className="brand" /></Col>
        </Row>
    );
};