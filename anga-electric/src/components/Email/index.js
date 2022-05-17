import { useRef, useState } from 'react';
import Recaptcha from 'react-recaptcha';
import emailjs from 'emailjs-com';

export const ContactUs = () => {
    const form = useRef();
    const [verified, setVerified] = useState();
    const onloadCallback = () => {
        setVerified(false);
    }
    const sendEmail = (e) => {
        if (!verified) {
            return;
        }
        e.preventDefault();

        emailjs.sendForm('service_4b5tap9', 'template_7vfqtjk', form.current, 'A1nddP4q2n05ysh8f')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        setVerified(false);
        onloadCallback();
    };

    const verifyCallback = res => {
        if (res) {
            setVerified(true);
        }
    }
    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <Recaptcha
                sitekey="6LcvG_cfAAAAAPQLRK29d1AQh7yIMFp20iLX-Fuo"
                render="explicit"
                verifyCallback={verifyCallback}
                onloadCallback={onloadCallback}
            />
            <input type="submit" value="Send" disabled={!verified}/>
        </form>
    );
};

export default ContactUs;