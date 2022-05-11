import Introduction from '../components/Introduction';
import SectionPanel from '../components/Sections';
import AboutUs from '../components/AboutUs';
import Partners from '../components/Partners';
import Email from '../components/Email';
export default () => {
    return (
        <div>
            <Introduction />
            <SectionPanel />
            <AboutUs />
            <Partners />
            <Email />
        </div>
    );
};