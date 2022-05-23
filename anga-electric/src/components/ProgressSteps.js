import {Steps, Progress, Row, Col} from 'antd';
import {useState, useEffect, useContext} from 'react';
import {
    FormOutlined as Icon1,
    SelectOutlined as Icon2,
    ApiOutlined as Icon3,
    DashboardOutlined as Icon4,
} from '@ant-design/icons';
import {TextData} from '../App';
import './progressStep.css'
const {Step} = Steps;
export default ({
    current,
}) => {
    const [statusList, setStatusList] = useState([]);
    const data = useContext(TextData);
    useEffect(() => {
        const temp = [];
        for (let i = 0; i < 4; i++) {
            if (current < i) {
                temp.push('wait');
            } else if (current > i) {
                temp.push('finish');
            } else {
                temp.push('progress');
            }
        }
        setStatusList(temp);
    }, []);
    const getCurrentPercentage = index => (current === index ? 60 : (current > index ? 100 : 0)); 
    return (
        <div className='progress-step-background'>
            <Row>
                <Col span={6}>
                    <Progress
                        type="circle"
                        percent={getCurrentPercentage(0)}
                        width={90}
                        style={{padding: '5px'}}
                        strokeColor="#3e3f42"
                        format={() => <Icon1 id={`progress-step-icon-1${0 <= current ? '-finished': ''}`} />}
                    />
                    <span style={{color: 0 <= current ? '#3e3f42' : 'white'}}>{data.design.title}</span>
                </Col>
                <Col span={6}>
                    <Progress
                        type="circle"
                        width={90}
                        percent={getCurrentPercentage(1)}
                        strokeColor="#3e3f42"
                        format={() => <Icon2 id={`progress-step-icon-2${1 <= current ? '-finished': ''}`} />}
                        style={{padding: '5px'}}
                    />
                    <span style={{color: 1 <= current ? '#3e3f42' : 'white'}}>{data.procurment.title}</span>
                </Col>
                <Col span={6}>
                    <Progress
                        type="circle"
                        percent={getCurrentPercentage(2)}
                        width={90}
                        strokeColor="#3e3f42"
                        format={() => <Icon3 id={`progress-step-icon-3${2 <= current ? '-finished': ''}`} />}
                        style={{padding: '5px'}}
                    />
                    <span style={{color: 2 <= current ? '#3e3f42' : 'white'}}>{data.services.title}</span>
                </Col>
                <Col span={6}>
                    <Progress
                        type="circle"
                        percent={getCurrentPercentage(3)}
                        width={90}
                        strokeColor="#3e3f42"
                        format={() => <Icon4 id={`progress-step-icon-4${3 <= current ? '-finished': ''}`} />}
                        style={{padding: '5px'}}
                    />
                    <span style={{color: 3 <= current ? '#3e3f42' : 'white'}}>{data.debug.title}</span>
                </Col>
                <Col span={24}>
                <Progress
                    strokeColor="#3e3f42"
                    type="line"
                    percent={(current + 1) * 25 - 1}
                    width={90}
                    format={() => ''}
                    style={{paddingLeft: '30px'}}
                />
                </Col>
            </Row>

        </div>
        
    );
}