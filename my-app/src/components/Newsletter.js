import { Alert, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";

export const Newsletter = ({ onValidated, status, message }) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === 'success') clearFields();
    }, [status])
    

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        })
    }

    const clearFields = () => {
        setEmail('');
    }

}