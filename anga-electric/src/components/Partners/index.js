/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import schneiderLogo from '../../images/partners/logo-schneider.png';
import abbLogo from './../../images/partners/logo-abb.png';
import siemensLogo from '../../images/partners/logo-siemens.png';
import qrCode from '../../images/partners/qrCode.png';
import {Row, Col} from 'antd';
import './brand.css';
export default () => {
    return (
        <Row className="footer-panel-background">
            <Col lg={12} sm={24}>
                <Row>
                    <Col span={24} className="brand-title">我们的合作伙伴</Col>
                    <Col style={{padding: '20px 0 20px 0'}} lg={8} xs={24}><img src={schneiderLogo} className="brand"/></Col>
                    <Col style={{padding: '20px 0 20px 0'}} lg={8} xs={24}><img src={abbLogo} className="brand" /></Col>
                    <Col style={{padding: '20px 0 20px 0'}} lg={8} xs={24}><img src={siemensLogo} className="brand" /></Col>
                </Row>
            </Col>
            <Col lg={12} sm={24}>
                <Row>
                    <Col lg={16} xs={24} style={{paddingTop: '50px'}}>
                        <span>联系电话：021-64595968</span><br></br>
                        <span>门市地址：上海市青浦区北青公路6598号F1-113号</span>
                    </Col>
                    <Col lg={8} xs={24}><img src={qrCode} className="qrCode" /></Col>
                </Row>
            </Col>
        </Row>
    );
};