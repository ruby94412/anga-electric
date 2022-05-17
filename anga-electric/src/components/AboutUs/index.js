import {Row, Col, Button} from 'antd';
import './aboutus.css';


const defaultTitle = 'They Prioritize Profits. We Prioritize YOU.';
const defaultDescription = 'We started Core 4 because we saw how OEMs pushed expensive'
+ 'equipment and bulky service plans on customers and knew there was a better way. '
+ 'By leveraging our 25+ years of industry experience and wide network of hardware suppliers, '
+ 'we could create custom solutions to give customers exactly what they needed.'
+ 'The culmination of this vision is our SmartCare maintenance program, Core 4 delivers best'
+ '-in-class custom solutions at value pricing. It’s a win-win.'
export default ({
    title,
    description
}) => {
    return (
        <Row className="aboutUsPanel" justify="end">
            <Col md={9} xs={24} className="leftPanel">
            </Col>
            <Col
                md={15}
                xs={24}
                style={{padding: '5%'}}
                className="rightPanel"
            >
                <h1>{title || defaultTitle}</h1>
                <h6></h6>
                <span>{description || defaultDescription}</span>
                <div style={{marginTop: '20px'}}><Button type="primary">Learn More</Button></div>
            </Col>
        </Row>
    );
};
