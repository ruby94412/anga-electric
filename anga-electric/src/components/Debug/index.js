/* eslint-disable import/no-anonymous-default-export */
import {useContext} from 'react';
import {Row, Col, Carousel, Image} from 'antd';
import ProgressSteps from '../ProgressSteps';
import {TextData} from '../../App';
import {getVerticalAlginText} from '../utilities';
import './debug.css';
import debug_1 from '../../images/debug/debug-carousel-1.jpeg';
import debug_2 from '../../images/debug/debug-carousel-2.jpeg';
import debug_3 from '../../images/debug/debug-carousel-3.jpeg';

export default () => {
    const data = useContext(TextData);
    const {abstract, description} = data.debug;
    return (
        <>
            <div className="backgroundPanel-debug">
                <ProgressSteps current={3} />
            </div>
            <Row justify="end">
                <Col
                    md={15}
                    xs={24}
                >
                    <Carousel className="carousel-panel" autoplay autoplaySpeed={3000}>
                        <div className="left-panel-debug-text">
                            <h1>{abstract}</h1>
                            <span>{description}</span>
                        </div>
                        <div className="left-panel-debug-image">
                            <Image width={600} src={debug_1} />
                            {getVerticalAlginText()}
                        </div>
                        <div className="left-panel-debug-image">
                            <Image width={600} src={debug_2} />
                            {getVerticalAlginText()}
                        </div>
                        <div className="left-panel-debug-image">
                            <Image width={600} src={debug_3} />
                            {getVerticalAlginText()}
                        </div>
                    </Carousel>
                </Col>
                <Col md={9} xs={24} className="right-panel-debug">
                </Col>
            </Row>
        </>
    );
}