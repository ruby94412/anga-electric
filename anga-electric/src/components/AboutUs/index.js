/* eslint-disable import/no-anonymous-default-export */
import {Row, Col, Typography} from 'antd';
import {useContext} from 'react';
import {TextData} from '../../App';
import {getHighlightedDataDisplay} from '../utilities';
import './aboutus.css';


const defaultTitle = '上海安家--您放心的选择';
// const defaultDescription = '一段简介介绍经营的范围、业务、产品、服务44一段简介介绍经营的范围、'
// + '业务、产品、服23务一段简介介绍经营的范围、业务、产品、服123务一段简介介绍经营的范围、业务、产品、服'
// + '务一段简介介绍经营的范围、业务、产品、服务一段简介介绍经营的435345范围、业务、产品、服务'
// const defaultData = '';

export default () => {
    const {Title} = Typography;
    const data = useContext(TextData);
    const {aboutUs} = data;
    

    return (
        <Row className="aboutUsPanel" justify="end">
            <Col md={9} xs={24} className="leftPanel">
            </Col>
            <Col
                md={15}
                xs={24}
                className="rightPanel-aboutUs"
            >
                <Title style={{color: 'white'}} level={2}>{defaultTitle}</Title>
                
                {aboutUs.description.map((item, index) => {
                    return (
                        <div key={index}>
                            {getHighlightedDataDisplay(item)}
                        </div>
                    );
                })}
            </Col>
        </Row>
    );
};
