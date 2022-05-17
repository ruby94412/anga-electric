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
            <ProgressSteps current={2} />
            <AboutUs title={data.services.abstract} description={data.services.description} />
        </div>
    );
}