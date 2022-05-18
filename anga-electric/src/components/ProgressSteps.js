import {Steps} from 'antd';
import {useState, useEffect, useContext} from 'react';
import {
    FormOutlined as Icon1,
    SelectOutlined as Icon2,
    ApiOutlined as Icon3,
    DashboardOutlined as Icon4,
} from '@ant-design/icons';
import {TextData} from '../App';

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
    return (
        <div style={{padding: '5% 0 5% 0', display: 'flex', justifyContent: 'center'}}>
            <div style={{width: '700px'}}>
                <Steps current={current} labelPlacement="vertical">
                    <Step status={statusList[0]} description={data.design.title} icon={<Icon1 />} />
                    <Step status={statusList[1]} description={data.procurment.title} icon={<Icon2 />} />
                    <Step status={statusList[2]} description={data.services.title} icon={<Icon3 />} />
                    <Step status={statusList[3]} description={data.debug.title} icon={<Icon4 />} />
                </Steps>
            </div>
        </div>
        
    );
}