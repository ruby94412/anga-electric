import {Row, Col, Typography} from 'antd';
import {useContext} from 'react';
import {TextData} from '../../App';
import './aboutus.css';


const defaultTitle = '主标题还要想一想 10个字左右';
const defaultDescription = '一段简介介绍经营的范围、业务、产品、服务44一段简介介绍经营的范围、'
+ '业务、产品、服23务一段简介介绍经营的范围、业务、产品、服123务一段简介介绍经营的范围、业务、产品、服'
+ '务一段简介介绍经营的范围、业务、产品、服务一段简介介绍经营的435345范围、业务、产品、服务'
const defaultData = '';

export default () => {
    const {Title, Text} = Typography;
    const data = useContext(TextData);
    const {aboutUs} = data;
    const getSortedArray = s => {
        let i = 0;
        const rst = [];
        let cur = '';
        while (i < s.length) {
            if (!Number.isInteger(Number.parseInt(s.charAt(i)))) {
                cur += s.substring(i, ++i);
            }
            else {
                if (cur) {
                    rst.push({
                        text: cur,
                        isNumber: false,
                    });
                    cur = '';
                }
                while(Number.isInteger(Number.parseInt(s.charAt(i))) && i < s.length){
                    cur += s.substring(i, ++i);
                }
                rst.push({
                    text: cur,
                    isNumber: true,
                });
                cur = '';
            }
        }
        if (cur) {
            rst.push({
                text: cur,
                isNumber: false,
            });
        }
        return rst;
    };
    
    const getHighlightedDataDisplay = s => {
        const arr = getSortedArray(s);
        return (
            <>
                {
                    arr.map((item, index) => (
                        <Text
                            key={index}
                            className={item.isNumber ? 'numberText' : 'normalText'}
                            style={{color: 'white'}}
                        >
                                {item.text}
                        </Text>
                    ))
                }
            </>
        );
    };

    return (
        <Row className="aboutUsPanel" justify="end">
            <Col md={9} xs={24} className="leftPanel">
            </Col>
            <Col
                md={15}
                xs={24}
                className="rightPanel-aboutUs"
            >
                <Title style={{color: 'white'}}>{defaultTitle}</Title>
                
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
