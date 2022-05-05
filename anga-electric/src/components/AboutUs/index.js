import {Row, Col} from 'antd';
import './aboutus.css';

export default () => {
    return (
        <Row className="aboutUsPanel"  justify="space-around">
            <Col
                span={15}
                style={{maxWidth: '600px'}}
            >
                    <h1>They Prioritize Profits. We Prioritize YOU.</h1>
                    <h6>OEMs have spent decades convincing IT professionals that they’
                        re the only way to go. It isn’t true.</h6>
                    <span>We started Core 4 because we saw how OEMs pushed expensive
                         equipment and bulky service plans on customers and knew there was a better way. 
                         By leveraging our 25+ years of industry experience and wide network of hardware suppliers, 
                         we could create custom solutions to give customers exactly what they needed.
                            The culmination of this vision is our SmartCare maintenance program, Core 4 delivers best
                            -in-class custom solutions at value pricing. It’s a win-win.
                    </span>
            </Col>
            <Col span={9} className="rightPanel">
            </Col>
        </Row>
    );
};
