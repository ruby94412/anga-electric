import { useRef, useState } from 'react';
import {Modal, Input, Button, Row, Col} from 'antd';
import emailjs from 'emailjs-com';
import ReactSimpleVerify from 'react-simple-verify'
import 'react-simple-verify/dist/react-simple-verify.css'


export const ContactUs = ({
    onCancel,
}) => {
    const form = useRef();
    const verify = useRef();
    const [verified, setVerfied] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_4b5tap9', 'template_7vfqtjk', form.current, 'A1nddP4q2n05ysh8f')
        .then(() => {
            Modal.success({
                title: '提交成功',
                content: '感谢您联系我们，您的留言对我们很重要，我们将尽快回复您！',
                onOk: () => {
                    onCancel();
                },
            });
        }, () => {
            Modal.error({
                title: '提交失败',
                content: '对不起提交失败，请在此尝试联系我们！'
            });
        })
        .finally(() => {
            verify.current.reset();
            setVerfied(false);
        });
    };
    const onVerficationComplete = () => {
        setVerfied(true);
    };
    return (
        <>
            <form ref={form}>
                <Row align="middle">
                    <Col span={6}><label>姓名/公司名称</label></Col>
                    <Col span={18} style={{padding: '10px'}}><Input name="user_name"/></Col>
                    <Col span={6}><label>联系方式</label></Col>
                    <Col span={18} style={{padding: '10px'}}><Input placeholder='手机或电子邮箱' name="user_email"/></Col>
                    <Col span={6}><label>留言</label></Col>
                    <Col span={18} style={{padding: '10px'}}><Input.TextArea rows={5} name="message"/></Col>
                </Row>
            </form>
            <Row>
                <Col span={24} style={{display: 'flex', justifyContent: 'center', padding: '10px'}}>
                    <ReactSimpleVerify success={onVerficationComplete} ref={verify} />
                </Col>
                <Col span={24} style={{display: 'flex', justifyContent: 'center', padding: '10px'}}>
                    <Button
                        type="primary"
                        onClick={sendEmail}
                        disabled={!verified}
                    >提交</Button>
                </Col>
            </Row>
                
                
        </>
    );
};

export default ContactUs;