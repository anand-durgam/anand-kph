import './contact.css'

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import { BsTelephone } from "react-icons/bs";
import { GoMailRead } from "react-icons/go";

import { useEffect , useState } from 'react'
import Modal from 'react-bootstrap/Modal'

const Contact = () => {

    useEffect(() => {
        document.title = 'Contact Us - KPH Infotech Pvt Ltd'
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_a0y1uot', 'template_ngfvwmk', e.target, 'j1QM17qPb9kLzEspH')
        .then((result) => {
            console.log(result);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()

        setShow(true);
    };

    return(
        <>
        <div className='contact-us-container'>
        {/* react-js email-js contact form */}
            <div className='get-in-touch-container'>
            <h1>Get In Touch</h1>
                <form className='contact-form' ref={form} onSubmit={sendEmail}>
                {/* ref={form} onSubmit={sendEmail} */}
                    <label>Your Name</label>
                    <input className='contact-input-box' type="text" name="name" required/>
                    <br/>
                    <label>Your Email</label>
                    <input className='contact-input-box' type="email" name="email" required/>
                    <br/>
                    <label>Subject</label>
                    <input className='contact-input-box' type="text" name="subject" required/>
                    <br/>
                    <label>Your Message (optional)</label>
                    <textarea className='text-area-input contact-input-box' name="message" />
                    {/* <input className='submit-button'  value="Submit" /> */}
                    <button className='submit-button' variant="primary"  type="submit">
                        Submit
                    </button>

                    {/* Popup Modal using react bootstrap */}
                        <Modal  show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Thanks for showing interest in us</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Your form is submitted succesfully</Modal.Body>
                        <Modal.Footer>
                        <button variant="secondary" onClick={handleClose}>
                            Close
                        </button>
                        </Modal.Footer>
                        </Modal>
                    {/*  ///////////////////////////  */}

                </form>
            </div>
            <div className='contact-info-container'>
                <h3>Contact Address:</h3>
                <p>If you face any type of problem, reach out to our support team anytime from anywhere.</p>
                <br/>
                <BsTelephone />
                <a className='phone-number' href="tel:+91-9393221273">+91-9393221273</a><br/>
                <GoMailRead className='email-icon' />
                <a className='email' href = "mailto: hr@kphinfotech.com">hr@kphinfotech.com</a>
                <br/>
                <br/>
                <p>
                2nd Floor , Vamsiram Jyothi Celesta Plot # 66, Kavuri Hills, Jubilee Hills, 
                Hyderabad, Telangana 500033.
                </p>
            </div>
        </div>
        </>
    )
}

export default Contact