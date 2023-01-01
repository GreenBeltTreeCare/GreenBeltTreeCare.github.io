import React, {useRef, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [contactMethod, setContactMethod] = useState("Call");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState(false);
    const [numberError, setNumberError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [validEmailError, setValidEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    let valid = true;
    let validEmail = false;
    const navigate = useNavigate();
    const form = useRef();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    // Email JS Information
    const publicKey = "QRSJh2P5Gcmyk3Gst";
    const templateId = "template_zm3gvfh";
    const serviceId = "service_1n9bmqw";

    // Validate Email
    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email)
    }

    // Validate inputs
    const checkValues = (name, number, email, message) => {
        valid = true;
        if(name.length<1){
            setNameError(true);
            valid = false;
        } else {
            setNameError(false);
        }

        if (number.length<1){
            setNumberError(true);
            valid = false;
        } else {
            setNumberError(false);
        }

        validEmail = isValidEmail(email);

        if(!validEmail) {
            setValidEmailError(true);
        } else {
            setValidEmailError(false);
        }

        if (email.length<1){
            setEmailError(true);
            valid = false;
        } else {
            setEmailError(false);
        }

        if (message.length<1){
            setMessageError(true);
            valid = false
        } else {
            setMessageError(false)
        }
    }

    // Send email from form
    const sendEmail = (e) => {
        e.preventDefault();

        // Calls function to validate form data
        checkValues(name, number, email, message);

        // If all form data is valid, send email
        if(valid){
            emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
            navigate("/");
        }
    }

    return (
        <div>
            {/* Body */}
            <div className="contactWrapper">
                <h1 className="contactTitle">Contact Us</h1>
                <p className="contactSubTitle">Fill out the form below to request a quote and we will get back to you as soon as possible. <br/>You can also give us a call at <b>206-531-6525</b>.</p>

                <div className="requestFormDiv">
                    {/* Request Form */}
                    <form className="requestForm" ref={form} onSubmit={sendEmail}>
                        {/* Name input */}
                        <div className="formInputDiv">
                            <label className="formLabel">Full Name:*</label>
                            <div className="inputDiv">
                                <input className="formInput" type="text" name="full_name" onChange={(e) => setName(e.target.value)} value={name}/>
                                {nameError ? <p className="error">Full Name is Required!</p> : ""}
                            </div>
                        </div>
                        {/* Phone Number input */}
                        <div className="formInputDiv">
                            <label className="formLabel">Phone Number:*</label>
                            <div className="inputDiv">
                                <input className="formInput" type="text" name="phone_number" onChange={(e) => setNumber(e.target.value)}  value={number}/>
                                {numberError ? <p className="error">Phone Number is Required!</p> : ""}
                            </div>
                        </div>
                        {/* Email input */}
                        <div className="formInputDiv">
                            <label className="formLabel">Email:*</label>
                            <div className="inputDiv">
                                <input className="formInput" type="email" name="email" onChange={(e) => setEmail(e.target.value)}  value={email}/>
                                {emailError ? <p className="error">Email is Required!</p> : validEmailError ? <p className="error">Email is invalid!</p> : ""}
                            </div>
                        </div>
                        {/* Contact Method input */}
                        <div className="formInputDiv">
                            <label className="formLabel selectLabel">Contact Method:*</label>
                            <select className="selectInput" name="contact_method" onChange={(e) => setContactMethod(e.target.value)}  value={contactMethod}>
                                <option className="selectInput" value="Call">Call</option>
                                <option className="selectInput" value="Email">Email</option>
                            </select>
                        </div>
                        {/* Message input */}
                        <div className="formInputDiv">
                            <label className="formLabel">Message:*</label>
                            <div className="inputDiv">
                                <textarea className="formTextArea" name="message" rows="5" maxLength={1000} onChange={(e) => setMessage(e.target.value)}  value={message}></textarea>
                                {messageError ? <p className="error">Message is Required!</p> : ""}
                            </div>
                        </div>
                        {/* Send button */}
                        <div className="submitDiv">
                            <input className="formSubmit" type="submit" value="Send"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact