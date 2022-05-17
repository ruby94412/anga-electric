import Introduction from '../components/Introduction';
import SectionPanel from '../components/Sections';
import AboutUs from '../components/AboutUs';
import Partners from '../components/Partners';
import Email from '../components/Contact';
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