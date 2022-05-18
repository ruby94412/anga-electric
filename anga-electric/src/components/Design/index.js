import {useContext} from 'react';
import ProgressSteps from '../ProgressSteps';
import AboutUs from '../AboutUs';
import {TextData} from '../../App';
import './design.css'

export default () => {
    const data = useContext(TextData);
    return (
        <div>
            <div className="backgroundPanel-design">
            </div>
            <ProgressSteps current={0} />
            <AboutUs {...data.design} />
        </div>
    );
}