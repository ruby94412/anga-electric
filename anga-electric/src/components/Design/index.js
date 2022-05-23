import {useContext} from 'react';
import {Row, Col, Carousel} from 'antd';
import ProgressSteps from '../ProgressSteps';
import {TextData} from '../../App';
import './design.css';
import test1 from '../test1.jpg';
import test2 from '../test2.jpeg';
import test3 from '../test3.jpeg';

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
                    <Carousel autoplay>
                        <div className="rightPanel-design">
                            <h1>{abstract}</h1>
                            <h6></h6>
                            <span>{description}</span>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <img src={test1} width={400} height={400}/>
                        </div>
                        <div>
                            <img src={test2} width={400} height={400}/>
                        </div>
                        <div>
                            <img src={test3} width={400} height={400}/>
                        </div>
                    </Carousel>
                </Col>
                <Col md={9} xs={24} className="leftPanel-design">
                </Col>
            </Row>
        </div>
    );
}