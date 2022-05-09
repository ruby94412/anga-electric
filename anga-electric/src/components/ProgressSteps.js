import {Steps} from 'antd';
import {useState, useEffect} from 'react';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';

const {Step} = Steps;
export default ({
    current,
}) => {
    const [statusList, setStatusList] = useState([]);
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
    return (
        <div style={{width: '500px'}}>
            <Steps progressDot>
                <Step status={statusList[0]} description="Design" icon={<UserOutlined />} />
                <Step status={statusList[1]} description="Procurement" icon={<SolutionOutlined />} />
                <Step status={statusList[2]} description="Services" icon={<LoadingOutlined />} />
                <Step status={statusList[3]} description="Deposition" icon={<SmileOutlined />} />
            </Steps>
        </div>
    );
}