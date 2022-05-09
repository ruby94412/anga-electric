import {Steps} from 'antd';
import ProgressSteps from '../ProgressSteps';
import './design.css'

const {Step} = Steps;
export default () => {
    return (
        <div>
            <div className="backgroundPanel">
                <p style={{fontSize: '50px'}}>asdfasdfasdf</p>
            </div>
            <ProgressSteps current={0} />
        </div>
    );
}