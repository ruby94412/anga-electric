/* eslint-disable import/no-anonymous-default-export */
import {useContext} from 'react';
import {Row, Col, Carousel, Image} from 'antd';
import ProgressSteps from '../ProgressSteps';
import {TextData} from '../../App';
import {getVerticalAlginText} from '../utilities';
import './procurement.css';
import procurement_1 from '../../images/procurement/procurement-carousel-1.jpeg';
import procurement_2 from '../../images/procurement/procurement-carousel-2.jpeg';
import procurement_3 from '../../images/procurement/procurement-carousel-3.jpeg';

export default () => {
    const data = useContext(TextData);
    const {abstract, description} = data.procurment;
    return (
        <div>
            <div className="backgroundPanel-procurement">
                <ProgressSteps current={1} />
            </div>
            <Row>
                <Col
                    md={15}
                    xs={24}
                >
                    <Carousel className="carousel-panel">
                        <div className="left-panel-procurement-text" autoplay autoplaySpeed={3000}>
                            <h1>{abstract}</h1>
                            <span>{description}</span>
                        </div>
                        <div className="left-panel-procurement-image">
                            <Image width={550} src={procurement_1} />
                            {getVerticalAlginText()}
                        </div>
                        <div className="left-panel-procurement-image">
                            <Image width={550} src={procurement_2} />
                            {getVerticalAlginText()}
                        </div>
                        <div className="left-panel-procurement-image">
                            <Image width={550} src={procurement_3} />
                            {getVerticalAlginText()}
                        </div>
                    </Carousel>
                </Col>
                <Col md={9} xs={24} className="right-panel-procurement">
                </Col>
            </Row>
        </div>
    );
}