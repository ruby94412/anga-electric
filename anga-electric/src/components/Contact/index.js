import { useRef, useState } from 'react';
import {Form, Input, Button} from 'antd';
import emailjs from 'emailjs-com';
import ReactSimpleVerify from 'react-simple-verify'
import 'react-simple-verify/dist/react-simple-verify.css'


export const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
        // emailjs.sendForm('service_4b5tap9', 'template_7vfqtjk', form.current, 'A1nddP4q2n05ysh8f')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
        // e.target.reset();
    };
    return (
        // <form ref={form} onSubmit={sendEmail}>
        //     <label>Name</label>
        //     <input type="text" name="user_name" />
        //     <label>Email</label>
        //     <input type="email" name="user_email" />
        //     <label>Message</label>
        //     <textarea name="message" />
        //     <ReactSimpleVerify />
        //     <input type="submit" value="Send"/>
        // </form>
        <Form ref={form} style={{maxWidth: '800px'}}>
            <Form.Item
                label="姓名/公司名称"
                labelCol={{span: 6}}
                wrapperCol={{span: 18}}
                ><Input />
            </Form.Item>
            <Form.Item
                label="联系方式"
                labelCol={{span: 6}}
                wrapperCol={{span: 18}}
                name="user_name"
                ><Input placeholder='手机或电子邮箱'/>
            </Form.Item>
            <Form.Item
                label="留言"
                labelCol={{span: 6}}
                wrapperCol={{span: 18}}
                ><Input.TextArea rows={5}/>
            </Form.Item>
            <div>
                <ReactSimpleVerify />
                <Button onClick={sendEmail}>提交</Button>
            </div>
        </Form>
        // <ReactSliderVerify />
    );
};

export default ContactUs;