import {useContext} from 'react';
import ProgressSteps from '../ProgressSteps';
import AboutUs from '../AboutUs';
import {TextData} from '../../App';
import './design.css'

export default () => {
    const data = useContext(TextData);
    return (
        <div>
            <div className="backgroundPanel-services">
            </div>
            <ProgressSteps current={2} />
            <AboutUs {...data.services} />
        </div>
    );
}