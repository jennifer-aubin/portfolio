import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"


export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails ({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = () => {
        e.preventDefault();
        setButtonText('Sending...');
        let reponse = await fetch("http://localhost:5000:contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: 'Message send successfully'});
        } else {
            setStatus({ success: false, message: 'Try again please'});
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                    <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                    <h2>Get in Touch</h2>
                    </Col>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName' e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName' e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email' e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="phone" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone' e.target.value)} />
                            </Col>
                            <Col>
                                <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message' e.target.value)} />
                                <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Row>
            </Container>
        </section>

    )

}