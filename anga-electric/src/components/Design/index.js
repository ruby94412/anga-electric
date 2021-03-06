/* eslint-disable import/no-anonymous-default-export */
import {useContext} from 'react';
import {Row, Col, Carousel, Image} from 'antd';
import ProgressSteps from '../ProgressSteps';
import {TextData} from '../../App';
import {getVerticalAlginText} from '../utilities';
import './design.css';
import design_1 from '../../images/design/design-carousel-1.jpeg';
import design_2 from '../../images/design/design-carousel-2.jpeg';
import design_3 from '../../images/design/design-carousel-3.jpeg';

export default () => {
    const data = useContext(TextData);
    const {abstract, description} = data.design;
    return (
        <div>
            <div className="backgroundPanel-design">
                <ProgressSteps current={0} />
            </div>
            <Row justify="end">
                <Col
                    md={15}
                    xs={24}
                >
                    <Carousel className="carousel-panel" autoplay autoplaySpeed={3000}>
                        <div className="left-panel-design-text">
                            <h1>{abstract}</h1>
                            <span>{description}</span>
                        </div>
                        <div className="left-panel-design-image">
                            <Image width={600} src={design_1} />
                            {getVerticalAlginText()}
                        </div>
                        <div className="left-panel-design-image">
                            <Image width={600} src={design_2} />
                            {getVerticalAlginText()}
                        </div>
                        <div className="left-panel-design-image">
                            <Image width={600} src={design_3} />
                            {getVerticalAlginText()}
                        </div>
                    </Carousel>
                </Col>
                <Col md={9} xs={24} className="right-panel-design">
                </Col>
            </Row>
        </div>
    );
}