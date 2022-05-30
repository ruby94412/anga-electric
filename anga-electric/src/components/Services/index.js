/* eslint-disable import/no-anonymous-default-export */
import {useContext} from 'react';
import {Row, Col, Carousel, Image} from 'antd';
import ProgressSteps from '../ProgressSteps';
import {TextData} from '../../App';
import {getVerticalAlginText} from '../utilities';
import './services.css';
import services_1 from '../../images/services/services-carousel-1.jpeg';
import services_2 from '../../images/services/services-carousel-2.jpeg';
import services_3 from '../../images/services/services-carousel-3.jpeg';
import services_4 from '../../images/services/services-carousel-4.jpeg';

export default () => {
    const data = useContext(TextData);
    const {abstract, description} = data.services;
    return (
        <div>
            <div className="backgroundPanel-services">
                <ProgressSteps current={2} />
            </div>
            <Row justify="end">
                <Col
                    md={15}
                    xs={24}
                >
                    <Carousel className="carousel-panel-services" autoplay autoplaySpeed={3000}>
                        <div className="left-panel-services-text">
                            <h1>{abstract}</h1>
                            <span>{description}</span>
                        </div>
                        <div className="left-panel-services-image">
                            <Image width={550} src={services_1} />
                            {getVerticalAlginText()}
                        </div>
                        <div className="left-panel-services-image">
                            <Image width={550} src={services_2} />
                            {getVerticalAlginText()}
                        </div>
                        <div className="left-panel-services-image">
                            <Image width={550} src={services_3} />
                            {getVerticalAlginText()}
                        </div>
                        <div className="left-panel-services-image">
                            <Image width={550} src={services_4} />
                            {getVerticalAlginText()}
                        </div>
                    </Carousel>
                </Col>
                <Col md={9} xs={24} className="right-panel-services">
                </Col>
            </Row>
        </div>
    );
}