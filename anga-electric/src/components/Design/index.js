import {Steps} from 'antd';
import ProgressSteps from '../ProgressSteps';
import AboutUs from '../AboutUs'
import './design.css'

export default () => {
    return (
        <div>
            <div className="backgroundPanel">
                <p style={{fontSize: '50px'}}>asdfasdfasdf</p>
            </div>
            <ProgressSteps current={0} />
            <AboutUs />
        </div>
    );
}