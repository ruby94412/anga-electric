import {useContext} from 'react';
import ProgressSteps from '../ProgressSteps';
import AboutUs from '../AboutUs';
import {TextData} from '../../App';
import './design.css'

export default () => {
    const data = useContext(TextData);
    return (
        <div>
            <div className="backgroundPanel">
                <p style={{fontSize: '50px'}}>asdfasdfasdf</p>
            </div>
            <ProgressSteps current={0} />
            <AboutUs title={data.design.abstract} description={data.design.description} />
        </div>
    );
}